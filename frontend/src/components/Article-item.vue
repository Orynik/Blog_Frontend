<template>
    <div>
        <div class = "article-item" v-for = "article in articles" :key = "article.id">
            <h4 class = "article-title">
                <a href = "#" class = "linkToArticle">{{article.title}}</a>
            </h4>
            <div class="article-preview">
                {{article.content}}
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
import api from "../api/index.js"

export default {
    data(){
        return{
            articles: api.getArticles(),
            // isLiked: false,
        }
    },
    methods:{
        liked(id){
            //TODO: Релизовать установку/удаление лайка
            // if(isLiked == false){
                this.articles.map((item) =>{
                    if(id == item.id){
                        item.likes++;
                    }
                });
            // }else{
            //     this.articles.map((item) =>{
            //         if(id == item.id){
            //             item.likes--;
            //         }
            //     });
            // }
        }
    }
}
</script>