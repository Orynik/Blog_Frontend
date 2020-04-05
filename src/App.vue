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

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>


