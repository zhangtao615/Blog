import React, { useRef } from 'react'
import axios from 'axios'
import './style.scss'

const Login = () => {
  const username = useRef('')
  const password = useRef('')
  const login = () => {
    let user = username.current.value
    let pass = password.current.value
    axios({
      method: "post",
      url: 'http://localhost:8080/api/user/login',
      data: {
        username: user,
        password: pass
      }
    }).then(res => {
      console.log(res)
    })
  }
  return (
    <div className="login-wrapper">
      <div className="card">
        <header className="card-header">
          欢迎，请登陆你的账号
        </header>
        <div className="card-operation">
          <div className="card-operation-username">
            <i className="iconfont icon">&#xe60f;</i>
            <input className="ipt" ref={username} type="text" placeholder="请输入用户名" />
          </div>
          <div className="card-operation-password">
            <i className="iconfont icon">&#xe608;</i>
            <input className="ipt" ref={password} type="password" placeholder="请输入密码" />
          </div>
          <div className="card-operation-submit">
            <button type="submit" className="card-operation-submit-btn" onClick={() => {login()}}>登录</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login