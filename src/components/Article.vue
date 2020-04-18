<template>
    <b-container>
        <div class = "Post article-item">
            <div class = "d-flex justify-content-between">
                <span class = "article-author">{{getArticles[$route.params.id].author}}</span>
                <span class = "article-date">{{getArticles[$route.params.id].date}}</span>
            </div>
            <h4 class = "article-title">
                {{getArticles[$route.params.id].title}}
            </h4>
            <div class="article-preview" v-html="getArticles[$route.params.id].content">
            </div>

        </div>
        <h3>Комментарии ({{getArticles[$route.params.id].comments.length}})</h3>
        <hr>
        <div class = "comments" v-for = "comment in getArticles[$route.params.id].comments" :key = "comment.id">
            <a href="#" class = "commentsAuthor">{{comment.author}}</a>
            <div class = "commentsContent">
                {{comment.text}}
            </div>
            <hr>
        </div>
    </b-container>
</template>
<script>
import {mapGetters,mapActions,mapMutations} from "vuex" 
import store from "../store/index"

export default {
    methods:{
        ...mapActions (["fetchArticles"]),
        // ...mapMutations(["incLikes","decLikes"]),
        //TODO: передалать функцию лайка
        // like(idx){
        //     let e = document.getElementById(idx);
        //     let likeButton = document.getElementById('like');
        //     if(likeButton.classList.contains("isActive")){
        //         likeButton.classList.remove ("isActive");
        //         this.decLikes(idx);
        //         likeButton.innerHTML = this.getArticles[idx].likes;
        //     }else{
        //         likeButton.classList.add("isActive");
        //         this.incLikes(idx);
        //         likeButton.innerHTML = this.getArticles[idx].likes;
        //     }
        // }
    },
    computed: mapGetters(["getArticles"]),
    async mounted() {
        this.fetchArticles()
    },
};
</script>

<style>
    .Post{
        border-radius: 0;
    }

    .commentsAuthor{
        color: #17a2b8 ;
    }

    .commentsContent{
        margin-left: 5px;
        padding-left: 10px;
        border-left: 2px rgba(128, 128, 128, 0.479) solid;
        border-radius: 2px;
    }
</style>