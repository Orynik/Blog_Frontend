import { assert } from 'chai'
import { mount, createLocalVue } from '@vue/test-utils'

import IndexArticle from '@/pages/ArticlesPage/_components/ArticlesPageItem'

import Router from 'vue-router'
import Bootstrap from 'bootstrap-vue'

const localVue = createLocalVue()

localVue.use(Router)
localVue.use(Bootstrap)

let getters

// beforeEach позволяет убедиться, что все, находящиеся внутри нее будет именно таким с запуском каждого нового теста
beforeEach(() => {
  getters = {
    getArticles: () => {
      return [
        {
          id: 1,
          title: 'Vue.JS blog',
          content: '<p>Darova</p>',
          date: '2020-03-02',
          category: 'Frontend',
          author: 'Orynik',
          comments: [
            { id: 1, idArticle: 1, Author: 'Orynik', text: 'qwes' },
            { id: 2, idArticle: 1, Author: 'Orynik', text: 'qwes' },
            { id: 3, idArticle: 1, Author: 'Orynik', text: 'qwes' }
          ]
        },
        {
          id: 2,
          title: 'Golang API',
          content: 'qweqweqweqwewqewqeqw',
          date: '2020-03-01',
          category: 'Backend',
          author: 'Orynik',
          comments: [
            { id: 3, idArticle: 2, Author: 'Orynik', text: 'qwes' },
            { id: 4, idArticle: 2, Author: 'Orynik', text: 'qwes' }
          ]
        }
      ]
    },
    getCategories: () => {
      return [
        {
          name: 'Frontend'
        },
        {
          name: 'Backend'
        }
      ]
    }
  }
})

describe('Компонент ArticlesPageItem.vue', () => {
  it('Корректное отображение статей, переданных через props', () => {
    // Лучше всего сразу монтировать компонент с props, если они имеются, чтобы избежать проблем
    const wrapper = mount(IndexArticle, {
      propsData: {
        articles: getters.getArticles(),
        viewsCategory: 'all'
      },
      stubs: ['router-link']
    })

    // Получаем все находящиеся в смонтированном компоненте структуры DOM-дерева, имеющие класс .article-item
    const articleItem = wrapper.findAll('.article-item')

    // Проверяем полученное кол-во статей
    assert.equal(articleItem.length, 2, 'Всего статей должно быть 2')

    // Переменная для получения авторов, далее будут такие для всех сотальных
    const articleAuthor = wrapper.findAll('.article-author')
    const articleCounterComments = wrapper.findAll('.comments-counter')
    const articleTitle = wrapper.findAll('.article-title')
    const articleContent = wrapper.findAll('.article-preview')

    for (let i = 0; i < getters.getArticles.length; i++) {
      for (let k = 0; k < getters.getArticles().length; k++) {
        assert(articleCounterComments.at(i).text(), getters.getArticles()[i].comments[k].text,
          'Текст должен совпадать с текстом переданного комментария')
      }

      assert(articleAuthor.at(i).text(), getters.getArticles()[i].author,
        'Текст должен совпадать с текстом переданного комментария')

      assert(articleTitle.at(i).text(), getters.getArticles()[i].title,
        'Текст должен совпадать с текстом переданного комментария')
      assert(articleContent.at(i).text(), getters.getArticles()[i].content,
        'Текст должен совпадать с текстом переданного комментария')
    }
  })
})
