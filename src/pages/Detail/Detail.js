import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Comment from '../../components/Comment/Comment'
import BlogDetail from '../../components/BlogDetail/BlogDetail'
import './style.scss'

const Detail = () => {
  const [article, setArticle] = useState({})
  let id = window.location.href.split('/').pop()
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
          <i className="iconfont">&#xe661;</i> <span className="count">{article.tag}</span>
        </li>
      </ul>
      </header>
      <article className="article">
        <BlogDetail detail={article.content} />
      </article>  
      <footer className="comment">
        <Comment id={id}/>
      </footer>
    </div>
  )
}
export default Detail