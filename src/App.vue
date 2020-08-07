<template>
  <div id = "app">
    <Header class = "bg-black"></Header>
    <section class = "main">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import Header from "@/pages/Header.vue"
import { mapActions } from "vuex"

export default {
  name: 'App',
  components: {
    Header
  },
  methods: mapActions(["getEmailUser"]),
  async created(){
    await this.getEmailUser()
  }
}
</script>


