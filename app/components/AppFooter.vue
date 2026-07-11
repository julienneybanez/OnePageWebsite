<template>
  <footer class="footer">
    <div class="footer-inner">
      <p>© {{ year }} {{ name }}. All rights reserved.</p>
      <a href="#home" class="back-link">Back to top</a>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  year: number
}>()
</script>

<style scoped>
.footer {
  margin-top: 2rem;
  padding: 1.5rem 1rem 2.5rem;
}

.footer-inner {
  width: min(1120px, calc(100% - 2rem));
  margin: 0 auto;
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border-radius: 1.5rem;
  background: linear-gradient(135deg, #0c4a6e, #075985);
  color: white;
}

.back-link {
  color: white;
  font-weight: 700;
  text-decoration: none;
}

.back-link:hover,
.back-link:focus-visible {
  text-decoration: underline;
}

@media (max-width: 640px) {
  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>