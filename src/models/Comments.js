//TODO: Реализовать вывод и запись комментариев к статье
//TODO: Реализовать запись в бд и обновление с помощью REST.API
export default class Comments{
    constructor(id,idArticle,author,text){
        this.id = id
        this.idArticle = idArticle;
        this.author = author;
        this.text = text;
    }

    static createComment(data){
        const {id,idArticle,author,text} = data;
        return new this(id,idArticle,author,text);
    }
}