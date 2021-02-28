import React , { useRef, useEffect, useState } from 'react';
import { searchArticleAction } from '../../store/actionCreators'
import store from '../../store'
import useKeypress from '../../hooks/useKeyPress'
import './SiderBar.scss';

const SiderBar = () => {
  const [inputActive, setinputActive] = useState(false);
  const [storeData, setStoreData] = useState({})
  const enterPressed = useKeypress(13);
  let searchValue = useRef(null)
  const handleStoreChange = () => {
    setStoreData(store.getState())
  }
  useEffect(() => {
    handleStoreChange()
  }, [])
  useEffect(() => {
    if (enterPressed && inputActive) {
      store.dispatch(searchArticleAction(searchValue.current.value))
      searchValue.current.value = ''
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