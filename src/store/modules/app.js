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
      to: '/',
    },
    {
      title: 'Cuestionario',
      icon: 'mdi-account',
      to: '/components/profile/',
    },
    {
      title: 'Notificaciones',
      icon: 'mdi-bell',
      to: '/components/notifications/',
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
