import React, { useRef } from 'react'
import './style.scss'

const Login = () => {
  const username = useRef('')
  const password = useRef('')
  const submit = () => {
    console.log(password.current.value)
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
            <button type="submit" className="card-operation-submit-btn" onClick={() => {submit()}}>登录</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login