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
      // Components
      route('Ventas/Notifications', null, '/ventas/notifications'),
      route('pruebasComponentes', null, '/componentes'),
      // Administracion
      route('Administracion/DashboardAdmin', null, '/administracion'),
      // Ventas
      route('Ventas/DashboardVentas', null, '/ventas/dashboard'),
      route('Ventas/Cuestionario', null, '/ventas/cuestionario'),
      route('Ventas/CreateUser', null, '/ventas/newuser'),
      // Cliente
      route('Cliente/Panel', null, '/panel'),
      // Contabilidad
    ]),
  ],
})

router.beforeEach((to, from, next) => {
  return to.path.endsWith('/') ? next() : next(trailingSlash(to.path))
})

export default router
