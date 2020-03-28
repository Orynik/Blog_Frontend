export default class Article{
    constructor(id, title, content){
        this.id = id;
        this.title = title;
        this.content = content;
        this.likes = 0;
        this.comments = [];
        //TODO: Изметить автора и добавить дополнительные поля в класс
        this.author = 'orynik'; 
    }

    static createForm(data){
        const {id,title,content} = data;
        return new this(id,title,content);
    }

}