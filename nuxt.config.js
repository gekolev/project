export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'VNN DESIGN',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'og:image', property: 'og:image', content: 'https://vnn.design/_nuxt/img/VNN.6ab2d48.svg'},
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/gold.png' },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,200;0,400;1,100;1,400&display=swap"
      }
    ]
  },

  nitro: false,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // "~assets/scss/main.scss",
    "~assets/scss/style.css",

    'aos/dist/aos.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/gsap", ssr: false},
    { src: "~/plugins/aos", mode: "client" }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/style-resources',

  ],
  styleResources: {
    scss: [
      '~/assets/scss/main.scss',
    ],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/i18n',
  ],

  i18n: {
    /* module options */
    locales: [
      {
        code: "en",
        name: "English"
      },
      {
        code: "bg",
        name: "Български"
      }
    ],
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        en: {
          portfolionav: "portfolio",
          aboutnav: "about",
          studionav: "studio",
          contactnav: "contact",
          portfolioHeadline: "PORTFOLIO",
          aboutHeadline: "About",
          aboutText: "Reimagining handcrafted tailoring that merge refinement, tradition and modernity through a conscious process to deliver high level products to its clients. A tailor studio focused on two values: Sustaintability and Design Experience. Our goal is to offer a product proposal where you can be involved in every step of your product creation.",
          studioHeadline: "Studio",
          studioText: "VNN is a specialised studio with a heavy focus on producing high quality garments, underwear, swimwear, homewear and uniforms as well as delivering custom collections.",
          clients: "CLIENTS",
          getinTouch: "Get in touch with us!",
          address: "Sofia, Lyuben Karavelov 29",
          signUP: "Sign up to receive invites to upcoming exclusive events and workshops. If you'd like us to help you grow your business, feel free to reach out.",
          email: "Enter your email address",
          countme: "Count me in",
        },
        bg: {
          portfolionav: "портфолио",
          aboutnav: "за нас",
          studionav: "ателие",
          contactnav: "контакти",
          portfolioHeadline: "ПОРТФОЛИО",
          aboutHeadline: "За нас",
          aboutText: "Бутиково шивашко ателие, което обединява финес, традиция и качество. Фокусирано върху две ценности: творчество и дизайнерско изживяване. Нашата цел е, изготвяйки всеки продукт да задоволим дори най-малкото очакване. Шием мечти.",
          studioHeadline: "Ателие",
          studioText: "VNN е специализирано ателие в изработката на бельо, бански, дамско облекло и униформи с високо качество. Ние предлагаме конструиране и моделиране - от скица до краен продукт. Както и разработка на лимитирани колекции. ",
          clients: "КЛИЕНТИ",
          getinTouch: "Свържете се с нас!",
          address: "София, Любен Каравелов 29",
          signUP: "Регистрирайте се, за да получавате покани за предстоящи ексклузивни събития и работилници. Ако искате да ви помогнем да развиете бизнеса си, не се колебайте да се свържете с нас.",
          email: "Напиши имейл адреса си",
          countme: "Брой ме",
        }
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
     // required for gsap
     transpile: ["gsap"],
     /*
     ** You can extend webpack config here
     */
     loaders: {
       cssModules: {
         modules: {
           localIdentName: "[local]--[Frida]_[hash:base64:4]",
         }
       }
     },
     /*
     ** Path of public directory
     */
     // publicPath: 'https://staging.next-dc.com/renault_motorshow/public/'
  },
  
  tailwindcss: {
    exposeConfig: true
  }

}
