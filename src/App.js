import React, { useEffect, useState } from 'react';
import SiderBar from './components/SiderBar/SiderBar';
import Article from './components/Article/Article';
import WriteArticle from './pages/WriteArticle/WriteArticle';
import About from './pages/About/About';
import Detail from './pages/Detail/Detail'
import Login from './pages/Login/Login'
import Reg from './pages/Reg/Reg'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import './App.scss';
import './style/reset.css';

const App = () => {
  const [active, setActive] = useState(1)
  const [isLogin, setIsLogin] = useState(false)
  useEffect (() => {

  })
  return (
      <div className="warpper">
        <Router>
          <div className="personal-info">
            <img className="avatar" src='https://github.com/zhangtao615/blog/blob/main/src/statics/avatar.png?raw=true' alt=""/>
              <div className="menus">
                <Link to="/">
                  <div 
                    className={active === 1 ? "menus-item active" : "menus-item"}
                    onClick={() => {setActive(1)}}
                  >
                    <i className="iconfont icon">&#xe602;</i> 
                    <span>回到首页</span>
                  </div>
                </Link>
                <Link to='/about'>
                  <div 
                    className={active === 2 ? "menus-item active" : "menus-item"}
                    onClick={() => {setActive(2)}}
                  >
                    <i className="iconfont icon">&#xe600;</i> 
                    <span>关于博客</span>
                  </div>
                </Link>
              </div>
              <SiderBar/>
            </div>
            <div className="article-part">
              <Route exact path="/" component={Article} />
              <Route exact path="/about" component={About} />
              <Route exact path="/detail/:id" component={Detail} />
              <Route exact path="/write" component={WriteArticle} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/reg" component={Reg} />
            </div>
          <div className="others">
            <Link to="/write">
              <div className="write-article">
                <div className="write-article-btn">写文章</div>
              </div>
            </Link>
            <div className="visitor">
              <div className="visitor-avatar">
                <img src={
                  isLogin ? 'https://github.com/zhangtao615/blog/blob/main/src/statics/avatar.png?raw=true' : 'https://github.com/zhangtao615/blog/blob/main/src/statics/default_avatar.png?raw=true'
                } alt=""/>
              </div>
              <div className="visitor-name">未登录</div>
              <div className="visitor-operation">
                <Link to="/login">
                  <div className="login visitor-item">登录</div>
                </Link>
                <Link to='/reg'>
                  <div className="reg visitor-item">注册</div>
                </Link>
              </div>
              <div className="visitor-logout visitor-item">退出登录</div>
            </div>
            <div className="back-to-top"></div>
          </div>
        </Router>
      </div>
  );
}

export default App;
