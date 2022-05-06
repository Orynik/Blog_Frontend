export default{
    async fetchCategories(){
        let response = await fetch("http://localhost:3000/categories",{
            method: "GET",
        })

        if((await response).ok){
            const data = await response.json();
            return await Object.values(data)
        }else{
            throw new Error(`Ошибка HTTP: ${response.status}`)
        }
    }
}
