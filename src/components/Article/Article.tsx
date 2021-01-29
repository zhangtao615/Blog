import React, { FC } from 'react';
import { CalendarDot, ChartLineArea, Time } from '@icon-park/react';
import './Article.scss';

const Article:FC = () => {
  return (
    <>
      <div className="article">
        <img className="article-cover" src="https://cdn.jsdelivr.net/gh/nexmoe/nexmoe.github.io@latest/images/Inside-On-Steam/006MhmB7gy1fh2budx9jqj31hc0u0gnu.jpg" alt=""/>
        <h1 className="article-title">冒险解谜游戏《Inside》</h1>
        <ul className="article-info">
          <li className="article-info-date">
            <CalendarDot theme="filled" size="15" fill="#ff4e6a" strokeWidth={2}/> <span className="date">2020年12月25日</span>
          </li>
          <li className="article-info-count">
            <ChartLineArea theme="filled" size="15" fill="#ff741e" strokeWidth={2}/> <span className="count">654字</span>
          </li>
          <li className="article-info-time">
            <Time theme="filled" size="15" fill="#ffb900" strokeWidth={2}/> <span className="time">大概2分钟</span>
          </li>
        </ul>
        <p className="article-summariz">貌似一个被当作实验品小男孩逃出荒岛的故事？</p>
      </div>
      <div className="article">
        <img className="article-cover" src="https://cdn.jsdelivr.net/gh/nexmoe/nexmoe.github.io@latest/images/Inside-On-Steam/006MhmB7gy1fh2budx9jqj31hc0u0gnu.jpg" alt=""/>
        <h1 className="article-title">冒险解谜游戏《Inside》</h1>
        <ul className="article-info">
          <li className="article-info-date">
            <CalendarDot theme="filled" size="15" fill="#ff4e6a" strokeWidth={2}/> <span className="date">2020年12月25日</span>
          </li>
          <li className="article-info-count">
            <ChartLineArea theme="filled" size="15" fill="#ff741e" strokeWidth={2}/> <span className="count">654字</span>
          </li>
          <li className="article-info-time">
            <Time theme="filled" size="15" fill="#ffb900" strokeWidth={2}/> <span className="time">大概2分钟</span>
          </li>
        </ul>
        <p className="article-summariz">貌似一个被当作实验品小男孩逃出荒岛的故事？</p>
      </div>
    </>
  )
};

export default Article;