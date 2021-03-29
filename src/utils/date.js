const transferDate = () => {
  let date = new Date()
  let years = date.getFullYear()
  let month = date.getMonth()
  let day = date.getDay()
  return `${years}年${month}月${day}日`
}

export default transferDate