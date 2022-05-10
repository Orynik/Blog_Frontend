<template>
  <transition
    name="CA"
    appear
  >
    <b-container>
      <h1
        class="align-center w-auto mx-auto"
      >
        Создание статей
      </h1>

      <div
        v-if="email.length"
      >
        <div
          v-if="!isCreated"
          class="tabs"
        >
          <b-alert
            v-if="isErrored"
            id="error_http"
            variant="danger"
            show
            fade
          >
            Произошла непредвиденная ошибка. Попробуйте позже.
          </b-alert>

          <transition
            name="fade"
          >
            <b-alert
              v-if="isEmpty"
              id="error_empty"
              variant="warning"
              show
            >
              Исправте возникшую(ие) ошибку(и):
              <transition-group
                name="Articles"
                tag="ul"
              >
                <li
                  v-for="(item,idx) of validateErrors"
                  :key="idx"
                >
                  {{ item }}
                </li>
              </transition-group>
            </b-alert>
          </transition>

          <input
            id="tab-btn-1"
            type="radio"
            name="tabs"
            checked
          >
          <label
            for="tab-btn-1"
            class="tab tab-first"
          >
            Написание статьи
          </label>

          <input
            id="tab-btn-2"
            type="radio"
            name="tabs"
          >

          <label
            for="tab-btn-2"
            class="tab"
          >
            Предпросмотр
          </label>

          <div
            class="content"
          >
            <form>
              <textarea
                id="content"
                v-model="content"
                name="content"
              />

              <div
                class="d-flex"
              >
                <div
                  class="category-selector mr-3"
                >
                  <label
                    for="category-name"
                  >
                    Выберите Категорию:
                  </label><br>

                  <select
                    id="category"
                    v-model="category"
                    class="form-control"
                    name="category-list"
                  >
                    <option
                      value="Backend"
                    >
                      Backend
                    </option>

                    <option
                      v-for="item in getCategories"
                      :key="item.id"
                      :value="item.category"
                    >
                      {{ item.category }}
                    </option>
                  </select>
                </div>

                <div
                  class="title mr-3"
                >
                  <label
                    for="title"
                  >
                    Заголовок статьи:
                  </label><br>

                  <input
                    id="title"
                    v-model="title"
                    class="form-control"
                    type="text"
                    name="title"
                  >
                </div>

                <button
                  type="button"
                  class="btn btn-primary ml-auto form-submit"
                  @click.prevent="validateForm()"
                >
                  Отправить
                </button>
              </div>
            </form>
          </div>

          <div
            v-if="!content.length"
            class="preview"
          >
            Тут будет показана ваша статья!
          </div>
          <div
            v-else
            class="preview"
            v-html="content"
          />
        </div>
      </div>

      <transition
        name="CA"
        appear
      >
        <div
          v-if="!email.length"
          class="alert alert-danger"
          role="alert"
        >
          Статьи могут писать только авторизованные пользователи
        </div>
      </transition>

      <transition name="CA">
        <div
          v-if="isCreated"
          id="success_block"
        >
          <b-alert
            v-if="isCreated"
            variant="success"
            show
            fade
          >
            Ваша статья успешно добавлена на сервер.
          </b-alert>

          <router-link
            to="/"
            class="btn btn-primary"
          >
            Вернуться на главную
          </router-link>
        </div>
      </transition>
    </b-container>
  </transition>
</template>
<script>
import ArticleApi from '@/pages/ArticlesPage/_api'

import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      title: '',
      content: '',
      category: '',

      isCreated: false,
      isErrored: false,
      isEmpty: false,
      validateErrors: []
    }
  },
  computed: {
    ...mapGetters(['getCategories', 'getEmail']),
    email () {
      return this.getEmail
    }
  },
  methods: {
    ...mapActions(['postArticle']),
    validateForm () {
      this.isErrored = false
      this.validateErrors = {}

      if (this.content && this.title && this.category) {
        this.isEmpty = false

        ArticleApi.postArticle({
          title: this.title,
          email: this.email,
          content: this.content,
          date: new Date(),
          category: this.category
        })
          .then(result => {
            // if (result !== 'done') throw new Error('something wrong')

            this.isCreated = true

            return result
          }).catch(err => {
            console.error(err)
          })
      } else {
        if (!this.content) {
          this.validateErrors.content = 'Поле с текстом не может быть пустым'
        } else {
          delete this.validateErrors.content
        }

        if (!this.title) {
          this.validateErrors.title = 'У статьи должен быть заголовок'
        } else {
          delete this.validateErrors.title
        }

        if (!this.category) {
          this.validateErrors.category = 'У статьи должна быть указана категория'
        } else {
          delete this.validateErrors.category
        }

        this.isEmpty = true
      }
    }
  }
}
</script>
<style scoped>
    .tab-first{
        margin-left: 17px;
    }

    textarea{
        margin-bottom: 10px;
        width: 100%;
        height: 400px;
    }

    .form-submit{
        margin-bottom: 0;
        flex-basis: 230px;
    }

    .tabs {
      /* max-width: 350px; */
      margin-left: auto;
      margin-right: auto;
    }

    .tab{
        margin-bottom: 0;
        border: 1px solid gray;
        border-bottom: 0;
        padding: 0 5px 0 5px;

        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        background: rgba(219, 219, 219, 0.726);

        transition: all ease-out 0.35s;
    }

    .tabs > label{
        margin-right: 25px;
    }

    .tabs>input[type="radio"] {
      display: none;
    }

    .tabs>input[type="radio"]:checked+.tab {
        background: #17a2b8 ;
    }

    .tabs>div {
      /* скрыть контент по умолчанию */
      border: 1px solid rgb(121, 121, 121);
      padding: 10px 15px;
      border-radius: 4px;
      margin-bottom: 10px;
    }

    .content,
    .preview{
        display: none;
    }

    /* отобразить контент, связанный с вабранной радиокнопкой (input type="radio") */
    #tab-btn-1:checked~.content,
    #tab-btn-2:checked~.preview{
      display: block;
    }

    .content > form{
        height: 100%;
        width: 100%;
    }
</style>
