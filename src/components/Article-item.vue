<template>
    <div>
        <div class = "article-item" v-for = "(article,index) in latestArticles" :key = "article.id">
            <div class = "d-flex justify-content-between">
                <span class = "article-author">{{article.author}}</span>
                <span class = "article-date">{{article.date}}</span>
            </div>
            <h4 class = "article-title">
                <router-link :to = "{name: 'article', params: {id: article.id,article: article}}" tag="a"  class = "linkToArticle">{{article.title}}</router-link>
            </h4>
            <div class="article-preview" v-html="article.content">
            </div>
            <div class = "article-info d-flex">
                ♥
                <span class = "article-info-likes" @click = "liked(index)" :id = "index">{{article.likes}}</span>
                <span class = "article-info-comments">⌛ {{article.comments.length}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import api from "@/api/index.js";

export default {
    data(){
        return{
            articles: api.getArticles().slice(0,4)
        }
    },
    methods: {
        //Реализация лайка
        liked(idx){          
            let e = document.getElementById(idx)   
            if(e.classList.contains("isActive")){
                e.classList.remove ("isActive");
                this.articles[idx].likes--;
                e.innerHTML = this.articles[idx].likes;
            }else{
                e.classList.add("isActive");
                this.articles[idx].likes++;
                e.innerHTML = this.articles[idx].likes;
            }
        },
    },
    computed:{
        latestArticles() {
            //Конвертирование статей в вид: число месяц(название) год
            this.articles.map((item)=>{
                item.date = new Date(item.date).toLocaleString('ru', {       
                    month: 'long',day: "numeric",year: "numeric"
                })
            });
            return this.articles
        }
    }
}
</script>