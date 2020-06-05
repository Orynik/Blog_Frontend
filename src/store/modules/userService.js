import api from "@/api/userService"

export default{
    actions: {
        async register(ctx,user){
            const request = await api.register(user).catch(
                (error) => {
                    if(error == "Error: server errored"){
                        return "Ошибка сервера. Попробуйте повторить запрос позже"
                    }else{
                        return "Ошибка сервера. Попробуйте повторить запрос позже"
                    }
                }
            )
            return request
        },
        async login(ctx,user){
            const request = await api.login(user).catch(
                (error) => {
                    if(error == "Error: not auth"){
                        return "Неверно введены логин или пароль."
                    }if(error == "Error: server errored"){
                        return "Ошибка сервера. Попробуйте повторить запрос позже"
                    }else{
                        return "Ошибка сервера. Попробуйте повторить запрос позже"
                    }
                }
            )
            if(request == true){
                ctx.commit("updateAuth",user["email"])
                return request
            }else{
                return request
            }
        },
        async getEmailUser(ctx){
            if(document.cookie != ""){
                const email = await api.cookiesLogin()
                ctx.commit("updateAuth", email)
                return true
            }
        }
    },
    mutations: {
        setEmail(store,data){
            store.email = data
        },
        updateAuth(store,data){
            store.email = data
            store.isAuthed = true
        },
        cleanAuth(store){
            store.email = ""
            store.isAuthed = false
        }
    },
    state: {
        isAuthed: false,
        email: ""
    },
    getters: {
        getStatusAuth(store){
            return store.isAuthed
        },
        getEmail(store){
            return store.email
        }
    }
}