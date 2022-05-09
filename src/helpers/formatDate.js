function formatDate (date) {
  return new Date(date).toLocaleString('ru', {
    month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'
  })
}

export default formatDate
