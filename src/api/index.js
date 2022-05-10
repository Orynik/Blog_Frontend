import Comments from '@/models/Comments'

import dataSort from '@/helpers/dataSort'

// Файлы с запросами к серверу
import reqComments from '@/api/request/requestComments'

export default {
  async getComments () {
    const items = await reqComments.fetchComments()

    items.sort(dataSort)

    return items.map((item) => {
      item.date = new Date(item.date).toLocaleString('ru', {
        month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'
      })

      return Comments.createComment(item)
    })
  },
  async postComment (comment) {
    return await reqComments.postComment(comment)
  }
}
