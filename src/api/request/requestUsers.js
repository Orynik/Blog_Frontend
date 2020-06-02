export default{
    async register(user){
        let request = await fetch("http://ovz1.dkrovel.n50jp.vps.myjino.ru/users",{
            method: POST,
            body: JSON.stringify(user)
        })

        if((await request.ok)){
            alert((await request.status))
        }
    }
}