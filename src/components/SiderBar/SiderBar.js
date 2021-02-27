import React , { useRef, useEffect, useState } from 'react';
import axios from 'axios'
import useKeypress from '../../hooks/useKeyPress'
import './SiderBar.scss';

const SiderBar = (props) => {
  const [inputActive, setinputActive] = useState(false);
  const enterPressed = useKeypress(13);
  let searchValue = useRef(null)
  console.log(props)
  const searchArticle = (val) => {
    axios({
      method: "GET",
      url: "http://localhost:8080/api/blog/getBlogList",
      params: {
        keyword: val
      }
    }).then(res => {
      let data = res.data.data
    })
  }
  useEffect(() => {
    if (enterPressed && inputActive) {
      searchArticle(searchValue.current.value)
    }
  }, [inputActive, enterPressed])
  return (
    <div className="sider-bar">
      {/* 搜索文章 */}
      <div className="search">
        <input 
          type="text" 
          placeholder="搜索文章"
          onFocus={() => {setinputActive(true)}}
          onBlur={() => {setinputActive(false)}}
          ref={searchValue}
        />
      </div>
      {/* 文章类型 */}
      <div className="category">
        <div className="category-title">文章分类</div>
        <ul className="category-list">
          <li className="category-list-item">
            <span className="category-list-item-title">HTML/CSS</span><span className="category-list-item-count">10</span>
          </li>
          <li className="category-list-item">
            <span className="category-list-item-title">JavaScript</span><span className="category-list-item-count">20</span>
          </li>
          <li className="category-list-item">
            <span className="category-list-item-title">Vue</span><span className="category-list-item-count">5</span>
          </li>
          <li className="category-list-item">
            <span className="category-list-item-title">React</span><span className="category-list-item-count">5</span>
          </li>
          <li className="category-list-item">
            <span className="category-list-item-title">Webpack</span><span className="category-list-item-count">3</span>
          </li>
          <li className="category-list-item">
          <span className="category-list-item-title">NodeJS</span><span className="category-list-item-count">4</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SiderBar;