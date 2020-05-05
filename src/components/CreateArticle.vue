 <template>
    <b-container>
        <h5>Кол-во статей: {{getArticles.length}}</h5>
        <h1 class = "align-center w-auto mx-auto"> Создание статей </h1>
        <div class="tabs">
            <input type="radio" name = "tabs" id = "tab-btn-1" checked>
            <label for="tab-btn-1" class = "tab">Написание статьи</label>            
            <input type="radio" name = "tabs" id = "tab-btn-2">
            <label for="tab-btn-2" class = "tab">Предпросмотр</label>
            <div class="content">
                <form >
                    <textarea name="content" v-model = "content" id="content"></textarea>            
                    <div class = "d-flex">
                        <div class = "category-selector mr-3">
                            <label for="category-name">Выберите Категорию:</label><br>
                            <select name="category-list" id="category">
                                <option v-for = "item in getCategories" :key = "item.id" :value = "item.id">{{item.name}}</option>
                            </select>
                        </div>
                        <div class="title mr-3">
                            <label for="title">Укажите заголовок статьи:</label><br>
                            <input type="text" name="title" id="title">
                            <button type="button" @click="deployArticle()" class = "ml-auto align-self-end">Отправить</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="preview" v-if = "content == ''">
                Тут будет показана ваша статья!
            </div>
            <div class="preview" v-html="content" v-else>

            </div>
        </div>
    </b-container>
</template>
<script>
import {mapGetters,mapMutations} from "vuex"
import store from "../store/index"
import Article from "../models/Article"

export default {
    data(){
        return{
            content: "",
        }
    },
    computed:{
        ...mapGetters(["getCategories","getArticles"]),
    },
    methods:{
        ...mapMutations(["addArticle"]),
        deployArticle(){
            alert(new Date().toDateString({
                month: 'long',day: "numeric",year: "numeric"
            }));
            const article = new Article(
                8,
                document.getElementById('title'),
                document.getElementById("content").value,
                new Date(),
                this.category
            );
            this.addArticle(
                article
            );
        }
    }
}
</script>
<style scoped>
    textarea{
        margin-bottom: 10px;
        width: 100%;
        height: 400px;
    }
    button[type="submit"]{
        float: right;
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
      display: none;
      border: 1px solid rgb(121, 121, 121);
      padding: 10px 15px;
      border-radius: 4px;
      margin-bottom: 10px;
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