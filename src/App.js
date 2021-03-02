import React, { useState, useEffect } from 'react';
import SiderBar from './components/SiderBar/SiderBar';
import Article from './components/Article/Article';
import Others from './components/Others/Others';
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
import './App.scss';

const App = () => {
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
          <Others />
        </Router>
      </div>
  );
}

export default App;
