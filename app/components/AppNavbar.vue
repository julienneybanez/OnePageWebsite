<template>
  <header class="navbar-shell">
    <nav class="navbar" aria-label="Main navigation">
      <a href="#home" class="brand" @click="closeMenu">
        <span class="brand-mark">JY</span>
        <span class="brand-copy">
          <strong>Julienne Ybañez</strong>
          <small>Portfolio</small>
        </span>
      </a>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-menu"
        aria-label="Toggle navigation menu"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul class="nav-list desktop-nav">
        <li v-for="link in links" :key="link.id">
          <a :href="`#${link.id}`" class="nav-link">{{ link.label }}</a>
        </li>
      </ul>
    </nav>

    <ul v-if="isMenuOpen" id="mobile-menu" class="nav-list mobile-nav">
      <li v-for="link in links" :key="link.id">
        <a :href="`#${link.id}`" class="nav-link mobile-link" @click="closeMenu">{{ link.label }}</a>
      </li>
    </ul>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface NavLink {
  id: string
  label: string
}

defineProps<{
  links: NavLink[]
}>()

const isMenuOpen = ref(false)

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
.navbar-shell {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(18px);
  background: rgba(240, 249, 255, 0.88);
  border-bottom: 1px solid rgba(12, 74, 110, 0.1);
}

.navbar {
  width: min(1120px, calc(100% - 2rem));
  margin: 0 auto;
  min-height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.9rem;
  color: var(--color-text);
  text-decoration: none;
}

.brand-mark {
  width: 3rem;
  height: 3rem;
  display: grid;
  place-items: center;
  border-radius: 1rem;
  background: linear-gradient(135deg, var(--color-primary), var(--color-soft));
  color: var(--color-heading);
  font-weight: 800;
  box-shadow: var(--shadow-soft);
}

.brand-copy {
  display: grid;
}

.brand-copy strong {
  font-size: 0.98rem;
}

.brand-copy small {
  color: var(--color-muted);
}

.nav-list {
  list-style: none;
  display: flex;
  gap: 0.5rem;
  padding: 0;
  margin: 0;
}

.nav-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.75rem;
  padding: 0 1rem;
  border-radius: 999px;
  color: var(--color-text);
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

.nav-link:hover,
.nav-link:focus-visible {
  background: rgba(125, 211, 252, 0.2);
  color: var(--color-heading);
  transform: translateY(-1px);
}

.menu-toggle {
  display: none;
  width: 3rem;
  height: 3rem;
  border: 1px solid rgba(12, 74, 110, 0.14);
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.72);
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.25rem;
}

.menu-toggle span {
  width: 1.2rem;
  height: 0.12rem;
  background: var(--color-heading);
  border-radius: 99px;
}

.mobile-nav {
  display: none;
}

@media (max-width: 760px) {
  .desktop-nav {
    display: none;
  }

  .menu-toggle {
    display: inline-flex;
  }

  .mobile-nav {
    display: grid;
    width: min(1120px, calc(100% - 2rem));
    margin: 0 auto 1rem;
    padding: 0.5rem;
    background: rgba(255, 255, 255, 0.92);
    border: 1px solid rgba(12, 74, 110, 0.08);
    border-radius: 1.25rem;
    box-shadow: var(--shadow-soft);
  }

  .mobile-link {
    justify-content: flex-start;
  }

  .brand-copy small {
    display: none;
  }
}
</style>