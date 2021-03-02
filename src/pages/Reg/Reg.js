import React, { useState, useRef } from 'react'
import axios from 'axios'
import './style.scss'

const Reg = () => {
  let username = useRef('')
  let password = useRef('')
  let repPassword = useRef('')
  const [showTip, setShowTip] = useState(false)
  const userReg = () => {
    let name = username.current.value
    let pass = password.current.value
    // let repPass = repPassword.current.value
    axios({
      method: "post",
      url: 'http://localhost:8080/api/user/reg',
      data: {
        username: name,
        password: pass
      }
    }).then(res => {

    })
  }
  const comparePass = () => {
    let passOne = password.current.value
    let passTwo = repPassword.current.value
    if (passOne && passTwo && passOne !== passTwo) {
      setShowTip(true)
    } else {
      setShowTip(false)
    }
  }
  const checkUsername = () => {
    let name = username.current.value
    if (name.trim() !== '') {
      axios({
        method: 'post',
        url: 'http://localhost:8080/api/user/checkName',
        data: {
          username: name
        }
      }).then(res => {
        
      })
    }
  }
  return (
    <div className="reg-wrapper">
      <div className="card">
        <header className="card-header">
          欢迎，请注册你的账号
        </header>
        <div className="card-operation">
          <div className="card-operation-username">
            <i className="iconfont icon">&#xe60f;</i>
            <input className="ipt" type="text" placeholder="请输入用户名" ref={username} onBlur={() => {checkUsername()}} />
          </div>
          <div className="card-operation-password">
            <i className="iconfont icon">&#xe608;</i>
            <input className="ipt" type="password" placeholder="请输入密码" ref={password} />
          </div>
          <div className="card-operation-password">
            <i className="iconfont icon">&#xe608;</i>
            <input className="ipt" type="password" placeholder="请重复你的密码" onBlur={() => {comparePass()}} ref={repPassword} />
          </div>
          { showTip &&
            <div className="card-operation-tips">
              *两次输入的密码不同
            </div>
          }
          <div className="card-operation-submit">
            <button type="submit" className="card-operation-submit-btn" onClick={() => {userReg()}}>注册</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reg