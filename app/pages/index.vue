<script setup lang="ts">
import { contact } from '~/config/contact'

useSeoMeta({
  title: 'Udumbara Informatika | Solusi Digital untuk Bisnis Anda',
  description: 'Udumbara Informatika adalah mitra teknologi untuk aplikasi web, aplikasi mobile, infrastruktur IT, dan konsultasi digital.',
  ogTitle: 'Udumbara Informatika | Solusi Digital untuk Bisnis Anda',
  ogDescription: 'Bangun sistem yang tepat untuk mewujudkan potensi bisnis Anda.',
  ogType: 'website'
})

const services = [
  { title: 'Aplikasi Web', description: 'Sistem informasi, dashboard, dan aplikasi custom untuk berbagai kebutuhan bisnis.', icon: 'web' as const, tone: 'gold' },
  { title: 'Aplikasi Mobile', description: 'Android / iOS untuk mendukung operasional dan layanan Anda.', icon: 'mobile' as const, tone: 'blue' },
  { title: 'Infrastruktur IT', description: 'Setup server, domain, cloud, keamanan, dan integrasi sistem.', icon: 'cloud' as const, tone: 'purple' },
  { title: 'Konsultasi & Support', description: 'Pendampingan teknis dan pengembangan berkelanjutan.', icon: 'support' as const, tone: 'green' }
]

const projects = [
  { title: 'Sistem Informasi Rumah Sakit', category: 'Web App', kind: 'dashboard' as const },
  { title: 'Sistem Informasi Desa', category: 'Web App', kind: 'village' as const },
  { title: 'Aplikasi Mobile', category: 'Mobile App', kind: 'mobile' as const },
  { title: 'Website Furniture', category: 'Website', kind: 'commerce' as const }
]
</script>

<template>
  <div>
    <HeroSection />

    <section id="layanan" class="services section">
      <div class="container">
        <div class="service-grid">
          <ServiceCard v-for="service in services" :key="service.title" v-bind="service" />
        </div>
      </div>
    </section>

    <section id="portofolio" class="portfolio section">
      <div class="container">
        <div class="section-heading-row">
          <SectionTitle eyebrow="Portofolio" title="Beberapa Project Kami" description="Solusi digital yang telah kami kembangkan untuk berbagai sektor." />
          <NuxtLink to="#kontak" class="button button--secondary">Lihat Semua Project <span aria-hidden="true">→</span></NuxtLink>
        </div>
        <div class="project-grid">
          <ProjectCard v-for="project in projects" :key="project.title" v-bind="project" />
        </div>
      </div>
    </section>

    <section id="insight" class="consultation section">
      <div class="container consultation-inner">
        <div>
          <p class="eyebrow eyebrow--light">Mari Berdiskusi</p>
          <h2>Siap membangun solusi digital yang tepat?</h2>
          <p>Ceritakan kebutuhan Anda. Tim kami siap membantu memetakan langkah berikutnya.</p>
        </div>
          <a :href="contact.whatsappUrl" class="button button--gold" target="_blank" rel="noopener noreferrer">Jadwalkan Konsultasi <span aria-hidden="true">→</span></a>
      </div>
    </section>
  </div>
</template>
