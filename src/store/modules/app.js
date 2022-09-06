// Pathify
import { make } from 'vuex-pathify'

// Data
const state = {
  drawer: null,
  drawerImage: true,
  mini: false,
  items: [
    {
      title: 'Inicio',
      icon: 'mdi-view-dashboard',
      to: '/ventas/dashboard',
    },
    {
      title: 'Cuestionario',
      icon: 'mdi-file-document',
      to: '/ventas/profile/',
    },
    {
      title: 'Crear cliente',
      icon: 'mdi-account',
      to: '/ventas/newuser/',
    },
    {
      title: 'Notificaciones',
      icon: 'mdi-bell',
      to: '/ventas/notifications/',
    },
  ],
}

const mutations = make.mutations(state)

const actions = {
  ...make.actions(state),
  init: async ({ dispatch }) => {
    //
  },
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
