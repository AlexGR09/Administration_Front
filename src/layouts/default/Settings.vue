<script>
  // Mixins
  import Proxyable from 'vuetify/lib/mixins/proxyable'

  // Vuex
  import { get, sync } from 'vuex-pathify'

  export default {
    name: 'DashboardCoreSettings',

    mixins: [Proxyable],

    data: () => ({
      color: '#E91E63',
      colors: [
        '#9C27b0',
        '#00CAE3',
        '#4CAF50',
        '#ff9800',
        '#E91E63',
        '#FF5252',
      ],
      menu: false,
      saveImage: '',
    }),

    computed: {
      ...sync('app', [
        'drawer',
        'drawerImage',
        'mini',
      ]),
      ...sync('user', [
        'drawer@gradient',
        'drawer@image',
      ]),
      ...get('user', [
        'images',
        'gradients',
      ]),
    },

    watch: {
      color (val) {
        this.$vuetify.theme.themes[this.isDark ? 'dark' : 'light'].primary = val
      },
    },
  }
</script>

<style lang="sass">
  .v-settings
    .v-item-group > *
      cursor: pointer

    &__item
      border-width: 3px
      border-style: solid
      border-color: transparent !important

      &--active
        border-color: #00cae3 !important
</style>
