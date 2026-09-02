AI CODING MODULE IMPLEMENTATION

Kamu akan menambahkan modul baru bernama:

AI CODING

ke dalam MD Keep.

SUMBER UTAMA:

1. MD Keep V2 Master Blueprint
   → gunakan sebagai sumber arsitektur dan prinsip existing system.

2. MD Keep AI Coding Protocol v1
   → gunakan sebagai aturan workflow AI Coding.

JANGAN membuat implementasi berdasarkan asumsi
jika sumber sudah menentukan sesuatu.

==================================================
TUJUAN
==================================================

Tambahkan AI Coding sebagai fitur native MD Keep.

AI Coding berfungsi sebagai command center untuk
workflow:

ANALYZE
→ PATCH
→ BUILD
→ TEST
→ CHECKPOINT
→ PREVIEW
→ PRODUCTION
→ ROLLBACK

==================================================
FITUR UTAMA
==================================================

1. AI Coding Console

2. Project Selector

3. Project Context

4. Task Input

5. Quick Commands:

- ANALYZE
- PATCH
- DEBUG
- UI PATCH
- NEW FEATURE
- BUILD
- PREVIEW
- PRODUCTION
- CHECKPOINT
- ROLLBACK
- STOP

6. Protocol Loader

7. Prompt Composer

8. Execution Status

9. Build/Test Status

10. Deployment Status

11. Checkpoint History

12. Rollback Control

==================================================
ATURAN PENTING
==================================================

AI CODING WAJIB menggunakan:

MD Keep AI Coding Protocol v1

Jangan membuat ulang protocol di tempat lain.

Protocol harus diperlakukan sebagai
single source of truth.

Jangan rewrite file besar tanpa alasan.

Gunakan surgical patch.

Build/test sebelum deployment.

Preview sebelum production.

Jika perubahan berisiko besar:
STOP dan minta approval.

==================================================
TAHAP IMPLEMENTASI
==================================================

JANGAN langsung coding seluruh fitur.

TAHAP 1 — ANALYZE

Pelajari existing MD Keep.

Identifikasi:

- struktur project
- frontend
- backend
- database
- authentication
- existing integrations
- GitHub integration
- Vercel integration
- Supabase integration
- Cloudflare integration
- existing AI flow
- existing Toolbox architecture

Jangan mengubah kode.

Berikan:

1. file yang perlu diubah
2. komponen yang perlu dibuat
3. database changes jika diperlukan
4. API/integration changes
5. risiko
6. rencana implementasi

STOP setelah analisis.

Jangan deploy.