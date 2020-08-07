import { assert } from 'chai'
import { mount,createLocalVue } from '@vue/test-utils'

import CreateArticle from '@/components/CreateArticle'
import ArticleModel from '@/models/Article'

import Vuex from "vuex"
import Bootstrap from "bootstrap-vue"

let localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(Bootstrap)

let getters;
let actions;
let store;
let articles = [
    {
        "id": 1, "title": "Vue.JS blog","content": "<p>В частности, понимание сути ресурсосберегающих технологий требует от нас анализа вывода текущих активов. Представители современных социальных резервов объединены в целые кластеры себе подобных. Учитывая ключевые сценарии поведения, социально-экономическое развитие создаёт предпосылки для кластеризации усилий. Диаграммы связей набирают популярность среди определенных слоев населения, а значит, должны быть разоблачены.</p><p>В своём стремлении повысить качество жизни, они забывают, что внедрение современных методик играет определяющее значение для своевременного выполнения сверхзадачи. Мы вынуждены отталкиваться от того, что укрепление и развитие внутренней структуры создаёт предпосылки для инновационных методов управления процессами.</p><p>Имеется спорная точка зрения, гласящая примерно следующее: диаграммы связей призывают нас к новым свершениям, которые, в свою очередь, должны быть преданы социально-демократической анафеме. Мы вынуждены отталкиваться от того, что семантический разбор внешних противодействий играет важную роль в формировании распределения внутренних резервов и ресурсов. А также непосредственные участники технического прогресса могут быть функционально разнесены на независимые элементы. Приятно, граждане, наблюдать, как многие известные личности описаны максимально подробно. Как уже неоднократно упомянуто, интерактивные прототипы, превозмогая сложившуюся непростую экономическую ситуацию, своевременно верифицированы. Прежде всего, экономическая повестка сегодняшнего дня требует определения и уточнения своевременного выполнения сверхзадачи.</p>", "date": "2020-03-02","category": "Frontend"
    },
    {
        "id": 2, "title": "Golang API","content": "qweqweqweqwewqewqeqw",  "date": "2020-03-01","category": "Backend"
    },
]
let state

beforeEach(() => {
    getters = {
        getCategories(){
            return [
                {
                    "name": "Frontend"
                },
                {
                    "name": "Backend"
                },
                {
                    "name": "C#"
                },
                {
                    "name": "Golang"
                },
                {
                    "name": "JavaScript"
                }
            ]
        },
        getEmail(){
            return state.email
        }
    },
    actions = {
        postArticle(article){
            let currentArticleID = 0;
            let arrayOfArticles = articles;
            for(let i =0 ; i < arrayOfArticles.length;i++){
                if(arrayOfArticles[i].id > currentArticleID){
                    currentArticleID = arrayOfArticles[i].id
                };
            };
            article.id = currentArticleID + 1;
            articles.push(article)
            return "done"
        },
    },
    state = {
        email: "test@user.com"
    }
    store = new Vuex.Store({
        getters,
        actions,
        state
    })
});

describe('Компонент CreateArticle.vue', () => {
    describe('Проверка отрисовки', () => {
        it("Проверка отображения уведомбения об удачной записи статьи", () => {
            const wrapper = mount(CreateArticle, {
                localVue,
                store,
                ArticleModel,
                stubs: ['router-link']
            })

            wrapper.setData({
                isCreated: true
            })

            localVue.nextTick(function(){
                assert.equal(wrapper.find("#success_block").text(),"Ваша статья успешно добавлена на сервер Вернуться на главную")
            })
        })
        it("Проверка отображения уведомбения об ошибке",() => {
            const wrapper = mount(CreateArticle, {
                localVue,
                store,
                ArticleModel,
                stubs: ['router-link']
            })

            wrapper.setData({
                isErrored: true
            })

            localVue.nextTick(function(){
                assert.equal(wrapper.find("#error_http").text(),"Произошла непредвиденная ошибка. Попробуйте позже.")
            })
        })
        it("Проверка вывода ошибок при незаполнении одного из полей",() =>{
            const wrapper = mount(CreateArticle, {
                localVue,
                store,
                ArticleModel,
                stubs: ['router-link']
            })

            wrapper.setData({
                isEmpty: true,
                validateErrors:{
                    "content":"Поле с текстом не может быть пустым",
                    "title":"У статьи должен быть заголовок"
                }
            })

            localVue.nextTick(function(){
                assert.equal(wrapper.find("#error_empty").text(),"Исправте возникшую(ие) ошибку(и):  Поле с текстом не может быть пустым  У статьи должен быть заголовок")
            })
        })
        it("Вывод сообщения об необходимости авторизации", () => {
            state.email = ""
            const wrapper = mount(CreateArticle, {
                localVue,
                store,
                ArticleModel,
                stubs: ['router-link']
            })
            
            assert.equal(wrapper.find(".alert-danger").text(),"Статьи могут писать только авторизованные пользователи")

        })
    })
    describe('Проверка правильной обработки данных методами', () => {
        it("Проверка обработки ошибок пользовательским валидатором", () => {
            const wrapper = mount(CreateArticle, {
                localVue,
                store,
                ArticleModel,
                stubs: ['router-link']
            })

            wrapper.setData({
                category: "Frontend",
            })

            wrapper.find(".form-submit").trigger("click")

            assert.equal(wrapper.vm.isEmpty,true,"Значение должно быть true, так как два поля пустых")
            assert.equal(wrapper.vm.validateErrors["content"],'Поле с текстом не может быть пустым',"Поле контент должно выдавать ошибку")
            assert.equal(wrapper.vm.validateErrors["title"],'У статьи должен быть заголовок',"Поле заголовок должно выдавать ошибку")

        })
    });
});