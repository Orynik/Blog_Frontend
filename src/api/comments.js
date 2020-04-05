import Comments from "@/models/Comments"

const items = [
    {id: 1,idArticle: 1, Author: "Orynik",text: "qwes"},
    {id: 2,idArticle: 1, Author: "Orynik",text: "qwes"},
    {id: 3,idArticle: 1, Author: "Orynik",text: "qwes"},
    {id: 4,idArticle: 2, Author: "Orynik",text: "qwes"},
    {id: 5,idArticle: 2, Author: "Orynik",text: "qwes"},
    {id: 6,idArticle: 3, Author: "Orynik",text: "qwes"},
    {id: 7,idArticle: 4, Author: "Orynik",text: "qwes"},
    {id: 8,idArticle: 4, Author: "Orynik",text: "qwes"},
    {id: 9,idArticle: 5, Author: "Orynik",text: "qwes"},
];

export default{
    getComments(){
        return items.map((item) =>{
            return Comments.createForm(item);
        })
    }
}