<script setup lang="ts">
import { contact } from '~/config/contact'
</script>

<template>
  <section id="tentang" class="hero">
    <div class="hero-background" aria-hidden="true"></div>
    <div class="hero-overlay" aria-hidden="true"></div>
    <div class="container hero-content">
      <div class="hero-copy">
        <p class="eyebrow eyebrow--light">Solusi Digital untuk Bisnis Anda</p>
        <h1>Bangun Sistem,<br><em>Wujudkan Potensi</em></h1>
        <p class="hero-description">Udumbara Informatika hadir sebagai mitra teknologi untuk membantu instansi, perusahaan, dan UMKM menghadirkan solusi digital yang tepat, modern, dan berkelanjutan.</p>
        <div class="hero-actions">
          <a :href="contact.whatsappUrl" class="button button--gold" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 15.6v3a1.9 1.9 0 0 1-2 1.9A16.9 16.9 0 0 1 3.5 5.5a1.9 1.9 0 0 1 1.9-2h3a1.9 1.9 0 0 1 1.9 1.6l.6 2.9a1.8 1.8 0 0 1-.5 1.7L9.2 10.8a13.7 13.7 0 0 0 4 4l1.1-1.1a1.8 1.8 0 0 1 1.7-.5l2.9.6a1.9 1.9 0 0 1 1.6 1.8Z" /></svg>
            Konsultasi Sekarang
          </a>
          <NuxtLink to="#layanan" class="button button--outline">Lihat Layanan <span aria-hidden="true">→</span></NuxtLink>
        </div>
      </div>
      <ul class="hero-points" aria-label="Keunggulan layanan">
        <li><span class="point-icon">⚙</span><p><strong>Aplikasi Web &amp; Mobile</strong><small>Custom sesuai kebutuhan</small></p></li>
        <li><span class="point-icon">☁</span><p><strong>Infrastruktur &amp; Server</strong><small>Stabil dan aman</small></p></li>
        <li><span class="point-icon">◌</span><p><strong>Konsultasi IT</strong><small>Mulai dari perencanaan hingga implementasi</small></p></li>
      </ul>
    </div>
  </section>
</template>
