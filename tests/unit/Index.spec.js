import { assert } from 'chai'
import { mount,createLocalVue } from '@vue/test-utils'

import Index from '@/components/Index'
import IndexArticle from '@/components/IndexArticle'

import Vuex from "vuex"
import Bootstrap from "bootstrap-vue"

const localVue = createLocalVue();

localVue.use(Vuex)
localVue.use(Bootstrap)

let getters;
let actions;
let store;

//beforeEach позволяет убедиться, что все, находящиеся внутри нее будет именно таким с запуском каждого нового теста
beforeEach(() =>{
    actions ={
        fetchArticles: () => {
            // ...
        },
        fetchCategories: () =>{
            //...
        }
    }
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
    store = new Vuex.Store({
        actions,
        getters
    })
})

describe("Компонент Index.vue", () => {
    it("Проверка корректного отображения геттера категорий (Vuex)", () => {
        //Монтируем компонент вместе с тестовым Vuex
        const wrapper = mount(Index, {
            store, 
            localVue,
            stubs: ['router-link']
        })

        wrapper.setData({
            isloaded: true
        })

        //Ждем следующего обновления DOM-дерева и уже после этого начинаем проверку
        localVue.nextTick(()=>{
            const category = wrapper.findAll(".category")
            assert.equal(category.at(1).text(),getters.getCategories()[0].name,"Первая категория должна быть равна Frontend")
            assert.equal(category.at(2).text(),getters.getCategories()[1].name,"Первая категория должна быть равна Backend")
        })
    })
    it("Отображение загрузки, если данные еще не подгруженны",() => {
        const wrapper = mount(Index,{
            IndexArticle,
            store,
            localVue,
            stubs: ['router-link']
        })

        const loadingTag = wrapper.findAll(".loading")

        assert.equal(loadingTag.at(0).text(), "Загрузка...","Должна отображаться загрузка")
        assert.equal(loadingTag.length,2,"Должно быть две загрузки - Статьи и Категории")
    })
    it("Статьи фильтруются по нажатию на фильтр", ()=>{
        const wrapper = mount(Index, {
            store, 
            localVue,
            stubs: ['router-link']
        })

        wrapper.setData({
            isloaded: true
        })

        localVue.nextTick(() => {
            //Тест категории Frontend

            let category = wrapper.findAll(".category").at(1)
            category.trigger('click')
            localVue.nextTick(() => {
                const article_item = wrapper.findAll(".article-item")

                assert.equal(article_item.length,1,"Всего статей должно быть 1")

                const article_author = wrapper.find(".article-author");
                const article_counter_comments = wrapper.findAll(".comments-counter")
                const article_title = wrapper.find(".article-title")
                const article_content = wrapper.find(".article-preview")

                for(let k = 0; k < article_counter_comments.length; k++){
                    assert(article_counter_comments.at(k).text(), getters.getArticles()[0].comments[k].text,
                    "Текст должен совпадать с текстом переданного комментария")
                }

                assert(article_author.text(), getters.getArticles()[0].author,
                "Текст должен совпадать с текстом переданного комментария")

                assert(article_title.text(), getters.getArticles()[0].title,
                "Текст должен совпадать с текстом переданного комментария")

                assert(article_content.text(), getters.getArticles()[0].content,
                "Текст должен совпадать с текстом переданного комментария")

                //Тест категории All
                category = wrapper.findAll(".category").at(0)
                category.trigger('click')
                localVue.nextTick(() => {
                    const article_item = wrapper.findAll(".article-item")

                    assert.equal(article_item.length,2,"Всего статей должно быть 2")

                    const article_author = wrapper.findAll(".article-author");
                    const article_counter_comments = wrapper.findAll(".comments-counter")
                    const article_title = wrapper.findAll(".article-title")
                    const article_content = wrapper.findAll(".article-preview")

                    for(let k = 0; k < article_item.length; k++){
                        for(let j = 0; j < article_counter_comments.length; j++){
                            assert(article_counter_comments.at(j).text(), getters.getArticles()[k].comments[j].text,
                            "Текст должен совпадать с текстом переданного комментария")
                        }
                        assert(article_author.at(k).text(), getters.getArticles()[k].author,
                        "Текст должен совпадать с текстом переданного комментария")

                        assert(article_title.at(k).text(), getters.getArticles()[k].title,
                        "Текст должен совпадать с текстом переданного комментария")

                        assert(article_content.at(k).text(), getters.getArticles()[k].content,
                        "Текст должен совпадать с текстом переданного комментария")
                    }
                })
            })
        })
    })
})