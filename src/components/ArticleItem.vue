<template>
    <b-container>
        <div class = "Post article-item mt-3">
            <div class = "d-flex justify-content-between">
                <span class = "article-author">{{CurrentArticle.author}}</span>
                <span class = "article-date">{{CurrentArticle.date}}</span>
            </div>
            <h4 class = "article-title">
                {{CurrentArticle.title}}
            </h4>
            <div class="article-full" v-html="CurrentArticle.content">
            </div>
        </div>
        <div class = "createComments mb-5">
            <h3>Добавить комментарий:</h3>
            <b-textarea id = "comment-texts"></b-textarea>
            <button class = "btn btn-primary mt-2" @click = "newComment">Отправить комментарий</button>
        </div>
        <h3>Комментарии ({{CurrentArticle.comments.length}})</h3>
        <hr>
        <div class = "comments" v-for = "comment in CurrentArticle.comments" :key = "comment.id">
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
import Comments from "../models/Comments"


export default {
    methods:{
        ...mapMutations(['addComment']),
        newComment(){
            const comm = new Comments(
                10,
                //TODO:Решить проблему с id ключами
                this.$route.params.id,
                "Orynik", 
                //TODO: Когда будет добавлена авторизация, заменить статического автора на того, кто сейчас авторизован
                document.getElementById("comment-texts").value
            )
            this.addComment(
                comm
            );
            document.getElementById("comment-texts").value = "";
        }
    },
    computed: {
        ...mapGetters(["getCurrentArticle"]),
        //Функция для поиска и вывода определенной статьи
        CurrentArticle(){
            return this.getCurrentArticle(this.$route.params.id)[0];
        }
    }
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