export default{
    async fetchCategories(){
        let response = await fetch("http://ovz1.dkrovel.n50jp.vps.myjino.ru/categories/get",{
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