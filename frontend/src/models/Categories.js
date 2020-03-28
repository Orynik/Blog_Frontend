export default class Categories{
    constructor(name){
        this.name = name
    }
    static createCategories(data){
        const {name} = data
        return new this(name)
    }
}