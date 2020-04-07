<template>
    <div>
        <div class = "article-item" v-for = "(article,index) in getLatestArticles" :key = "article.id">
            <div class = "d-flex justify-content-between">
                <span class = "article-author">{{article.author}}</span>
                <span class = "article-date">{{article.date}}</span>
            </div>
            <h4 class = "article-title">
                <router-link :to = "{name: 'article', params: {id: index}}" tag="a"  class = "linkToArticle">{{article.title}}</router-link>
            </h4>
            <div class="article-preview" v-html="article.content">
            </div>
            <div class = "article-info d-flex">
                <!-- ♥<span class = "article-info-likes" @click = "like(index)" :id = "index">{{article.likes}}</span> -->
                <span class = "article-info-comments">⌛ {{article.comments.length}}</span>
            </div>
        </div>
    </div>
</template>

<script>
// import api from "@/api/index.js";
import {mapGetters,mapActions,mapMutations} from "vuex" 

export default {
    methods:{
        ...mapActions (["fetchArticles"]),
        ...mapMutations(["incLikes","decLikes"]),
        like(idx){
            // alert(this.getArticles[idx].title)

            let e = document.getElementById(idx)   

            if(e.classList.contains("isActive")){
                e.classList.remove ("isActive");
                this.decLikes(idx);
                e.innerHTML = this.getArticles[idx].likes;
            }else{
                e.classList.add("isActive");
                this.incLikes(idx);
                e.innerHTML = this.getArticles[idx].likes;
            }
        }
    },
    computed: mapGetters(["getLatestArticles"]),
    async mounted() {
        this.fetchArticles()
    },
};
</script>