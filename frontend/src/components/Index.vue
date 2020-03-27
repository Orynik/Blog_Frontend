<template>
    <b-container class = "main mt-3">
        <h1 class = "text-align-left">Все статьи</h1>
        <b-row>
            <b-col cols = "9"  class = "article-list">
                <div class = "article-item">
                    <div class = "article-info d-flex justify-content-between">
                        <span class = "arcitle-author">
                            orynik
                        </span>
                        <span class = "article-dataOfPublication">
                            27.03.2020
                        </span>
                    </div>
                    <h4 class = "article-title">
                        Интерполяция в Vue
                    </h4>
                    <div class="article-preview">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Autem est voluptas obcaecati porro non repellat, vero suscipit a totam iusto fugit cum 
                        optio deleniti. Maiores alias repudiandae laboriosam! Necessitatibus, neque.<br>
                        <br>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos accusantium, magni, 
                        sit quidem repellendus voluptatum deleniti quam officia quasi illo nostrum autem recusandae 
                        veritatis quisquam totam eligendi tempora, placeat beatae et cumque temporibus dolorem libero! 
                        Animi, delectus? Autem, expedita temporibus!
                    </div>
                    <div class = "article-info d-flex">
                        <span class = "article-info-likes">♥ 64</span>
                        <span class = "article-info-dislikes">💔 64</span>
                        <span class = "article-info-comments">⌛ 54</span>
                    </div>
                </div>
                <div class = "article-item">
                    <div class = "article-info d-flex justify-content-between">
                        <span class = "arcitle-author">
                            orynik
                        </span>
                        <span class = "article-dataOfPublication">
                            27.03.2020
                        </span>
                    </div>
                    <h4 class = "article-title">
                        Интерполяция в Vue
                    </h4>
                    <div class="article-preview">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Autem est voluptas obcaecati porro non repellat, vero suscipit a totam iusto fugit cum 
                        optio deleniti. Maiores alias repudiandae laboriosam! Necessitatibus, neque.<br>
                        <br>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos accusantium, magni, 
                        sit quidem repellendus voluptatum deleniti quam officia quasi illo nostrum autem recusandae 
                        veritatis quisquam totam eligendi tempora, placeat beatae et cumque temporibus dolorem libero! 
                        Animi, delectus? Autem, expedita temporibus!
                    </div>
                    <div class = "article-info d-flex">
                        <span class = "article-info-likes">♥ 64</span>
                        <span class = "article-info-dislikes">💔 64</span>
                        <span class = "article-info-comments">⌛ 54</span>
                    </div>
                </div>
                <div class = "article-item">
                    <div class = "article-info d-flex justify-content-between">
                        <span class = "arcitle-author">
                            orynik
                        </span>
                        <span class = "article-dataOfPublication">
                            27.03.2020
                        </span>
                    </div>
                    <h4 class = "article-title">
                        Интерполяция в Vue
                    </h4>
                    <div class="article-preview">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Autem est voluptas obcaecati porro non repellat, vero suscipit a totam iusto fugit cum 
                        optio deleniti. Maiores alias repudiandae laboriosam! Necessitatibus, neque.<br>
                        <br>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos accusantium, magni, 
                        sit quidem repellendus voluptatum deleniti quam officia quasi illo nostrum autem recusandae 
                        veritatis quisquam totam eligendi tempora, placeat beatae et cumque temporibus dolorem libero! 
                        Animi, delectus? Autem, expedita temporibus!
                    </div>
                    <div class = "article-info d-flex">
                        <span class = "article-info-likes">♥ 64</span>
                        <span class = "article-info-dislikes">💔 64</span>
                        <span class = "article-info-comments">⌛ 54</span>
                    </div>
                </div>
            </b-col>
            <b-col cols = "3" class = "article-category-list ml-auto">
                <div class = "article-category-item">
                    <h2 class = "article-category-title text-center">Категории</h2>
                    <ul>
                        <li><a href="">DevOps</a></li>
                        <li><a href="">Frontend</a></li>
                        <li><a href="">Backend</a></li>
                        <li><a href="">C#</a></li>
                        <li><a href="">Golang</a></li>
                        <li><a href="">JavaScript</a></li>
                    </ul>
                </div>
                <div class = "article-latest-item">
                    <h2 class = "article-category-title text-center">Последние статьи</h2>
                    <ul>
                        <li><a href="">О Vue</a></li>
                        <li><a href="">О Golang</a></li>
                        <li><a href="">О пиве</a></li>
                    </ul>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>
<style scoped>
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

    .article-title{
        margin: 15px 0;
    }
    .article-info-comments,
    .article-info-dislikes{
        margin-left: 10px;
    }
</style>