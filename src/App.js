import React, { useState } from 'react';
import SiderBar from './components/SiderBar/SiderBar';
import Article from './components/Article/Article';
import WriteArticle from './pages/WriteArticle/WriteArticle';
import Detail from './pages/Detail/Detail'
import Login from './pages/Login/Login'
import Reg from './pages/Reg/Reg'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import avatar from './static/avatar.png'
import defaultAvatar from './static/default_avatar.png'
import './App.scss';
import './style/reset.css';

const App = () => {
  const [isLogin, setIsLogin] = useState(false)
  return (
      <div className="warpper">
        <Router>
          <div className="personal-info">
            <Link to="/">
              <img className="avatar" src={avatar} alt="" style={{cursor:'pointer'}}/>
            </Link>
            <SiderBar/>
          </div>
          <div className="article-part">
            <Route exact path="/" component={Article} />
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
                  isLogin ? avatar : defaultAvatar
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
            { /**<div className="back-to-top"><i className="iconfont">&#xe87b;</i></div>*/ }
          </div>
        </Router>
      </div>
  );
}

export default App;
