<template>
  <div>
    <transition-group
      v-if="articles.length"
      name="Articles"
      appear
    >
      <div
        v-for="(article,index) in articles"
        :key="article.id"
        class="article-item"
      >
        <div
          class="d-flex justify-content-between"
        >
          <span
            class="article-author"
          >
            {{ article.author }}
          </span>

          <span
            class="article-date"
          >
            {{ article.date }}
          </span>
        </div>

        <h2
          class="article-title"
        >
          {{ article.title }}
        </h2>

        <div
          class="article-preview"
          v-html="article.content"
        />
        <div
          class="article-info d-flex"
        >
          <i
            class="like-icon mr-2"
          />

          <span
            :id="index"
            class="article-info-likes"
            @click="like(index)"
          >
            {{ article.likes }}
          </span>

          <span
            class="article-info-comments d-flex"
          >
            <i
              class="comments-icon mr-2"
            />

            <span
              class="comments-counter"
            > {{ article.comments.length }}</span>
          </span>

          <transition
            name="fade"
            mode="out-in"
          >
            <router-link
              :to="{name: 'article', params: {id: article.id}}"
              tag="a"
              class="linkToArticle  ml-auto"
            >
              Перейти к статье
            </router-link>
          </transition>
        </div>
      </div>
    </transition-group>

    <transition
      name="fade"
      appear
    >
      <div
        v-if="!articles.length"
      >
        На данных момент статей с категорией "{{ viewsCategory }}" нет, но вы можете стать первыми!
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ArticlesNameItem',
  // Для тестирования, лучше прописывать properties именно таким образом.
  props: {
    articles: {
      type: Array,
      required: true
    },
    viewsCategory: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
    .comments-icon,
    .like-icon{
        width: 20px;
        height: 20px;
    }

    .comments-icon::before,
    .like-icon::before{
        display: block;
        content: url("../../../assets/interface.png");
        width: 20px;
        height: 20px;
    }
    .like-icon::before{
        content: url("../../../assets/like.png");
    }
    .comments-icon::before{
        content: url("../../../assets/interface.png");
    }
</style>
