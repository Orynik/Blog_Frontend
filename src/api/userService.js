export default{
    async register(user){
        let request = await fetch("http://localhost:3000/users",{
            method: "POST",
            body: JSON.stringify(user),
            mode: "cors"
        })

        if(request.status == 201){
            return true
        }if(request.status == 500){
            throw new Error("server errored")
        }else{
            throw new Error((await request).status + " : " + (await request).statusText)
        }
    },
    async login(user){
        let request = await fetch("http://localhost:3000/sessions",{
            method: "POST",
            body: JSON.stringify(user),
            credentials: "include",
            mode: "cors",
        })

        if(request.status == 200){
            return true
        }if(request.status == 401){
            throw new Error("not auth")
        }if(request.status == 500){
            throw new Error("server errored")
        }else{
            throw new Error((await request).status + " : " + (await request).statusText)
        }
    },
    async cookiesLogin(){
        let request = await fetch("http://localhost:4444/private/whoami",{
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
                return new Error(err)
            }
        )

        return await request["email"]
    }
}
