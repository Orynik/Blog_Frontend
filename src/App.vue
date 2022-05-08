<template>
  <div id="app">
    <Header class="bg-black" />
    <section class="main">
      <router-view />
    </section>
  </div>
</template>

<script>
import Header from '@/views/Header.vue'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    Header
  },
  async created () {
    await this.getEmailUser()
  },
  methods: mapActions(['getEmailUser'])
}
</script>
