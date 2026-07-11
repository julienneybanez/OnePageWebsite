<template>
  <section :id="id" class="hero section-shell">
    <div class="hero-copy">
      <p class="eyebrow">Personal Portfolio</p>
      <h1>{{ name }}</h1>
      <p class="hero-title">{{ title }}</p>
      <p class="hero-description">{{ description }}</p>

      <div class="hero-actions">
        <a class="btn btn-primary" :href="primaryLink">Explore My Hobbies</a>
        <a class="btn btn-secondary" :href="secondaryLink">Contact Me</a>
      </div>
    </div>

    <div class="hero-visual">
      <div class="profile-frame">
        <img
          src="/profile.webp"
          alt="Portrait of Julienne Ybañez"
          class="profile-image"
          width="300"
          height="300"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  id: string
  name: string
  title: string
  description: string
  primaryLink: string
  secondaryLink: string
}>()
</script>

<style scoped>
.hero {
  width: min(1120px, calc(100% - 2rem));
  margin: 0 auto;
  padding-top: clamp(3rem, 8vw, 6rem);
  padding-bottom: clamp(3rem, 8vw, 6rem);
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 2rem;
  align-items: center;
}

.eyebrow {
  margin-bottom: 1rem;
  color: var(--color-accent);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

h1 {
  font-size: clamp(2.6rem, 6vw, 4.8rem);
  line-height: 0.98;
  color: var(--color-heading);
}

.hero-title {
  margin-top: 1rem;
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  color: var(--color-accent);
  font-weight: 700;
}

.hero-description {
  max-width: 38rem;
  margin-top: 1.25rem;
  font-size: 1.08rem;
  color: var(--color-text);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.hero-visual {
  display: grid;
  place-items: center;
  width: 100%;
}

.profile-frame {
  width: min(100%, 20rem);
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  padding: 0.75rem;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(125, 211, 252, 0.75), rgba(186, 230, 253, 0.95));
  box-shadow: var(--shadow-soft);
}

.profile-image {
  width: 100%;
  max-width: 300px;
  aspect-ratio: 1;
  object-fit: cover;
  display: block;
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.85);
  box-shadow: 0 20px 45px rgba(12, 74, 110, 0.16);
}

@media (max-width: 860px) {
  .hero {
    grid-template-columns: 1fr;
  }

  .hero-visual {
    order: -1;
    margin-bottom: 0.5rem;
  }

  .profile-frame {
    width: min(100%, 16rem);
  }
}
</style>