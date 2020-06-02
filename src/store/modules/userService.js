import api from "@/api/userService"

export default{
    actions: {
        async register(ctx,user){
            const request = await api.register(user)
            if(request == true){
                return true
            }
        },
        async login(ctx,user){
            await api.login(user)
            ctx.commit("updateAuth",user["email"])
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
            document.cookie = "";
        }
    },
    state: {
        isAuthed: false,
        email: ""
    },
    getters: {
        getStatusAuth(store){
            // console.log(store.isAuthed)
            return store.isAuthed
        },
        getEmail(store){
            // console.log(store.email)
            return store.email
        }
    }
}