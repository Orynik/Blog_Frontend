//TODO: Реализовать вывод и запись комментариев к статье

export default class Comments{
    constructor(id,idArticle,Author,text){
        this.id = id
        this.idArticle = idArticle;
        this.author = Author;
        this.text = text;
    }

    static createForm(data){
        const {id,idArticle,Author,text} = data;
        return new this(id,idArticle,Author,text);
    }
}