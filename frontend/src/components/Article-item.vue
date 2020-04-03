<template>
    <div>
        <div class = "article-item" v-for = "article in latestArticles" :key = "article.id">
            <div class = "d-flex justify-content-between">
                <span class = "article-author">{{article.author}}</span>
                <span class = "article-date">{{article.date}}</span>
            </div>
            <h4 class = "article-title">
                <a href = "#" class = "linkToArticle">{{article.title}}</a>
            </h4>
            <div class="article-preview" v-html="article.content">
            </div>
            <div class = "article-info d-flex">
                <span class = "article-info-likes" @click.once = "liked(article.id)">♥ {{article.likes}}</span>
                <span class = "article-info-dislikes">💔 64</span>
                <span class = "article-info-comments">⌛ 54</span>
            </div>
        </div>
    </div>
</template>

<script>
import api from "@/api/index.js"

export default {
    data(){
        return{
        }
    },
    methods:{
        liked(id){
            //TODO: Релизовать установку/удаление лайка
            this.articles.map((item) =>{
                if(id == item.id){
                    item.likes++;
                }
            });
        }
        //TODO: Реализовать установку дизлайка
    },
    computed:{
        latestArticles: () =>{
            let articles = api.getArticles();
            //Сортировка статей по свежести
            articles.sort((a,b) =>{
                return new Date(b.date) - new Date(a.date);
            });
            //Конвертирование статей в вид: число месяц(название) год
            articles.map((item)=>{
                item.date = new Date(item.date).toLocaleString('ru', {       
                    month: 'long',day: "numeric",year: "numeric"
                })
            });
            return articles
        }
    }
}
</script>