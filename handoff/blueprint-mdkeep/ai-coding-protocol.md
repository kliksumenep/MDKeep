# MD KEEP — AI CODING PROTOCOL v1

> SAT SET • HEMAT TOKEN • MINIM REWORK • AMAN

## 01 — FILOSOFI

MD Keep tidak menggunakan AI dengan prinsip:

> "Suruh AI mengerjakan sebanyak mungkin."

Tetapi:

> "Suruh AI melakukan perubahan sekecil mungkin dengan hasil sebesar mungkin."

PRINSIP UTAMA:

1. THINK before CODE
2. PATCH, don't REWRITE
3. TEST before DEPLOY
4. PREVIEW before PRODUCTION
5. CHECKPOINT before BIG CHANGE
6. ONE TASK at a time
7. Jangan membuat AI membaca ulang hal yang tidak diperlukan
8. Jangan meminta AI menjelaskan sesuatu yang tidak dibutuhkan
9. Jangan deploy setiap kali melakukan perubahan kecil
10. Jangan memperbaiki masalah dengan cara membuat masalah baru


# 02 — ATURAN EMAS AI CODING

## RULE 01 — JANGAN REWRITE

Jika hanya sebagian kode yang bermasalah:

❌ Jangan:
"Rewrite seluruh file."

✅ Gunakan:
"Gunakan surgical patch. Ubah hanya bagian yang diperlukan."

AI harus mempertahankan kode existing selama tidak berkaitan dengan masalah.


## RULE 02 — JANGAN CODING SEBELUM PAHAM

Untuk masalah yang belum jelas:

AI harus melakukan:

ANALYZE
↓
IDENTIFY
↓
PLAN
↓
PATCH
↓
TEST


## RULE 03 — JANGAN DEPLOY TERLALU CEPAT

Urutan:

CODE
↓
BUILD / TEST
↓
FIX
↓
BUILD / TEST
↓
PREVIEW
↓
CHECK
↓
PRODUCTION


## RULE 04 — SATU TASK SATU TUJUAN

Jangan mencampur:

- bug fixing
- redesign
- refactoring
- fitur baru
- optimasi
- deployment

dalam satu instruksi besar.

Pisahkan menjadi task kecil.


# 03 — MODE KERJA

MD Keep menggunakan 6 mode.


## MODE A — ANALYZE

Dipakai ketika masalah belum jelas.

PROMPT:

MODE: ANALYZE ONLY

Pelajari project yang sedang aktif.

Masalah:
[ISI MASALAH]

Jangan mengubah file.
Jangan rewrite kode.
Jangan deploy.

Cari:

1. file yang terkait
2. komponen/fungsi yang terkait
3. penyebab masalah
4. solusi paling kecil
5. risiko perubahan
6. file apa saja yang benar-benar perlu disentuh

Berikan hasil analisis secara ringkas.

Jangan melakukan perubahan.


## MODE B — SURGICAL PATCH

Dipakai untuk memperbaiki atau mengubah kode.

PROMPT:

MODE: SURGICAL PATCH

Implementasikan solusi yang sudah dianalisis.

ATURAN:

- jangan rewrite file
- jangan refactor
- jangan mengubah kode yang tidak terkait
- gunakan perubahan sekecil mungkin
- pertahankan struktur existing
- pertahankan behavior yang sudah benar
- jangan menambah dependency kecuali mutlak diperlukan

Target:
[ISI TARGET]

Setelah selesai:

1. cek syntax
2. jalankan build/test
3. laporkan hasilnya

Jangan deploy.


## MODE C — NEW FEATURE

Untuk fitur baru.

PROMPT:

MODE: NEW FEATURE

Tambahkan fitur:

[ISI FITUR]

ATURAN:

- gunakan arsitektur existing
- jangan merombak sistem
- jangan membuat dependency baru jika tidak diperlukan
- jangan mengubah fitur existing
- buat implementasi minimal yang stabil

Sebelum coding:

1. tentukan file yang perlu diubah
2. tentukan titik integrasi
3. implementasikan

Setelah selesai:

1. build/test
2. cek regresi
3. laporkan file yang berubah

Jangan deploy.


## MODE D — UI / UX PATCH

PROMPT:

MODE: UI PATCH

Perbaiki:

[ISI MASALAH UI]

Prioritas:

1. mobile first
2. usability
3. visual hierarchy
4. consistency
5. existing design system

ATURAN:

- jangan mengubah logic
- jangan mengubah backend
- jangan mengubah fitur lain
- jangan rewrite seluruh halaman
- ubah hanya komponen UI yang diperlukan

Setelah selesai:
build/test.

Jangan deploy.


## MODE E — DEBUG

PROMPT:

MODE: DEBUG

Terjadi masalah:

[ISI ERROR]

Jangan langsung rewrite.

Cari root cause terlebih dahulu.

Langkah:

1. identifikasi error
2. tentukan file penyebab
3. tentukan baris/fungsi terkait
4. buat patch minimal
5. test
6. jika gagal, analisis error berikutnya

Jangan melakukan perubahan besar tanpa alasan.


## MODE F — DEPLOY

Hanya digunakan setelah kode sudah lolos build/test.

PROMPT:

MODE: DEPLOY

Kode sudah selesai dan build/test berhasil.

Sekarang:

1. lakukan deployment ke Preview
2. pastikan deployment berhasil
3. cek hasil deployment
4. jangan deploy production dulu

Jika Preview OK:

Tunggu instruksi PRODUCTION.


# 04 — DEPLOY PRODUCTION

Gunakan hanya ketika Preview sudah diverifikasi.

PROMPT:

MODE: PRODUCTION DEPLOY

Preview sudah diverifikasi OK.

Deploy versi ini ke production.

Jangan melakukan perubahan kode tambahan.

Setelah deployment:

- pastikan deployment berhasil
- laporkan URL/status
- jangan melakukan perubahan lain.


# 05 — ERROR RECOVERY

Jika deployment atau build gagal:

❌ Jangan:

"Perbaiki semuanya."

Gunakan:

MODE: ERROR RECOVERY

Deployment/build gagal.

Error:
[PASTE ERROR]

ATURAN:

- jangan rewrite project
- jangan melakukan refactor
- jangan mengubah bagian yang tidak berkaitan
- fokus hanya pada root cause error ini

Lakukan:

1. identifikasi penyebab
2. patch minimal
3. build/test
4. laporkan hasil

Jangan deploy sampai build berhasil.


# 06 — ROLLBACK

Jika perubahan membuat project rusak:

STOP.

Jangan meminta AI memperbaiki kerusakan dengan perubahan yang semakin besar.

Gunakan:

MODE: ROLLBACK

Perubahan terakhir menyebabkan masalah.

Kembalikan project ke checkpoint/commit terakhir yang stabil.

Jangan melakukan perubahan lain.

Setelah rollback:

1. build
2. test
3. pastikan project kembali normal


# 07 — CHECKPOINT SYSTEM

Setiap perubahan penting harus mempunyai checkpoint.

FORMAT:

CHECKPOINT: [NAMA]
VERSION: [VERSI]

STATUS:
BUILD: OK
TEST: OK
PREVIEW: OK
PRODUCTION: OK / NOT YET

PERUBAHAN:
- ...
- ...
- ...

FILE DIUBAH:
- ...
- ...

KNOWN ISSUES:
- ...

CATATAN:
...


# 08 — LARGE FILE PROTOCOL

Jika file >500 baris:

JANGAN langsung rewrite.

Jika file >1.000 baris:

WAJIB surgical patch.

Jika file >2.000 baris:

WAJIB:

ANALYZE
↓
IDENTIFY TARGET
↓
PATCH
↓
BUILD
↓
TEST

Jika perubahan diperkirakan menyentuh banyak bagian:

AI harus memberi peringatan sebelum melakukan rewrite.


# 09 — TOKEN SAVING PROTOCOL

## Jangan meminta full code

❌:
"Berikan seluruh file yang sudah diperbaiki."

✅:
"Berikan patch/perubahan yang diperlukan saja."


## Jangan meminta penjelasan panjang

❌:
"Jelaskan secara lengkap semua yang kamu lakukan."

✅:
"Laporkan singkat: file berubah, perubahan, hasil test."


## Jangan membaca seluruh project tanpa alasan

❌:
"Periksa semua file."

✅:
"Periksa file yang berkaitan dengan fitur X."


## Jangan mengulang konteks

Jika AI sudah memahami task:

Gunakan:

"Continue from current task."

Bukan mengulangi seluruh penjelasan.


# 10 — ONE TASK RULE

Setiap sesi idealnya memiliki satu tujuan utama.

CONTOH:

TASK 01
Fix login

↓

TASK 02
Fix mobile layout

↓

TASK 03
Add notification

↓

TASK 04
Build

↓

TASK 05
Preview

↓

TASK 06
Production


# 11 — BATCH SMALL CHANGES

Jika ada banyak perubahan kecil yang tidak saling bergantung:

Gabungkan menjadi satu batch.

Contoh:

BATCH UI:

- ubah radius card
- rapikan spacing
- perbaiki typography
- perbaiki tombol

Lalu:

BUILD
↓
TEST
↓
PREVIEW

Jangan deploy 4 kali.


# 12 — DEPENDENCY RULE

Jangan install dependency baru kecuali:

1. benar-benar diperlukan
2. tidak bisa diselesaikan dengan existing stack
3. ada alasan teknis yang jelas

Jika dependency baru diperlukan:

AI harus melaporkan:

DEPENDENCY:
[nama]

ALASAN:
[alasan]

ALTERNATIF:
[alternatif]


# 13 — GIT / CHECKPOINT RULE

Sebelum perubahan besar:

COMMIT STABIL

Setelah perubahan berhasil:

COMMIT BARU

Format:

feat: [fitur]
fix: [bug]
ui: [perubahan UI]
refactor: [refactor]

Jika gagal:

ROLLBACK.


# 14 — AI RESPONSE FORMAT

AI harus menjawab singkat.

Format:

STATUS:
DONE / NEED ACTION / FAILED

FILES:
- file1
- file2

CHANGES:
- ...
- ...

BUILD:
PASS / FAIL

TEST:
PASS / FAIL

DEPLOY:
NOT DEPLOYED / PREVIEW / PRODUCTION

ISSUE:
- ...

NEXT:
- ...


# 15 — EMERGENCY STOP

AI WAJIB berhenti dan meminta konfirmasi jika:

- harus rewrite file besar
- harus mengubah arsitektur
- harus mengubah database schema
- harus menghapus data
- harus menghapus dependency
- harus mengubah authentication
- harus melakukan migration
- perubahan menyentuh banyak fitur yang tidak terkait
- solusi berpotensi merusak production


FORMAT:

⚠️ CHANGE SCOPE WARNING

Perubahan yang diperlukan:
[...]

Risiko:
[...]

File terdampak:
[...]

Apakah saya boleh melanjutkan?


# 16 — MASTER PROMPT

Jika user tidak ingin memilih mode secara manual:

Gunakan prompt berikut.

MD KEEP AUTO CODING PROTOCOL

Tugas:
[ISI TUGAS]

Gunakan workflow:

ANALYZE
→ SURGICAL PATCH
→ BUILD
→ TEST
→ PREVIEW
→ VERIFY
→ PRODUCTION

ATURAN:

- jangan rewrite tanpa alasan
- gunakan patch minimal
- jangan refactor jika tidak diminta
- jangan mengubah kode yang tidak terkait
- jangan menambah dependency tanpa alasan
- jangan deploy sebelum build/test berhasil
- gunakan Preview sebelum Production
- jika terjadi error, perbaiki root cause
- jika perubahan berisiko besar, STOP dan minta konfirmasi
- prioritaskan efisiensi token
- prioritaskan stabilitas existing system

Jangan memberikan penjelasan panjang.

Setiap tahap harus melaporkan status singkat.


# 17 — QUICK COMMANDS

User cukup mengatakan:

"ANALYZE"
→ analisis tanpa perubahan

"PATCH"
→ lakukan perubahan minimal

"DEBUG"
→ cari root cause dan perbaiki

"UI PATCH"
→ perubahan UI saja

"BUILD"
→ build/test tanpa deploy

"PREVIEW"
→ deploy preview

"PRODUCTION"
→ deploy production

"CHECKPOINT"
→ buat checkpoint

"ROLLBACK"
→ kembali ke checkpoint stabil

"STOP"
→ hentikan perubahan


# 18 — GOLDEN RULE

Jangan menghabiskan 10.000 token
untuk menyelesaikan masalah
yang sebenarnya hanya membutuhkan
perubahan 20 baris.

Jangan deploy 10 kali
untuk pekerjaan yang bisa
diselesaikan dalam 2 deployment.

Jangan rewrite 2.000 baris
hanya karena 20 baris bermasalah.

Jangan meminta AI bekerja keras.

Buat AI bekerja TEPAT.


# MD KEEP CODING MANTRA

THINK SMALL.
PATCH SMALL.
TEST FIRST.
PREVIEW FIRST.
DEPLOY LAST.

SAT SET.
AMAN.
HEMAT.