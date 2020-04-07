<template>
    <b-navbar type="dark" variant="info" class = "header">
        <b-navbar-brand>
            <img src = "@/assets/logo.png" witdh = "50" height = "45">
        </b-navbar-brand>
        <router-link to = "/">Главная</router-link>
        <router-link to = "articles">Статьи</router-link>
        <b-navbar-nav class = "ml-auto header">
            <!-- <a href="#">Регистрация</a> -->
            <!-- <a href="#">Вход</a> -->
        </b-navbar-nav>        
    </b-navbar>
</template>
<style scoped>
    .header > a{
        margin-right: 10px;
    }
    .header{
        padding: 0 16px;
    }
</style>