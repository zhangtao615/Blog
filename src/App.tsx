import React, { FC, useEffect } from 'react';
import SiderBar from './components/SiderBar/SiderBar';
import Article from './components/Article/Article';
// import WriteArticle from './pages/WriteArticle/WriteArticle';
import About from './pages/About/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './App.scss';
import { Attention, Home, List, Up } from '@icon-park/react';
import avatar from './static/avatar.jpg';
import './style/reset.css';

const App:FC = () => {
  useEffect (() => {
    
  })
  return (
    <div className="warpper">
      <Router>
      <div className="personal-info">
        {/* 头像 */}
        <img className="avatar" src={avatar} alt=""/>
        {/* 目录 */}
          <div className="menus">
            
              <div className="home menus-item active">
                <div className="menus-item-icon">
                  <Home theme="outline" size="22" fill="#9ca2ab" strokeWidth={2} strokeLinecap="butt"/>
                </div>
                <Link to="/" className="menus-item-content">回到首页</Link>
              </div>
              <div className="list menus-item">
                <div className="menus-item-icon">
                  <List theme="outline" size="22" fill="#9ca2ab" strokeWidth={2} strokeLinecap="butt"/> 
                </div>
                <div className="menus-item-content">文章目录</div>
              </div>
              <div className="about menus-item">
                <div className="menus-item-icon">
                  <Attention theme="outline" size="22" fill="#9ca2ab" strokeWidth={2} strokeLinecap="butt"/>
                </div>
                <Link to='/about' className="menus-item-content">关于博客</Link>
              </div>
          </div>
          <SiderBar/>
        </div>
        <div className="article-part">
          <Switch>
            <Route exact path="/">
              <Article />
            </Route>
            <Route path="/about">
              <About/>
            </Route>
          </Switch>
        </div>
      </Router>
      <div className="others">
        <div className="write-article">
          <div className="write-article-btn">写文章</div>
        </div>
        <div className="visitor">
          <div className="visitor-avatar">
            <img src={avatar} alt=""/>
          </div>
          <div className="visitor-name">未登录</div>
          <div className="visitor-like visitor-item">个人中心</div>
          <div className="visitor-collect visitor-item">我收藏的</div>
          <div className="visitor-login visitor-item">填写建议</div>
          <div className="visitor-logou visitor-item">登录</div>
          <div className="visitor-logout visitor-item">退出登录</div>
        </div>
        <div className="back-to-top"><Up theme="filled" size="32" fill="#fff" strokeWidth={2}/></div>
      </div>
    </div>
  );
}

export default App;
