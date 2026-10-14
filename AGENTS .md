# AGENTS.md — Udumbara Informatika

## 1. Project

Project ini adalah website resmi **Udumbara Informatika**.

Stack utama:

- Nuxt 4.5.2
- Vue 3
- TypeScript
- SSR aktif
- npm
- Responsive Web Design
- SEO friendly
- Mobile-first
- Bahasa utama website: Indonesia

Jangan mengganti versi Nuxt tanpa instruksi.

## 2. Tujuan Website

Website digunakan sebagai company profile Udumbara Informatika untuk menampilkan:

- Profil perusahaan
- Layanan
- Portofolio
- Project yang pernah dikerjakan
- Artikel / Blog
- Informasi kontak
- CTA konsultasi
- WhatsApp

Website harus terlihat profesional sebagai perusahaan software / IT.
Hindari desain yang terlihat seperti template AI generik.

## 3. Design System

Tema utama:

- Navy / dark blue
- Putih
- Kuning / gold sebagai accent
- Background section boleh menggunakan variasi navy terang atau abu-abu sangat muda

Karakter desain:

- Modern
- Professional
- Corporate
- Clean
- Elegan
- Tidak terlalu ramai
- Tidak menggunakan efek berlebihan
- Tidak menggunakan gradient berlebihan
- Tidak membuat tampilan seperti dashboard admin

Gunakan whitespace yang cukup.
Card menggunakan border radius yang proporsional.
Shadow harus lembut dan minimal.

## 4. Responsive

Semua halaman WAJIB responsive.

Target:

- Mobile
- Tablet
- Laptop
- Desktop
- Wide screen

Gunakan pendekatan mobile-first.
Tidak boleh ada horizontal scroll pada mobile.

Pastikan navigation, font, image, grid, button, dan section responsive serta tidak overflow.

## 5. Struktur Nuxt

Gunakan struktur Nuxt 4:

```text
app/
├── assets/
│   └── css/
├── components/
├── composables/
├── layouts/
├── pages/
├── utils/
└── app.vue

public/
nuxt.config.ts
```

Jangan membuat struktur custom yang tidak diperlukan.

## 6. app.vue

`app.vue` digunakan sebagai root application.

Gunakan:

```vue
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
```

Jangan meletakkan seluruh homepage langsung di `app.vue`.

## 7. Layout

Gunakan `app/layouts/default.vue`.

Default layout menangani elemen global seperti header, navigation, main content, dan footer.

```vue
<template>
  <div>
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
```

## 8. Components

Komponen reusable ditempatkan di `app/components/`.

Contoh:

```text
AppHeader.vue
AppFooter.vue
HeroSection.vue
ServiceCard.vue
ProjectCard.vue
SectionTitle.vue
ContactCTA.vue
WhatsAppButton.vue
```

Jangan membuat satu file Vue yang terlalu besar. Jika suatu bagian dapat digunakan kembali atau memiliki tanggung jawab sendiri, pisahkan menjadi component.

## 9. Pages

Gunakan file-based routing Nuxt.

```text
app/pages/
├── index.vue
├── tentang-kami.vue
├── layanan/
│   ├── index.vue
│   └── [slug].vue
├── portofolio/
│   ├── index.vue
│   └── [slug].vue
├── blog/
│   ├── index.vue
│   └── [slug].vue
└── kontak.vue
```

Jangan menggunakan Vue Router manual kecuali benar-benar diperlukan.

## 10. Homepage

Homepage `/` minimal memiliki:

- Header dengan Beranda, Tentang Kami, Layanan, Portofolio, Blog, Kontak
- CTA `Konsultasi Sekarang`
- Hero dengan eyebrow `SOLUSI DIGITAL UNTUK BISNIS ANDA`
- Headline `Bangun Sistem, Wujudkan Potensi`
- Deskripsi Udumbara Informatika sebagai partner teknologi
- CTA `Konsultasi Sekarang`
- CTA kedua `Lihat Layanan`
- Layanan: Aplikasi Web, Aplikasi Mobile, Infrastruktur IT, Konsultasi & Support
- Portfolio preview
- CTA konsultasi sebelum footer
- Footer berisi identitas, navigation, layanan, kontak, social media jika tersedia, dan copyright

## 11. Data Placeholder

JANGAN menganggap data contoh sebagai data perusahaan yang sebenarnya.

Contoh seperti `50+ klien`, `100+ project`, `10+ tahun pengalaman`, dan `98% kepuasan` adalah placeholder.

Jangan tampilkan statistik tersebut sebagai fakta production kecuali sudah tersedia data resmi. Jika data belum tersedia, gunakan placeholder yang mudah diganti atau jangan tampilkan statistik.

## 12. SSR

Website WAJIB menggunakan SSR. Jangan mengubah project menjadi SPA.

Pastikan:

```ts
export default defineNuxtConfig({
  ssr: true
})
```

Hindari penggunaan `window`, `document`, `localStorage`, atau `sessionStorage` secara langsung ketika SSR berlangsung.

Jika diperlukan, gunakan:

```ts
if (import.meta.client) {
  // browser only
}
```

## 13. Hydration

JANGAN menghasilkan hydration mismatch.

Server HTML dan client HTML harus konsisten.

Hindari initial render yang bergantung pada:

```ts
Math.random()
Date.now()
new Date()
window.innerWidth
```

Jangan memperbaiki hydration mismatch hanya dengan `<ClientOnly>` kecuali component memang benar-benar membutuhkan browser API. Cari penyebab hydration mismatch terlebih dahulu.

## 14. SEO

SEO adalah PRIORITAS.

Setiap halaman harus memiliki metadata relevan menggunakan `useSeoMeta()`.

```ts
useSeoMeta({
  title: 'Udumbara Informatika',
  description: '...',
  ogTitle: 'Udumbara Informatika',
  ogDescription: '...',
  ogType: 'website'
})
```

Jangan menggunakan title dan description yang sama untuk seluruh halaman.

## 15. SEO Content

Gunakan HTML semantic:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

Gunakan satu `<h1>` utama per halaman dan struktur heading yang logis.

Jangan menggunakan heading hanya untuk memperbesar tulisan.

## 16. Portfolio SEO

Detail portfolio harus memiliki URL sendiri, misalnya:

```text
/portofolio/sistem-informasi-rumah-sakit
/portofolio/sistem-informasi-desa
/portofolio/aplikasi-mobile
```

Jangan membuat detail portfolio hanya menggunakan modal jika konten ingin di-index Google.

Setiap project dipersiapkan untuk memiliki:

- slug
- title
- description
- image
- category
- content
- meta title
- meta description

## 17. Blog SEO

Artikel menggunakan URL `/blog/[slug]`.

Setiap artikel harus mempunyai halaman SSR sendiri.

Persiapkan struktur:

- title
- slug
- excerpt
- content
- image
- published_at
- meta_title
- meta_description

## 18. Images

Gunakan gambar yang relevan dengan Udumbara Informatika.

Semua image wajib mempunyai `alt` yang deskriptif.

Jangan menggunakan nama seperti `image1.jpg` atau `foto2.jpg`.

Gunakan nama SEO friendly seperti:

```text
udumbara-aplikasi-web.webp
udumbara-mobile-app.webp
project-sistem-rumah-sakit.webp
```

Jangan menggunakan base64 image besar di source code.

## 19. Performance

Prioritaskan Core Web Vitals.

Hindari JavaScript berlebihan, dependency tidak diperlukan, image terlalu besar, animation berat, terlalu banyak font, dan layout shift.

Jangan install package baru jika solusi native Nuxt/Vue/CSS sudah cukup.

## 20. CSS

Gunakan styling yang konsisten. Jangan membuat inline style secara berlebihan.

Prioritaskan `app/assets/css/` dan scoped CSS untuk component-specific styling.

Gunakan CSS variables untuk warna utama:

```css
:root {
  --color-primary: #081a35;
  --color-primary-light: #102c55;
  --color-accent: #f4c542;
  --color-white: #ffffff;
  --color-text: #172033;
  --color-muted: #667085;
}
```

Nilai dapat disesuaikan selama implementasi.

## 21. JavaScript / TypeScript

Gunakan `<script setup lang="ts">` untuk component baru jika memungkinkan.

Gunakan Composition API.
Hindari Options API untuk code baru.
Jangan menggunakan `any` tanpa alasan yang jelas.

## 22. API

Website nantinya dapat mengambil Portfolio, Blog, Services, dan informasi lainnya dari API.

Jangan hardcode URL API di component.

Gunakan `runtimeConfig` dan environment variable:

```env
NUXT_PUBLIC_API_BASE=
```

Kemudian:

```ts
const config = useRuntimeConfig()
```

## 23. Fetch Data

Untuk data SSR gunakan `useFetch()` atau `useAsyncData()` sesuai kebutuhan.

Jangan melakukan fetch utama halaman hanya di `onMounted()` karena dapat merusak tujuan SSR dan SEO.

Konten penting untuk SEO harus tersedia saat server render.

## 24. Security

Jangan menyimpan API secret, password, private key, atau token rahasia di source code frontend.

Hanya environment variable public yang boleh menggunakan `NUXT_PUBLIC_*`.

Jangan expose credential backend ke browser.

## 25. Accessibility

Pastikan:

- Button menggunakan `<button>` jika melakukan action
- Link menggunakan `<NuxtLink>` untuk navigasi internal
- Image mempunyai alt
- Form mempunyai label
- Focus state tidak dihilangkan
- Contrast teks tetap terbaca

## 26. Navigation

Untuk internal navigation gunakan `<NuxtLink>`.

Jangan menggunakan `<a href="/...">` untuk route internal tanpa alasan.

## 27. Coding Rules

Saat melakukan perubahan:

1. Baca struktur project terlebih dahulu.
2. Jangan menghapus code yang tidak berhubungan dengan task.
3. Jangan mengganti dependency tanpa alasan.
4. Jangan upgrade Nuxt secara otomatis.
5. Jangan mengubah konfigurasi deployment tanpa diminta.
6. Jangan mengubah environment variable yang sudah ada tanpa diminta.
7. Jangan membuat ulang project.
8. Jangan mengubah SSR menjadi SPA.
9. Pertahankan compatibility dengan Nuxt 4.5.2.
10. Gunakan solusi sederhana dan maintainable.

## 28. Before Editing

Sebelum mengubah code:

- Periksa file yang sudah ada.
- Pahami implementasi saat ini.
- Gunakan component yang sudah tersedia jika cocok.
- Hindari duplicate component.
- Jangan overwrite implementasi yang sudah bekerja tanpa alasan.

## 29. After Editing

Setelah melakukan perubahan:

- Pastikan tidak ada syntax error.
- Pastikan TypeScript tidak error.
- Pastikan route berjalan.
- Pastikan SSR tetap berjalan.
- Periksa hydration warning.
- Periksa responsive layout.
- Jalankan build jika perubahan cukup besar.

Gunakan:

```bash
npm run build
```

Build harus berhasil sebelum task dianggap selesai.

## 30. Prioritas Project

Prioritas:

1. SSR
2. SEO
3. Clean UI
4. Responsive
5. Performance
6. Maintainable code
7. Accessibility
8. Security

Jangan mengorbankan SSR atau SEO hanya untuk mempermudah implementasi frontend.

Jika requirement tidak jelas, jangan mengubah arsitektur project secara besar-besaran.
