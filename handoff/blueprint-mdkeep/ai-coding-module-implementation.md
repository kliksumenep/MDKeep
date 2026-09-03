# AI Coding Module Implementation

## Deskripsi Tugas
Kamu akan menambahkan modul baru bernama **AI CODING** ke dalam MD Keep.

### Sumber Utama
1. **MD Keep V2 Master Blueprint**  
   Gunakan sebagai sumber arsitektur dan prinsip *existing system*.
2. **MD Keep AI Coding Protocol v1**  
   Gunakan sebagai aturan workflow AI Coding.

> ⚠️ **PENTING:** JANGAN membuat implementasi berdasarkan asumsi jika sumber sudah menentukan sesuatu.

---

## Tujuan
Tambahkan AI Coding sebagai fitur native MD Keep. Fitur ini berfungsi sebagai *command center* untuk workflow berikut:
`ANALYZE` → `PATCH` → `BUILD` → `TEST` → `CHECKPOINT` → `PREVIEW` → `PRODUCTION` → `ROLLBACK`

---

## Fitur Utama
1. **AI Coding Console**
2. **Project Selector**
3. **Project Context**
4. **Task Input**
5. **Quick Commands:**
   * ANALYZE
   * PATCH
   * DEBUG
   * UI PATCH
   * NEW FEATURE
   * BUILD
   * PREVIEW
   * PRODUCTION
   * CHECKPOINT
   * ROLLBACK
   * STOP
6. **Protocol Loader**
7. **Prompt Composer**
8. **Execution Status**
9. **Build/Test Status**
10. **Deployment Status**
11. **Checkpoint History**
12. **Rollback Control**

---

## Aturan Penting
* **Single Source of Truth:** AI CODING wajib menggunakan *MD Keep AI Coding Protocol v1*. Jangan membuat ulang protocol di tempat lain.
* **Surgical Patch:** Jangan *rewrite* file besar tanpa alasan. Gunakan perubahan spesifik (*surgical patch*).
* **Workflow Validasi:** Wajib melakukan *build/test* sebelum *deployment*, dan *preview* sebelum *production*.
* **Manajemen Risiko:** Jika perubahan berisiko besar, segera **STOP** dan minta *approval*.

---

## Tahap Implementasi

### 🛑 JANGAN langsung coding seluruh fitur!

### TAHAP 1 — ANALYZE

#### 1. Pelajari Existing MD Keep
Identifikasi aspek-aspek berikut tanpa mengubah kode asal:
* Struktur project
* Frontend & Backend
* Database & Authentication
* Existing integrations (GitHub, Vercel, Supabase, Cloudflare)
* Existing AI flow & Existing Toolbox architecture

#### 2. Output yang Harus Diberikan:
1. Daftar file yang perlu diubah
2. Komponen yang perlu dibuat
3. Perubahan database (*database changes*) jika diperlukan
4. Perubahan API/integrasi
5. Analisis risiko
6. Rencana implementasi

> 🛑 **STOP setelah analisis selesai. Jangan lakukan deploy.**
