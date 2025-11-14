import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from './views/WelcomeView.vue'
import ConfiguratorView from './views/ConfiguratorView.vue'
import ThankYouView from './views/ThankYouView.vue'

const routes = [
  { path: '/', name: 'welcome', component: WelcomeView },
  { path: '/configura', name: 'configurator', component: ConfiguratorView },
  { path: '/grazie', name: 'thankYou', component: ThankYouView }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
