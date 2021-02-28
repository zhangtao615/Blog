import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './Article.scss';

const Article = () => {
  const [list, setList] = useState([])
  useEffect(() => {
    
  }, [])
  return (
    <Fragment>
      { list &&
        list.map(item => {
          return (
            <div className="article" key={item.id}>
              <Link to={'/detail/' + item.id }>
                <img className="article-cover" src={item.pic} alt=""/>
                <h1 className="article-title">{item.title}</h1>
              </Link>
              <ul className="article-info">
                <li className="article-info-date article-info-item">
                <i className="iconfont">&#xe774;</i> <span className="date">{item.createTime}</span>
                </li>
                <li className="article-info-count article-info-item">
                  <i className="iconfont">&#xe661;</i> <span className="count">{item.wordsCount}字</span>
                </li>
                <li className="article-info-time article-info-item">
                <i className="iconfont">&#xe601;</i> <span className="time">大概{item.readTime}分钟</span>
                </li>
              </ul>
              <p className="article-summariz">{item.description}</p>
            </div>
          )
        })
      }
    </Fragment>
  )
};

export default Article;