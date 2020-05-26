import Article from "@/models/Article"
import Categories from "@/models/Categories"
import Comments from "@/models/Comments"

//Файлы с запросами к серверу
import reqArticles from "@/api/request/requestArticles"
import reqCategories from "@/api/request/requestCategories"
import reqComments from "@/api/request/requestComments"

export default{
    //TODO: Добавить обработчик ошибок
    async getArticles(){
        const items = await reqArticles.fetchArticle();

        //Сортирую статьи по "свежести"
        items.sort((a,b) =>{
            return new Date(b.date) - new Date(a.date);
        });

        //Получаю массив комментариев
        const comm = await this.getComments();

        return items.map((item) =>{
            const article = Article.createForm(item);

            //Добавляю комментарии к статье
            comm.map((com)=>{
                if(article.id == com.idArticle){
                    article.comments.push(com);
                }
            });

            //Конвертирование статей в вид: число месяц(название) год
            article.date = new Date(article.date).toLocaleString('ru', {
                month: 'long',day: "numeric",year: "numeric"
            })

            return article;
        })
    },
    async getCategories(){
        const items = await reqCategories.fetchCategories()

        //TODO: Добавить обработчик ошибок
        return items.map((item) =>{
            const name = Categories.createCategories(item);
            return name;
        })
    },
    async getComments(){
        const items = await reqComments.fetchComments();

        return items.map((item) =>{
            return Comments.createComment(item);
        })
    },
    async postArticle(article){
        return await reqArticles.postArticle(article)
    },
    postComment(comment){
        reqComments.postComment(comment)
    }
}