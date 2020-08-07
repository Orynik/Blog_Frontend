export default class Article{
    constructor(id, title,author, content,date,category){
        this.id = id;
        this.title = title;
        this.content = content;
        this.likes = 0;
        this.comments = [];
        this.date = date
        this.category = category;
        this.author = author;
    }

    static createForm(data){
        const {id,title,author,content,date,category} = data;
        return new this(id,title,author,content,date,category);
    }
}