import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './style.scss'

const Detail = () => {
  const [article, setArticle] = useState({})
  useEffect(() => {
    const id = window.location.href.split('/').pop()
    axios.get('http://localhost:8080/api/blog/getBlogDetail?id=' + id)
    .then(res => {
      setArticle(res.data.data[0])
    })
  }, [])
  return (
    <div className="view-details">
      <header className="header">
      <img className="header-cover" src={article.pic} alt=""/>
      <h1 className="header-title">{article.title}</h1>
      <ul className="header-info">
        <li className="header-info-date header-info-item">
        <i className="iconfont">&#xe774;</i> <span className="date">{article.createTime}</span>
        </li>
        <li className="header-info-count header-info-item">
          <i className="iconfont">&#xe661;</i> <span className="count">{article.wordsCount}字</span>
        </li>
        <li className="header-info-time header-info-item">
        <i className="iconfont">&#xe601;</i> <span className="time">大概{article.readTime}分钟</span>
        </li>
      </ul>
      </header>
      <article className="article">
        {article.content}
      </article>  
      <footer className="comment">

      </footer>
    </div>
  )
}
export default Detail