<template>
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
            <div class = "article-info d-flex">
                <!-- ♥<span class = "article-info-likes"  @click = "like([$route.params.id])" id  = "like">{{getArticles[$route.params.id].likes}}</span> -->
                <span class = "article-info-comments">⌛ {{getArticles[$route.params.id].comments.length}}</span>
            </div>
    </div>
</template>
<script>
import {mapGetters,mapActions,mapMutations} from "vuex" 

export default {
    methods:{
        ...mapActions (["fetchArticles"]),
        ...mapMutations(["incLikes","decLikes"]),
        //TODO: передалать функцию лайка
        like(idx){
            let e = document.getElementById(idx);
            let likeButton = document.getElementById('like');
            if(likeButton.classList.contains("isActive")){
                likeButton.classList.remove ("isActive");
                this.decLikes(idx);
                likeButton.innerHTML = this.getArticles[idx].likes;
            }else{
                likeButton.classList.add("isActive");
                this.incLikes(idx);
                likeButton.innerHTML = this.getArticles[idx].likes;
            }
        }
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
</style>