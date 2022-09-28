<template>
    <div>
    </div>
</template>
<script>
  import axios from 'axios'
  import Vue from 'vue'
  import Vuesax from 'vuesax'
  import 'vuesax/dist/vuesax.css'
  Vue.use(Vuesax, {
    // options here
  })
  export default {
    name: 'ListarClientes',
    data () {
      return {
        characters: [],
      }
    },
    mounted () {
      console.log('verificando')
      this.getTodos()
    },
    methods: {
      getTodos () {
        console.log('peticion GET')
        axios.get('http://127.0.0.1:8000/api/test/')
          .then(res => {
            console.log(res)
            this.characters = res.data.data
          })
          .catch(e => {
            console.log(e)
          })
      },
    },
  }
  </script>
