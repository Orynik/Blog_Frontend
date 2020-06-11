export default class Categories{
    constructor(category){
        this.category = category
    }
    static createCategories(data){
        const {id,category} = data
        return new this(category)
    }
}