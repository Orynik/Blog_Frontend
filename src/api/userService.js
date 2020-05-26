export default{
    async register(data){
        const requestOptinos = {
            methods: 'POST',
            headers: {
                'Content-Type':'Application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        }

        // return fetch("127.0.0.1/users/register").then(handleResponse)
    }
}