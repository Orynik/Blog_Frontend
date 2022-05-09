<template>
  <transition
    name="fade"
    appear
  >
    <b-container
      class="ArticlesPage mt-3"
    >
      <h1
        class="ArticlesPage__title text-align-left"
      >
        Последние статьи
      </h1>

      <b-row>
        <b-col
          cols="9"
          class="article-list"
        >
          <div
            v-if="isErrored"
            class="alert alert-danger"
            role="alert"
          >
            {{ errortext }}
          </div>
          <div
            v-else
          >
            <div
              v-if="isloaded"
            >
              <ArticlesNameItem
                :articles="Articles"
                :views-category="viewsCategory"
              />
            </div>
            <div
              v-else
              class="loading"
            >
              Загрузка...
            </div>
          </div>
        </b-col>

        <b-col
          cols="3"
          class="article-category-list ml-auto"
        >
          <div
            class="article-category-item"
          >
            <h2
              class="article-category-title text-center"
            >
              Категории
            </h2>

            <transition-group
              name="Articles"
              appear
            >
              <ul
                v-if="isloaded"
                :key="isloaded"
              >
                <li>
                  <span
                    class="category"
                    @click="handlerCategory('all')"
                  >
                    Все категории
                  </span>
                </li>

                <li
                  v-for="category in arrCategories"
                  :key="category.category"
                >
                  <span
                    class="category"
                    @click="handlerCategory(category.category)"
                  >
                    {{ category.category }}
                  </span>
                </li>
              </ul>

              <div
                v-show="!isloaded"
                :key="!isloaded"
                class="my-3 ml-5 loading"
              >
                Загрузка...
              </div>
            </transition-group>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </transition>
</template>
<script>
import ArticleApi from '@/pages/ArticlesPage/_api'

import ArticlesNameItem from '@/pages/ArticlesPage/_components/ArticlesPageItem'
import { mapGetters } from 'vuex'

import dataSort from '@/helpers/dataSort'
import formatDate from '../../helpers/formatDate'
import Article from '@/models/Article'

export default {
  name: 'ArticlesPage',
  components: {
    ArticlesNameItem
  },
  data () {
    return {
      viewsCategory: 'all',
      arrArticles: [],
      arrCategories: [],
      isloaded: false,
      isErrored: false,
      errortext: ''
    }
  },
  computed: {
    ...mapGetters(['getCategories']),
    Articles () {
      if (this.viewsCategory === 'all') { // Сортировка статей по категориям
        return this.arrArticles
      } else {
        return this.arrArticles.filter(t => t.category === this.viewsCategory)
      }
    }
  },
  created () {
    ArticleApi.fetchArticles()
      .then((data) => {
        this.isloaded = true

        data.sort(dataSort)

        this.arrArticles = data.map((item) => {
          const article = Article.createForm(item)

          article.date = formatDate(article.date)

          return article
        })

        return data
      })
      .catch(error => {
        this.isErrored = true
        this.errortext = error
      })

    ArticleApi.fetchCategories()
      .then(
        (data) => {
          this.arrCategories = data

          return data
        }
      )
      .catch(error => {
        console.error(error)
      })
  },
  methods: {
    handlerCategory (category) {
      this.viewsCategory = category
    }
  }
}
</script>

<style lang="scss">
  .ArticlesPage {
    color: black;
    min-height: 100vh;

    &__title {
      margin: 20px 0 25px 0;
    }
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
