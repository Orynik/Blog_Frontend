import Article from "../models/Article"
import Categories from "../models/Categories"

export default{
    getArticles(){
        const items = [
            {
                id: 1, title: "Vue.JS blog",content: "qweqweqweqwewqewqeqw",
            },
            {
                id: 2, title: "Golang API",content: "qweqweqweqwewqewqeqw",
            },
            {
                id: 3, title: "RestApi",content: "qweqweqweqwewqewqeqw",
            },
            {
                id: 4, title: ".Net",content: "qweqweqweqwewqewqeqw",
            },
            {
                id: 5, title: "React",content: "qweqweqweqwewqewqeqw",
            },
            {
                id: 6, title: "Angular",content: "qweqweqweqwewqewqeqw",
            },
        ];
        return items.map((item) =>{
            const article = Article.createForm(item);
            return article;
        })
    },
    getCategories(){
        const items = [
            {
                name: "DevOps"
            },
            {
                name: "Frontend"
            },
            {
                name: "Backend"
            },
            {
                name: "C#"
            },
            {
                name: "Golang"
            },
            {
                name: "JavaScript"
            },
            {
                name: "Angular"
            }
        ];
        return items.map((item) =>{
            const name = Categories.createCategories(item);
            return name;
        })
    }
}