<template>
    <div v-if = "articles.length != 0">
        <div class = "article-item" v-for = "(article,index) in articles" :key = "article.id">
            <div class = "d-flex justify-content-between">
                <span class = "article-author">{{article.author}}</span>
                <span class = "article-date">{{article.date}}</span>    
            </div>
            <h4 class = "article-title">
                <h2>{{article.title}}</h2>
            </h4>
            <div class="article-preview" v-html="article.content">
            </div>
            <div class = "article-info d-flex">
                <i class = "like-icon mr-2"></i>
                <span class = "article-info-likes" @click = "like(index)" :id = "index">{{article.likes}}</span>
                <span class = "article-info-comments d-flex">
                    <i class = "comments-icon mr-2"></i> {{article.comments.length}}</span>
                <router-link :to = "{name: 'article', params: {id: index}}" tag="a"  class = "linkToArticle  ml-auto">Перейти к статье</router-link>
            </div>
        </div>
    </div>
    <div v-else>
        На данных момент статей с категорией "{{viewsCategory}}" нет, но вы можете стать первыми!
    </div>
</template>

<script>
// import api from "@/api/index.js";
import {mapGetters,mapActions} from "vuex" 

export default {
    computed: mapGetters(["getArticles"]),
    props:[
        "articles", "viewsCategory"
    ]
};
</script>

<style>
    .comments-icon,
    .like-icon{
        width: 20px;
        height: 20px;
    }

    .comments-icon::before,
    .like-icon::before{
        display: block;
        content: url("../assets/interface.png");
        width: 20px;
        height: 20px;
    }
    .like-icon::before{
        content: url("../assets/like.png");
    }
    .comments-icon::before{
        content: url("../assets/interface.png");
    }
</style>