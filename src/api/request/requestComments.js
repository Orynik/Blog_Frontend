export default{
    async fetchComments(){
        let response = await fetch("http://localhost:4444/comments/get",{
            method: "GET",
        })

        if((await response).ok){
            const data = await response.json();

            return await Object.values(data)
        }else{
            throw new Error(`Ошибка HTTP: ${response.status}`)
        }
    },
    async postComment(comment){
        let response = fetch("http://localhost:4444/comments/post",{
            method: "POST",
            body: JSON.stringify(comment),
        })

        if(!(await response).ok){
            throw new Error((await response).status + ":" + (await response).statusText)
        }

        return "done"
    }
}