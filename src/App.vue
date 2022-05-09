<template>
  <div id="app">
    <TheHeader />
    <router-view />
  </div>
</template>

<script>
import TheHeader from '@/views/Header.vue'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    TheHeader
  },
  async created () {
    await this.getEmailUser()
  },
  methods: mapActions(['getEmailUser'])
}
</script>
