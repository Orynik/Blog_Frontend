<template>
  <transition
    name="fade"
    appear
  >
    <b-container
      v-if="!isLoading && objCurrentArticle"
      class="main"
    >
      <div
        class="Post article-item mt-3"
      >
        <div
          class="d-flex justify-content-between"
        >
          <span
            class="article-author"
          >{{ objCurrentArticle.author }}</span>

          <span
            class="article-date"
          >{{ objCurrentArticle.date }}</span>
        </div>

        <h4
          class="article-title"
        >
          {{ objCurrentArticle.title }}
        </h4>

        <div
          class="article-full"
          v-html="objCurrentArticle.content"
        />
      </div>

      <b-alert
        v-if="isErrored"
        id="error_http"
        variant="danger"
        show
        fade
      >
        Произошла непредвиденная ошибка, мы не смогли добавить ваш комментарий. Попробуйте позже.
      </b-alert>

      <div
        class="createComments mb-5"
      >
        <h3>Добавить комментарий:</h3>

        <b-textarea
          id="comment-texts"
          v-model="strContent"
        />

        <button
          class="btn btn-primary mt-2"
          :disabled="isSubmited"
          @click="newComment"
        >
          Отправить комментарий
        </button>
      </div>

      <h3>Комментарии ({{ objCurrentArticle.comments.length }})</h3>

      <hr>

      <transition-group
        name="fade"
        appear
      >
        <div
          v-for="comment in objCurrentArticle.comments"
          :key="comment.id"
          class="comments"
        >
          <div
            class="d-flex justify-content-between"
          >
            <a
              href="#"
              class="commentsAuthor"
            >
              {{ comment.author }}
            </a>

            <span>{{ formatDate(comment.date) }}</span>
          </div>

          <div
            class="commentsContent"
          >
            {{ comment.text }}
          </div>
          <hr>
        </div>
      </transition-group>
    </b-container>
  </transition>
</template>
<script>
import ArticleApi from '@/pages/ArticlesPage/_api'

import { mapGetters, mapActions } from 'vuex'
import Comments from '@/models/Comments'

import formatDate from '@/helpers/formatDate'

export default {
  name: 'ArticlePage',
  data () {
    return {
      strContent: '',
      isSubmited: false,
      isLoading: true,
      isErrored: false,
      objCurrentArticle: {}
    }
  },
  computed: {
    ...mapGetters(['getEmail'])
  },
  created () {
    ArticleApi.fetchArticle(this.$route.params.id)
      .then((data) => {
        this.objCurrentArticle = data
        this.objCurrentArticle.date = this.formatDate(data.date)

        return data
      })
      .finally(() => {
        this.isLoading = false
      })
      .catch(err => console.error(err))
  },
  methods: {
    formatDate,
    ...mapActions(['postComment']),
    newComment () {
      if (!this.strContent) {
        alert('Недопускается пустой комментарий')
        return
      }

      this.isSubmited = true

      if (!this.getEmail) {
        alert('Комментарии могут оставлять только авторизованные пользователи')
        this.isSubmited = false
        return
      }

      const comm = new Comments(
        0,
        this.CurrentArticle.id,
        this.getEmail,
        this.strContent,
        new Date()
      )

      this.postComment(comm)
        .then((data) => {
          this.isErrored = false
          this.isSubmited = false
          this.strContent = ''

          return data
        })
        .catch(err => {
          this.isErrored = true
          this.isSubmited = false
          console.error(err)
        })
    }
  }
}
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
