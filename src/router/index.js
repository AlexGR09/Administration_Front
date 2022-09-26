// Imports
import Vue from 'vue'
import Router from 'vue-router'
import { trailingSlash } from '@/util/helpers'
import {
  layout,
  route,
} from '@/util/routes'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  routes: [
    layout('Default', [
      route('Login'),

      // Pages
      route('Register', null, '/registro'),
      route('Cliente/Panel', null, '/panel'),
      route('Ventas/DashboardVentas', null, '/ventas/dashboard'),
      route('Ventas/Cuestionario', null, '/ventas/cuestionario'),
      route('Ventas/CreateUser', null, '/ventas/newuser'),
      // Components
      route('Ventas/Notifications', null, '/ventas/notifications'),
      route('pruebasComponentes', null, '/componentes'),
    ]),
  ],
})

router.beforeEach((to, from, next) => {
  return to.path.endsWith('/') ? next() : next(trailingSlash(to.path))
})

export default router
