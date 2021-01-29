import React , { FC } from 'react';
import './SiderBar.scss';

const SiderBar:FC = () => {
  return (
    <div className="sider-bar">
      {/* 搜索文章 */}
      <div className="search">
        <input type="span" placeholder="搜索文章"/>
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
      {/* 标签 */}
      <div className="tags">
        <span className="tags-item">HTML</span>
        <span className="tags-item">CSS</span>
        <span className="tags-item">JavaScript</span>
        <span className="tags-item">TypeScript</span>
        <span className="tags-item">Vue</span>
        <span className="tags-item">React</span>
      </div>
    </div>
  )
}

export default SiderBar;