import React, { useRef } from 'react'
import store from '../../store'
import { loginSuccessAction } from '../../store/actionCreators'
import axios from 'axios'
import { useHistory } from 'react-router-dom' 
import './style.scss'

const Login = () => {
  const username = useRef('')
  const password = useRef('')
  let history = useHistory();
  const handleLogin = (username, password) => {
    return new Promise((resolve, reject) => {
      axios({
        method: "post",
        url: 'http://localhost:8080/api/user/login',
        data: {
          username: username,
          password: password
        }
      }).then(res => {
        if (res.data.status === 'ok') {
          resolve({
            data: res.data
          })
          // dispatch(isLoginAction(res.data))
        } else {
          reject(res)
        }
      })
    })
  }
  const loginBtn = async() => {
    let user = username.current.value
    let pass = password.current.value
    const res = await handleLogin(user, pass)
    console.log(res.data.status)
    if (res.data.status === 'ok') {
      store.dispatch(loginSuccessAction(res.data))
      history.push('/')
    }
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
            <button type="submit" className="card-operation-submit-btn" onClick={() => {loginBtn()}}>登录</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login