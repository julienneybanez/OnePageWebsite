<template>
  <section :id="id" class="section-shell about-section">
    <div class="section-heading">
      <p class="section-kicker">About Me</p>
      <h2>Learning technology with purpose and curiosity.</h2>
    </div>

    <div class="about-layout">
      <article class="about-panel narrative-panel">
        <p class="lead">{{ intro }}</p>
        <p>{{ details }}</p>
      </article>

      <div class="highlights-grid">
        <article v-for="highlight in highlights" :key="highlight.id" class="about-panel highlight-card">
          <span class="highlight-icon" aria-hidden="true">{{ highlight.icon }}</span>
          <h3>{{ highlight.title }}</h3>
          <p>{{ highlight.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Highlight {
  id: number
  title: string
  description: string
  icon: string
}

defineProps<{
  id: string
  intro: string
  details: string
  highlights: Highlight[]
}>()
</script>

<style scoped>
.about-section {
  width: min(1120px, calc(100% - 2rem));
  margin: 0 auto;
}

.section-heading {
  max-width: 42rem;
  margin-bottom: 2.5rem;
}

.section-kicker {
  color: var(--color-accent);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

h2 {
  margin-top: 0.6rem;
  font-size: clamp(2rem, 4vw, 3rem);
  color: var(--color-heading);
}

.about-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
  gap: 1.5rem;
}

.about-panel {
  padding: 1.75rem;
  background: rgba(255, 255, 255, 0.88);
  border-radius: 1.5rem;
  border: 1px solid rgba(12, 74, 110, 0.08);
  box-shadow: var(--shadow-soft);
}

.lead {
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-heading);
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.highlight-card h3 {
  margin: 0.8rem 0 0.45rem;
  color: var(--color-heading);
}

.highlight-icon {
  display: inline-grid;
  place-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 1rem;
  background: rgba(125, 211, 252, 0.18);
  font-size: 1.35rem;
}

@media (max-width: 860px) {
  .about-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .highlights-grid {
    grid-template-columns: 1fr;
  }
}
</style>