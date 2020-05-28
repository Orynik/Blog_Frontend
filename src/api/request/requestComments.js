export default{
    async fetchComments(){
        let response = await fetch("http://localhost:3000/Comments",{
            method: "GET",
        })

        if(response.ok){
            const data = await response.json();

            return await Object.values(data)
        }else{
            throw new Error(`Ошибка HTTP: ${response.status}`)
        }
    },
    async postComment(comment){
        let response = fetch("http://localhost:3000/Comments",{
            method: "POST",
            body: JSON.stringify(comment),
            headers: {
                'Content-Type': 'application/json'
            }
        })


        if(!(await response).ok){
            throw new Error((await response).status + ":" + (await response).statusText)
        }

        return "done"
    }
}