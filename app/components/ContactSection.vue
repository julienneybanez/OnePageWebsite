<template>
  <section :id="id" class="section-shell contact-section">
    <div class="section-heading">
      <p class="section-kicker">Contact</p>
      <h2>Get in touch for school, collaboration, or conversation.</h2>
    </div>

    <div class="contact-layout">
      <article class="contact-card info-card">
        <h3>Contact Details</h3>
        <p class="intro">These links are clickable and the form below is front-end only for demonstration.</p>

        <ul class="contact-list">
          <li v-for="item in contactItems" :key="item.id" class="contact-item">
            <span class="contact-icon" aria-hidden="true">{{ item.icon }}</span>
            <div>
              <p class="contact-type">{{ item.type }}</p>
              <a :href="item.link" class="contact-link">{{ item.value }}</a>
              <p class="contact-caption">{{ item.caption }}</p>
            </div>
          </li>
        </ul>
      </article>

      <article class="contact-card form-card">
        <h3>Send a Message</h3>
        <form class="contact-form" @submit.prevent="$emit('submit')" novalidate>
          <label class="field-label" for="name">Name</label>
          <input id="name" v-model="form.name" class="field-input" type="text" placeholder="Your name" />

          <label class="field-label" for="email">Email</label>
          <input id="email" v-model="form.email" class="field-input" type="email" placeholder="yennieyeng@gmail.com" />

          <label class="field-label" for="message">Message</label>
          <textarea id="message" v-model="form.message" class="field-input textarea" rows="5" placeholder="Write your message here"></textarea>

          <p v-if="message" class="feedback" :class="messageType === 'success' ? 'success' : 'error'">
            {{ message }}
          </p>

          <button class="btn btn-primary submit-button" type="submit">Submit</button>
        </form>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
interface ContactItem {
  id: number
  type: string
  value: string
  link: string
  icon: string
  caption: string
}

interface ContactFormState {
  name: string
  email: string
  message: string
}

defineProps<{
  id: string
  contactItems: ContactItem[]
  form: ContactFormState
  message: string
  messageType: 'success' | 'error'
}>()

defineEmits<{
  submit: []
}>()
</script>

<style scoped>
.contact-section {
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

.contact-layout {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 1.5rem;
}

.contact-card {
  padding: 1.8rem;
  border-radius: 1.6rem;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(12, 74, 110, 0.08);
  box-shadow: var(--shadow-soft);
}

.intro {
  margin: 0.8rem 0 1.5rem;
}

.contact-list {
  list-style: none;
  display: grid;
  gap: 1rem;
  padding: 0;
  margin: 0;
}

.contact-item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: start;
}

.contact-icon {
  width: 3rem;
  height: 3rem;
  display: grid;
  place-items: center;
  border-radius: 1rem;
  background: rgba(125, 211, 252, 0.22);
  font-size: 1.3rem;
}

.contact-type {
  font-weight: 700;
  color: var(--color-heading);
}

.contact-link {
  color: var(--color-accent);
  font-weight: 700;
  text-decoration: none;
  word-break: break-word;
}

.contact-link:hover,
.contact-link:focus-visible {
  text-decoration: underline;
}

.contact-caption {
  margin-top: 0.25rem;
  color: var(--color-muted);
}

.contact-form {
  display: grid;
}

.field-label {
  margin: 1rem 0 0.45rem;
  font-weight: 700;
  color: var(--color-heading);
}

.field-input {
  width: 100%;
  min-height: 3rem;
  padding: 0.9rem 1rem;
  border: 1px solid rgba(12, 74, 110, 0.15);
  border-radius: 1rem;
  background: rgba(240, 249, 255, 0.9);
  color: var(--color-text);
}

.field-input:focus-visible {
  border-color: var(--color-accent);
  box-shadow: 0 0 0 4px rgba(125, 211, 252, 0.28);
}

.textarea {
  resize: vertical;
}

.feedback {
  margin-top: 1rem;
  padding: 0.85rem 1rem;
  border-radius: 1rem;
  font-weight: 600;
}

.success {
  background: rgba(204, 251, 241, 0.9);
  color: #0f766e;
}

.error {
  background: rgba(254, 226, 226, 0.95);
  color: #b91c1c;
}

.submit-button {
  margin-top: 1.2rem;
  justify-self: start;
}

@media (max-width: 860px) {
  .contact-layout {
    grid-template-columns: 1fr;
  }

  .submit-button {
    width: 100%;
    justify-self: stretch;
  }
}
</style>