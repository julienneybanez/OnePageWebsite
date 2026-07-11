export default defineNuxtConfig({
  compatibilityDate: '2026-07-11',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  
  app: {
    head: {
      title: 'Julienne Ybañez - BSIT Student Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Portfolio of Julienne Ybañez, third-year BSIT student passionate about technology and problem-solving.' 
        },
        { 
          name: 'theme-color', 
          content: '#B3E5FC' 
        }
      ],
      link: [
        { 
          rel: 'icon', 
          type: 'image/svg+xml', 
          href: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23B3E5FC" width="100" height="100"/><text x="50" y="70" font-size="60" font-weight="bold" text-anchor="middle" fill="%231E3A8A">JY</text></svg>' 
        }
      ]
    }
  }
})
