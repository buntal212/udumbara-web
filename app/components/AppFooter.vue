<script setup lang="ts">
import { contact } from '~/config/contact'

const copyrightYear = 2026
</script>

<template>
  <footer id="kontak" class="site-footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <NuxtLink to="/" class="brand brand--footer" aria-label="Udumbara Informatika, beranda">
          <span class="brand-mark" aria-hidden="true"><i></i><b></b></span>
          <span class="brand-copy"><strong>UDUMBARA</strong><small>INFORMATIKA</small></span>
        </NuxtLink>
        <p>Partner teknologi untuk membangun solusi digital yang relevan, aman, dan berkelanjutan.</p>
      </div>
      <div>
        <h2>Navigasi</h2>
        <NuxtLink to="#tentang">Tentang Kami</NuxtLink>
        <NuxtLink to="#layanan">Layanan</NuxtLink>
        <NuxtLink to="#portofolio">Portofolio</NuxtLink>
      </div>
      <div>
        <h2>Layanan</h2>
        <NuxtLink to="#layanan">Aplikasi Web</NuxtLink>
        <NuxtLink to="#layanan">Aplikasi Mobile</NuxtLink>
        <NuxtLink to="#layanan">Infrastruktur IT</NuxtLink>
      </div>
      <div class="footer-contact">
        <h2>Hubungi Kami</h2>
        <address>
          <a :href="contact.whatsappUrl" target="_blank" rel="noopener noreferrer">
            <span>WhatsApp:</span>{{ contact.whatsappDisplay }}
          </a>
          <a :href="`mailto:${contact.email}`">
            <span>Email:</span>{{ contact.email }}
          </a>
          <a :href="contact.websiteUrl" target="_blank" rel="noopener noreferrer">
            <span>Website:</span>{{ contact.website }}
          </a>
          <p><span>Alamat:</span>{{ contact.address }}</p>
        </address>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>© {{ copyrightYear }} Udumbara Informatika.</span>
      <span>Dibangun untuk kemajuan bisnis digital.</span>
    </div>
  </footer>
</template>
