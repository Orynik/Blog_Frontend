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
        <b-alert id = "error_http" variant="danger" show fade v-if = "isErrored">
            Произошла непредвиденная ошибка, мы не смогли добавить ваш комментарий. Попробуйте позже.
        </b-alert>
        <div class = "createComments mb-5">
            <h3>Добавить комментарий:</h3>
            <b-textarea id = "comment-texts" v-model = "content"></b-textarea>
            <button class = "btn btn-primary mt-2" @click = "newComment" :disabled = "submited">Отправить комментарий</button>
        </div>
        <h3>Комментарии ({{CurrentArticle.comments.length}})</h3>
        <hr>
        <div class = "comments" v-for = "comment in CurrentArticle.comments" :key = "comment.id">
            <div class = "d-flex justify-content-between">
                <a href="#" class = "commentsAuthor">{{comment.author}}</a>
                <span>{{comment.date}}</span>
            </div>
            <div class = "commentsContent">
                {{comment.text}}
            </div>
            <hr>
        </div>
    </b-container>
</template>
<script>
import {mapGetters, mapActions} from "vuex"
import Comments from "../models/Comments"

export default {
    data(){
        return{
            content: "",
            submited: false,
            isErrored: false
        }
    },
    methods:{
        ...mapActions(['postComment']),
        async newComment(){
            if(this.content == ""){
                alert("Недопускается пустой комментарий")
                return
            }

            this.submited = true

            const comm = new Comments(
                0,
                this.CurrentArticle.id,
                "Orynik",
                this.content,
                new Date()
            )

            let result = await this.postComment(
                comm
            );

            if(result != true){
                this.isErrored = true
                this.submited = false
                return
            }

            this.isErrored = false
            this.submited = false
            this.content = "";
        }
    },
    computed: {
        ...mapGetters(["getCurrentArticle"]),
        //Функция для поиска и вывода определенной статьи
        CurrentArticle(){
            console.log(this.$route)
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