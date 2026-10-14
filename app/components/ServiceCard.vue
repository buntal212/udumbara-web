<script setup lang="ts">
defineProps<{ title: string, description: string, icon: 'web' | 'mobile' | 'cloud' | 'support', tone: string }>()
</script>

<template>
  <article class="service-card">
    <div class="service-icon" :class="`service-icon--${tone}`" aria-hidden="true">
      <svg v-if="icon === 'web'" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="13" rx="1"/><path d="M8 21h8M12 17v4"/></svg>
      <svg v-else-if="icon === 'mobile'" viewBox="0 0 24 24"><rect x="7" y="2.5" width="10" height="19" rx="2"/><path d="M11 18.5h2"/></svg>
      <svg v-else-if="icon === 'cloud'" viewBox="0 0 24 24"><path d="M7.5 18.5h9.6a4.4 4.4 0 0 0 .7-8.8A6.1 6.1 0 0 0 6.3 8.1 5.2 5.2 0 0 0 7.5 18.5Z"/></svg>
      <svg v-else viewBox="0 0 24 24"><circle cx="12" cy="7" r="3.5"/><path d="M4 20c.5-4 3.3-6 8-6s7.5 2 8 6"/></svg>
    </div>
    <div>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <NuxtLink to="#kontak" class="text-link">Selengkapnya <span aria-hidden="true">→</span></NuxtLink>
    </div>
  </article>
</template>
