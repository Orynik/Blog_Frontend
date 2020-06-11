import Article from "@/models/Article"
import Categories from "@/models/Categories"
import Comments from "@/models/Comments"

//Файлы с запросами к серверу
import reqArticles from "@/api/request/requestArticles"
import reqCategories from "@/api/request/requestCategories"
import reqComments from "@/api/request/requestComments"

export default{
    async getArticles(){
        const items = await reqArticles.fetchArticle();

        //Сортирую статьи по дате
        items.sort(dataSort);

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

            //Конвертирование статей в вид: Месяц, день, год, время публикации
            article.date = new Date(article.date).toLocaleString('ru', {
                month: 'long',day: "numeric",year: "numeric",hour: 'numeric',minute: 'numeric'
            })

            return article;
        })
    },
    async getCategories(){
        const items = await reqCategories.fetchCategories()

        //TODO: Добавить обработчик ошибок
        return items.map((item) =>{
            return Categories.createCategories(item);
        })
    },
    async getComments(){
        const items = await reqComments.fetchComments();

        items.sort(dataSort);

        return items.map((item) =>{
            item.date = new Date(item.date).toLocaleString('ru', {
                month: 'long',day: "numeric",year: "numeric",hour: 'numeric',minute: 'numeric'
            })

            return Comments.createComment(item);
        })
    },
    async postArticle(article){
        return await reqArticles.postArticle(article)
    },
    async postComment(comment){
        return await reqComments.postComment(comment)
    }
}

function dataSort(a,b){
    return new Date(b.date) - new Date(a.date);
}