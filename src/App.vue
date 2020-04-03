<template>
  <div id = "app">
    <Header class = "bg-black"></Header>
    <section class = "main">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import Index from "@/components/Index.vue"
import Header from "@/components/Header.vue"

export default {
  name: 'App',
  components: {
    Index,
    Header
  }
}
</script>


