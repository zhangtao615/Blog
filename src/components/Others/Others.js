import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { message } from 'antd'
import avatar from '../../static/avatar.png'
import defaultAvatar from '../../static/default_avatar.png'
import store from '../../store'
import './style.scss'
import { logoutAction } from '../../store/actionCreators'

class Others extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }
  componentDidMount() {
    store.subscribe(this.handleStoreChange)
  }
  render() {
    const { isLogin, username } = this.state
    return (
      <div className="others">
        { username === 'test' &&
          <Link to="/write">
            <div className="write-article">
              <div className="write-article-btn">写文章</div>
            </div>
          </Link>
        }
        <div className="visitor">
          <div className="visitor-avatar">
            <img src={
              isLogin ? avatar : defaultAvatar
            } alt=""/>
          </div>
          <div className="visitor-name">{ isLogin ? username : '未登录'}</div>
          { !isLogin &&
            <div className="visitor-operation">
              <Link to="/login">
                <div className="login visitor-item">登录</div>
              </Link>
              <Link to='/reg'>
                <div className="reg visitor-item">注册</div>
              </Link>
          </div>
          }
          { isLogin &&
            <div className="visitor-logout visitor-item" onClick={this.handleLogout}>退出登录</div>
          }
        </div>
        { /**<div className="back-to-top"><i className="iconfont">&#xe87b;</i></div>*/ }
      </div>
    )
  }
  handleStoreChange() {
    this.setState(store.getState())
  }
  handleLogout() {
    store.dispatch(logoutAction())
    message.success('退出登录', 3)
  }
}
export default Others