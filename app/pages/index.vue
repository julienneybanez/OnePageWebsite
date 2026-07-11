<template>
  <div class="portfolio-page">
    <AppNavbar :links="navLinks" />

    <main>
      <HeroSection
        id="home"
        name="Julienne Ybañez"
        title="Third-Year BSIT Student"
        :description="heroDescription"
        primary-link="#hobbies"
        secondary-link="#contact"
      />

      <AboutSection
        id="about"
        :intro="aboutIntro"
        :details="aboutDetails"
        :highlights="highlights"
      />

      <HobbiesSection id="hobbies" :hobbies="hobbies" />

      <ContactSection
        id="contact"
        :contact-items="contactItems"
        :form="form"
        :message="formMessage"
        :message-type="formMessageType"
        @submit="handleFormSubmit"
      />
    </main>

    <AppFooter name="Julienne Ybañez" :year="currentYear" />
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

interface NavLink {
  id: string
  label: string
}

interface Highlight {
  id: number
  title: string
  description: string
  icon: string
}

interface Hobby {
  id: number
  title: string
  description: string
  icon: string
}

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

const navLinks: NavLink[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'hobbies', label: 'Hobbies' },
  { id: 'contact', label: 'Contact' }
]

const highlights: Highlight[] = [
  {
    id: 1,
    title: 'BSIT Student',
    description: 'Currently building a strong foundation in software, systems, and digital problem-solving.',
    icon: '🎓'
  },
  {
    id: 2,
    title: 'Technology Enthusiast',
    description: 'Curious about how tools and ideas can be turned into practical user-friendly experiences.',
    icon: '💻'
  },
  {
    id: 3,
    title: 'Problem Solver',
    description: 'Enjoys breaking down challenges into manageable steps and improving solutions over time.',
    icon: '🧩'
  },
  {
    id: 4,
    title: 'Lifelong Learner',
    description: 'Committed to continuous growth through experimentation, reflection, and hands-on practice.',
    icon: '🌱'
  }
]

const hobbies: Hobby[] = [
  {
    id: 1,
    title: 'Machine Translation for Visual Novels',
    description: 'Exploring language and technology by translating visual novel content and understanding how meaning carries across contexts.',
    icon: '📚'
  },
  {
    id: 2,
    title: 'Extreme Adventure',
    description: 'Enjoying thrilling outdoor experiences that build confidence, curiosity, and resilience through new challenges.',
    icon: '🏔️'
  },
  {
    id: 3,
    title: 'Playing Gacha Games',
    description: 'Relaxing through collection-based games while appreciating their stories, progression systems, and character design.',
    icon: '🎮'
  }
]

const contactItems: ContactItem[] = [
  {
    id: 1,
    type: 'Email',
    value: 'yennieyeng@gmail.com',
    link: 'mailto:yennieyeng@gmail.com',
    icon: '✉️',
    caption: 'Best for school or project inquiries'
  },
  {
    id: 2,
    type: 'Phone',
    value: '09609422545',
    link: 'tel:09609422545',
    icon: '📱',
    caption: 'Available for direct contact'
  }
]

const heroDescription = 'Third-year BSIT student passionate about technology, problem-solving, and creating practical digital solutions.'
const aboutIntro = 'I am Julienne Ybañez, a third-year BSIT student who enjoys learning through hands-on work and thoughtful experimentation.'
const aboutDetails = 'I am passionate about technology and problem-solving, and I approach each challenge as a chance to improve my skills. From understanding new tools to designing practical digital experiences, I value steady progress, curiosity, and work that creates meaningful results.'

const form = reactive<ContactFormState>({
  name: '',
  email: '',
  message: ''
})
const formMessage = ref('')
const formMessageType = ref<'success' | 'error'>('success')
const currentYear = new Date().getFullYear()

const resetForm = () => {
  form.name = ''
  form.email = ''
  form.message = ''
}

const handleFormSubmit = () => {
  if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
    formMessage.value = 'Please complete all required fields before sending your message.'
    formMessageType.value = 'error'
    return
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(form.email)) {
    formMessage.value = 'Please provide a valid email address.'
    formMessageType.value = 'error'
    return
  }

  formMessage.value = `Thank you, ${form.name}. Your message is saved locally in this demo form.`
  formMessageType.value = 'success'

  window.setTimeout(() => {
    resetForm()
    formMessage.value = ''
  }, 3000)
}
</script>

<style scoped>
.portfolio-page {
  background:
    radial-gradient(circle at top left, rgba(125, 211, 252, 0.18), transparent 28%),
    radial-gradient(circle at top right, rgba(186, 230, 253, 0.32), transparent 24%),
    var(--color-background);
}
</style>