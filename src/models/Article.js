export default class Article{
    constructor(id, title, content,date,category){
        this.id = id;
        this.title = title;
        this.content = content;
        this.likes = 0;
        this.comments = [];
        this.date = date != "" ? new Date(date) : new Date();
        this.category = category;
        //TODO: Изметить автора и добавить дополнительные поля в класс
        this.author = 'orynik'; 
    }

    static createForm(data){
        const {id,title,content,date,category} = data;
        return new this(id,title,content,date,category);
    }
    
}