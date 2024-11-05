import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // custom slots can be defined here
    })
  },
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance
  }
}