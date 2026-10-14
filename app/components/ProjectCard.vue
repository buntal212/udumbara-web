<script setup lang="ts">
defineProps<{ title: string, category: string, kind: 'dashboard' | 'village' | 'mobile' | 'commerce' }>()
</script>

<template>
  <article class="project-card" :class="`project-card--${kind}`">
    <div class="project-visual" aria-hidden="true">
      <template v-if="kind === 'dashboard' || kind === 'village'">
        <span class="visual-sidebar"></span><span class="visual-topbar"></span><span class="visual-line visual-line--one"></span><span class="visual-line visual-line--two"></span><span class="visual-chart"></span><span class="visual-chart visual-chart--small"></span>
      </template>
      <template v-else-if="kind === 'mobile'">
        <span class="phone phone--one"><i></i><b></b><em></em></span><span class="phone phone--two"><i></i><b></b><em></em></span>
      </template>
      <template v-else>
        <span class="shop-nav"></span><span class="shop-title"></span><span class="shop-copy"></span><span class="shop-chair"></span><span class="shop-plant"></span>
      </template>
    </div>
    <div class="project-info"><h3>{{ title }}</h3><span>{{ category }}</span></div>
  </article>
</template>
