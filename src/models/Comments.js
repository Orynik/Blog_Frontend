export default class Comments {
  constructor (id, idArticle, author, text, date) {
    this.id = id
    this.idArticle = idArticle
    this.author = author
    this.text = text
    this.date = date
  }

  static createComment (data) {
    const { id, idArticle, author, text, date } = data
    return new this(id, idArticle, author, text, date)
  }
}
