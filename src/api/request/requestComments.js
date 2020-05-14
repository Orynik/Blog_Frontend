export default{
    async fetchComments(){
        let response = await fetch("http://192.168.0.101/Comments.json",{
            method: "GET",
        })

        if(response.ok){
            const data = await response.json();

            return await Object.values(data)[0]
        }else{
            throw new Error(`Ошибка HTTP: ${response.status}`)
        }

    }
}