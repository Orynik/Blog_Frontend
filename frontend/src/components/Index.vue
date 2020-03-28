<template>
    <b-container class = "main mt-3">
        <h1 class = "main-title text-align-left">Все статьи</h1>
        <b-row>
            <b-col cols = "9"  class = "article-list">
                <articleItem></articleItem>
            </b-col>
            <b-col cols = "3" class = "article-category-list ml-auto">
                <div class = "article-category-item">
                    <h2 class = "article-category-title text-center">Категории</h2>
                    <ul>
                        <categoryItem></categoryItem>
                    </ul>
                </div>
                <div class = "article-latest-item">
                    <h2 class = "article-category-title text-center">Последние статьи</h2>
                    <ul>
                        <li><a href="#">О Vue</a></li>
                        <li><a href="#">О Golang</a></li>
                        <li><a href="#">О пиве</a></li>
                    </ul>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>
<style>
    .main-title{
        margin: 20px 0 25px 0;
    }
    .main{
        color: black;
    }
    .article-item,
    .article-category-item,
    .article-latest-item{
        padding: 5px;
        margin-bottom: 15px;
        border: 1px solid rgba(177, 177, 177, 0.342);
        border-radius: 10px;

        color: white;

        background-color: grey;
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
</style>
<script>
    import articleItem from "../components/Article-item.vue"
    import categoryItem from "../components/Category-item.vue"
    
    export default{
        components:{
            articleItem,
            categoryItem
        }
    }
</script>