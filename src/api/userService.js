export default{
    async register(user){
        let request = await fetch("http://192.168.0.102:4444/users",{
            method: "POST",
            body: JSON.stringify(user),
            mode: "cors"
        })

        if((await request).ok){
            return true
        }else{
            throw new error((await request).status + " : " + (await request).statusText)
        }
    },
    async login(user){
        let request = await fetch("http://192.168.0.102:4444/sessions",{
            method: "POST",
            body: JSON.stringify(user),
            credentials: "include",
            mode: "cors",
        })

        for (let [key, value] of request.headers) {
            console.log(`${key} = ${value}`);
        }
    },
    async cookiesLogin(){
        let request = await fetch("http://192.168.0.102:4444/private/whoami",{
            method: "GET",
            credentials: "include",
            mode: "cors",
        }).then(
            (result) => {
                if(result.ok){
                    return result.json()
                }
            },
            (err) => {
                return new error(err)
            }
        )

        return await request["email"]
    }
}