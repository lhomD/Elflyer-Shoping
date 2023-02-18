import { createRouter, createWebHistory } from 'vue-router'
import HomePageView from '../views/HomePageView.vue'
import CategoryPageView from "../views/CategoryPageView.vue"
import ProductPageView from "../views/ProductPageView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePageView,
      meta: {
        title: 'Elflyer - Home'
      }
    },
    {
      path: '/categories/:id',
      name: 'category',
      component: CategoryPageView,
      meta: {
        title: 'Elflyer - Category'
      }
    },
    {
      path: '/products/:id',
      name: 'product',
      component: ProductPageView,
      meta: {
        title: 'Elflyer - Product'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  // Get the page title from the route meta data that we have defined
  // See further down below for how we setup this data
  const title = to.meta.title
  // If the route has a title, set it as the page title of the document/page
  if (title) {
    document.title = title
  }
  // Continue resolving the route
  next()
})

export default router
