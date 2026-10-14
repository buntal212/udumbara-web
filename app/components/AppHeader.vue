<script setup lang="ts">
import { contact } from '~/config/contact'

const menuOpen = ref(false)

const navItems = [
  { label: 'Beranda', to: '/' },
  { label: 'Tentang Kami', to: '#tentang' },
  { label: 'Layanan', to: '#layanan' },
  { label: 'Portofolio', to: '#portofolio' },
  { label: 'Blog', to: '#insight' },
  { label: 'Kontak', to: '#kontak' }
]

const closeMenu = () => {
  menuOpen.value = false
}
</script>

<template>
  <header class="site-header">
    <div class="container header-inner">
      <NuxtLink to="/" class="brand" aria-label="Udumbara Informatika, beranda" @click="closeMenu">
        <span class="brand-mark" aria-hidden="true"><i></i><b></b></span>
        <span class="brand-copy"><strong>UDUMBARA</strong><small>INFORMATIKA</small></span>
      </NuxtLink>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="main-navigation"
        aria-label="Buka menu navigasi"
        @click="menuOpen = !menuOpen"
      >
        <span></span><span></span><span></span>
      </button>

      <nav id="main-navigation" class="main-nav" :class="{ 'is-open': menuOpen }" aria-label="Navigasi utama">
        <NuxtLink v-for="item in navItems" :key="item.label" :to="item.to" class="nav-link" @click="closeMenu">
          {{ item.label }}
        </NuxtLink>
        <a :href="contact.whatsappUrl" class="button button--gold nav-cta" target="_blank" rel="noopener noreferrer" @click="closeMenu">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 15.6v3a1.9 1.9 0 0 1-2 1.9A16.9 16.9 0 0 1 3.5 5.5a1.9 1.9 0 0 1 1.9-2h3a1.9 1.9 0 0 1 1.9 1.6l.6 2.9a1.8 1.8 0 0 1-.5 1.7L9.2 10.8a13.7 13.7 0 0 0 4 4l1.1-1.1a1.8 1.8 0 0 1 1.7-.5l2.9.6a1.9 1.9 0 0 1 1.6 1.8Z" /></svg>
          Konsultasi Sekarang
        </a>
      </nav>
    </div>
  </header>
</template>
