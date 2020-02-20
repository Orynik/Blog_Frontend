<template>
  <div id="app">
    <header class = "main-header">
        <router-link to = "/">
          <img src="@/assets/logo.png" height="50" width="50" alt="">
        </router-link> 
        <div class = "links">
              <a href = "#">Статьи</a>
              <router-link to = "/about">О Блоге</router-link>
        </div> 
            <div class = "auth">
              <router-link to = "/reg">Регистрация</router-link>
              <router-link to = "/signup">Вход</router-link>
            </div> 
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.auth{
  display: flex;
  justify-content: space-around;
  flex-basis: 180px;
}

html{
  height: 100vh;
}
body{
  margin: 0px;
  padding: 0px;
}
.main-header{
  display: flex;
  height: 50px;
  background: black;
  padding: 0 15px;
}

.links{
  display:flex;
  flex-grow: 1;
  margin-left: 20px;
}

a{
    text-decoration: none;
    color: white;
    margin-left: 5px;
    line-height: 50px;
}
a:hover{
    text-decoration: underline;
}
</style>

