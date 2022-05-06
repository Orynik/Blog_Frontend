export default{
    async fetchArticle(){

        let response = await fetch("http://localhost:3000/articles",{
            method: "GET",
            mode: "cors"
        })

        if((await response).ok){
            const data = await response.json();
            /*Сменил, так как статический xxx/Article.json неправильно обрабатывает json,
            и не разбивает его Object.values в [0] индекс, а нормальный REST заполянет
            весь массив
            */
            return await Object.values(data)
        }else{
            throw new Error(`Ошибка HTTP: ${response.status}`)
        }
    },
    async postArticle(article){
        let response = fetch("http://localhost:3000/articles/post",{
            method: "POST",
            mode: "cors",
            body: JSON.stringify(article),
        })

        if(!(await response).ok){
            return `Ошибка HTTP: ${response.status}`
        }
        return "done"
    }
}
