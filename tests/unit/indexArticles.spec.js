import { assert } from 'chai'
import { mount,createLocalVue, shallowMount} from '@vue/test-utils'

import IndexArticle from '@/components/IndexArticle'

import Router from "vue-router"
import Bootstrap from "bootstrap-vue"

const localVue = createLocalVue();

localVue.use(Router)
localVue.use(Bootstrap)

let getters;

let router = new Router({
    routes: [
        {
            path: "/articles/:id",
            name: "article",
            props: true,
            component: () => import("@/components/ArticleItem")
        }
    ]
})

//beforeEach позволяет убедиться, что все, находящиеся внутри нее будет именно таким с запуском каждого нового теста
beforeEach(() =>{
    getters = {
        getArticles: () => {
            return [
                {
                    id: 1, title: "Vue.JS blog",content: "<p>Darova</p>", date: "2020-03-02",category: "Frontend",author: "Orynik",
                    comments: [
                        {id: 1,idArticle: 1, Author: "Orynik",text: "qwes"},
                        {id: 2,idArticle: 1, Author: "Orynik",text: "qwes"},
                        {id: 3,idArticle: 1, Author: "Orynik",text: "qwes"},
                    ]
                },
                {
                    id: 2, title: "Golang API",content: "qweqweqweqwewqewqeqw",  date: "2020-03-01",category: "Backend",author: "Orynik",
                    comments: [
                        {id: 3,idArticle: 2, Author: "Orynik",text: "qwes"},
                        {id: 4,idArticle: 2, Author: "Orynik",text: "qwes"},
                    ],
                }
            ]
        },
        getCategories: ()=>{
            return [
                {
                    name: "Frontend"
                },
                {
                    name: "Backend"
                }
            ]
        },
    }
})

describe("Дочерний компонент IndexArticle.vue",() => { 
    it("Корректное отображение статей, переданных через props", () => {

        //Лучше всего сразу монтировать компонент с props, если они имеются, чтобы избежать проблем
        const wrapper = mount(IndexArticle,{
            propsData: {
                articles: getters.getArticles(),
                viewsCategory: 'all',
            },stubs: ['router-link']
            
        })
        
        //Получаем все находящиеся в смонтированном компоненте структуры DOM-дерева, имеющие класс .article-item
        const article_item = wrapper.findAll(".article-item")

        //Проверяем полученное кол-во статей
        assert.equal(article_item.length,2,"Всего статей должно быть 2")
        
        //Переменная для получения авторов, далее будут такие для всех сотальных
        const article_author = wrapper.findAll(".article-author");
        const article_counter_comments = wrapper.findAll(".comments-counter")
        const article_title = wrapper.findAll(".article-title")
        const article_content = wrapper.findAll(".article-preview")

        for(let i = 0; i < getters.getArticles.length; i++){

            for(let k = 0; k < getters.getArticles().length; k++){
                assert(article_counter_comments.at(i).text(), getters.getArticles()[i].comments[k].text,
                "Текст должен совпадать с текстом переданного комментария")
            }

            assert(article_author.at(i).text(), getters.getArticles()[i].author,
            "Текст должен совпадать с текстом переданного комментария")

            assert(article_title.at(i).text(), getters.getArticles()[i].title,
            "Текст должен совпадать с текстом переданного комментария")

            assert(article_content.at(i).text(), getters.getArticles()[i].content,
            "Текст должен совпадать с текстом переданного комментария")
        }
    })
})