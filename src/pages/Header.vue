<template>
    <b-navbar type="dark" variant="info" class = "header">
        <b-navbar-brand>
            <img src = "@/assets/logo.png" witdh = "50" height = "45">
        </b-navbar-brand>
        <router-link to = "/">Главная</router-link>
        <router-link to = "/createArticle">Написать свою статью</router-link>
        <b-navbar-nav class = "ml-auto header">
            <!-- <router-link to = "/reg">Регистрация</router-link> -->
            <!-- <router-link to = "/login">Вход</router-link> -->
        </b-navbar-nav>        
    </b-navbar>
</template>
<style scoped>
    .header > a:hover{
        text-decoration: none;
    }
    .header > a{
        margin-right: 10px;
    }
    .header{
        padding: 0 16px;
    }
</style>