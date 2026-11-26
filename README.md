# Portofolio Niam Makhali (`niammakhali.me`)

Website portofolio statis yang dibangun menggunakan **Astro**, **React**, dan **Tailwind CSS**, di-deploy otomatis ke GitHub Pages setiap kali ada push ke branch `main`.

## Struktur Folder

```text
Portofolio/
├── src/                    # Kode utama website
│   ├── pages/              # Halaman website (index, buruh, madrasah, sinisme)
│   ├── components/         # Komponen tiap section (Hero, About, Projects, Skills, Contact, dll.)
│   ├── data/               # Data teks profil, skills, dan daftar proyek
│   ├── layouts/            # Layout utama (head, navigasi, footer)
│   └── styles/             # Styling global
├── public/                 # Aset statis yang langsung dipublikasikan ke website
│   ├── images/             # Gambar thumbnail proyek & hero artikel
│   ├── documents/          # Semua file PDF proyek & policy brief
│   ├── cv.html             # Halaman CV online (/cv.html)
│   ├── CV_NIAM_MAKHALI.pdf # File PDF CV yang bisa diunduh
│   ├── profile.jpg         # Foto profil di navbar
│   ├── favicon.svg         # Ikon tab browser
│   └── CNAME               # Konfigurasi custom domain (niammakhali.me)
├── cv-source/              # Sumber generator CV berbasis R Markdown (tidak ikut di-deploy)
│   ├── cv_data/            # File CSV isi CV (edit di sini)
│   ├── cv.rmd              # Template R Markdown CV
│   └── render_cv.r         # Script R untuk generate ulang ../public/cv.html & PDF
├── data/                   # Arsip ikon mentah (tidak ikut di-deploy)
└── dist/                   # Hasil build lokal Astro (otomatis dibuat saat `npm run build`)
```

## Panduan Cepat Edit Konten

- **Ubah nama, bio, email, atau daftar skills:** edit `src/data/constants.ts`.
- **Tambah/edit proyek atau publikasi:** edit `src/data/projects.json`.
  - Simpan gambar thumbnail di `public/images/` (referensikan sebagai `/images/nama-file.jpg`).
  - Simpan file PDF di `public/documents/` (referensikan sebagai `/documents/nama-file.pdf`).
- **Tambah/edit artikel ("The Boring Stuff"):** edit halaman di `src/pages/` (`buruh.astro`, `madrasah.astro`, `sinisme.astro`) dan daftar kartunya di `src/components/CVResume.astro`.
- **Update CV:** edit file CSV di `cv-source/cv_data/`, lalu jalankan `cv-source/render_cv.r` dari dalam folder `cv-source/` untuk memperbarui `public/cv.html` dan `public/CV_NIAM_MAKHALI.pdf`.

## Perintah Pengembangan

```bash
npm run dev      # Jalankan preview lokal di browser
npm run build    # Build website statis ke folder dist/
npm run preview  # Preview hasil build lokal
```
