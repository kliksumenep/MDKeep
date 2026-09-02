// MD Keep — Service Worker
// Fungsi: menyimpan salinan "wajah" app (HTML, manifest, icon) di HP,
// supaya tetap bisa kebuka meski dibuka dari shortcut dalam kondisi
// offline total / sinyal nol dari awal.
//
// CARA UPDATE: setiap kali index.html diubah & ditempel ulang ke GitHub,
// naikkan angka di CACHE_VERSION ini (misal 'mdkeep-v2' -> 'mdkeep-v3').
// Ini WAJIB, supaya HP otomatis ambil tampilan terbaru dan tidak
// "kesangkut" di versi lama (penyebab paling umum PWA terasa macet).
const CACHE_VERSION = 'mdkeep-v2';

const CORE_ASSETS = [
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// INSTALL — simpan salinan awal
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(CORE_ASSETS))
  );
  self.skipWaiting();
});

// ACTIVATE — buang cache versi lama biar tidak menumpuk / bentrok
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_VERSION)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// FETCH
// - Untuk halaman utama (navigasi): coba internet dulu (biar selalu dapat
//   versi terbaru saat online), kalau gagal/offline baru pakai salinan cache.
// - Untuk file lain (manifest, icon, dst): pakai cache dulu biar cepat,
//   kalau tidak ada baru ambil dari internet.
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const isNavigation = req.mode === 'navigate' ||
    (req.headers.get('accept') || '').includes('text/html');

  if (isNavigation) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put('./index.html', copy));
          return res;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  event.respondWith(
    caches.match(req).then((cached) => cached || fetch(req).catch(() => cached))
  );
});
