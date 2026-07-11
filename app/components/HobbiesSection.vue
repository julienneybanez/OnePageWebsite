<template>
  <section :id="id" class="section-shell hobbies-section">
    <div class="section-heading centered">
      <p class="section-kicker">Hobbies and Interests</p>
      <h2>Interests that keep me creative, active, and curious.</h2>
    </div>

    <div class="hobby-grid">
      <article v-for="hobby in hobbies" :key="hobby.id" class="hobby-card">
        <div class="icon-wrap" :aria-label="`${hobby.title} icon`">{{ hobby.icon }}</div>
        <h3>{{ hobby.title }}</h3>
        <p>{{ hobby.description }}</p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Hobby {
  id: number
  title: string
  description: string
  icon: string
}

defineProps<{
  id: string
  hobbies: Hobby[]
}>()
</script>

<style scoped>
.hobbies-section {
  width: min(1120px, calc(100% - 2rem));
  margin: 0 auto;
}

.centered {
  text-align: center;
  max-width: 44rem;
  margin: 0 auto 2.5rem;
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

.hobby-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
}

.hobby-card {
  padding: 1.8rem;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.94), rgba(255, 255, 255, 0.82));
  border: 1px solid rgba(12, 74, 110, 0.08);
  border-radius: 1.6rem;
  box-shadow: var(--shadow-soft);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.hobby-card:hover,
.hobby-card:focus-within {
  transform: translateY(-6px);
  border-color: rgba(12, 74, 110, 0.18);
  box-shadow: 0 24px 60px rgba(12, 74, 110, 0.12);
}

.icon-wrap {
  width: 3.5rem;
  height: 3.5rem;
  display: grid;
  place-items: center;
  border-radius: 1.15rem;
  background: rgba(125, 211, 252, 0.22);
  font-size: 1.6rem;
}

h3 {
  margin: 1rem 0 0.7rem;
  color: var(--color-heading);
}

@media (max-width: 900px) {
  .hobby-grid {
    grid-template-columns: 1fr;
  }
}
</style>