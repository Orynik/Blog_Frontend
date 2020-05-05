<template>
    <b-container class = "main mt-3">
        <h1 class = "main-title text-align-left">Последние статьи</h1>
        <b-row>
            <b-col cols = "9"  class = "article-list">
                <div v-if = "loaded">
                    <articleItem :articles=Articles :viewsCategory = viewsCategory></articleItem>
                </div>
                <div v-else>
                    Загрузка...
                </div>
            </b-col>
            <b-col cols = "3" class = "article-category-list ml-auto">
                <div class = "article-category-item">
                    <h2 class = "article-category-title text-center">Категории</h2>
                    <ul>
                        <li>
                            <span class="category" @click = "handlerCategory('all')">Все категории</span>
                        </li>
                        <li v-for = "category in getCategories" :key = "category.name">
                            <span class = "category" @click = "handlerCategory(category.name)">{{category.name}}</span>
                        </li>
                    </ul>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
    import articleItem from "@/components/IndexArticle.vue"
    import {mapGetters,mapActions} from "vuex"

    export default{
        data(){
            return{
                viewsCategory: "all",
                loaded: true, //false
            }
        },
        components:{
            articleItem,
        },
        computed:{
            ...mapGetters(["getCategories","getArticles"]),
            Articles(){
                if(this.viewsCategory == "all"){ //Сортировка статей по сатегориям
                    return this.getArticles;
                }else{
                    return this.getArticles.filter(t => t.category == this.viewsCategory);                    
                }
                
            }
        },
        methods:{
            ...mapActions (["fetchCategories","fetchArticles"]),
            handlerCategory(category){
                this.viewsCategory = category;
            }
        },
        async mounted() {
            this.fetchCategories(),
            this.fetchArticles()
        },
    }
</script>
<style>


    .main-title{
        margin: 20px 0 25px 0;
    }
    .main{
        color: black;
    }

    .article-item{
        padding: 10px 15px 10px 15px;
    }

    .article-title{
        margin: 15px 0;
    }

    .article-preview{
        margin-bottom: 5px;
    }

    .article-info-likes{
        cursor: pointer;
    }

    .article-info-comments,
    .article-info-dislikes{
        margin-left: 10px;
    }

    .category{
        transition: 0.2s ease-in color;

        cursor: pointer
    }

    .category:hover{
        color: #42c1d4;
    }

    .linkToArticle{
        padding: 3px;
        border: 1px black solid;
        border-radius: 5px;
    }
</style>