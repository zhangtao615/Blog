import React, { useState, useRef, useEffect } from 'react'
import { Comment, List } from 'antd'
import store from '../../store'
import './style.scss'
import axios from '_axios@0.21.1@axios'

const Comments = ({ id }) => {
  let comment = useRef('')
  const [btn, setBtn] = useState(true)
  const data = store.getState()
  const CommentsData = [
    {
      actions: [<span key="delete-commit" onClick={() => {deleteCommit()}}>删除评论</span>],
      author: 'Han Solo',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content: (
        <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure), to help people create their product prototypes beautifully and
          efficiently.
        </p>
      )
    },
    {
      actions: [<span key="delete-commit">删除评论</span>],
      author: 'Han Solo',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content: (
        <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure), to help people create their product prototypes beautifully and
          efficiently.
        </p>
      ),
    },
  ];
  // 评论处理
  const getInputValue = () => {
    let commentVal  = comment.current.value
    if (commentVal) {
      setBtn(false)
    } else {
      setBtn(true)
    }
  }
  // 发送评论
  const sendCommit = () => {
    axios({
      url:'http://localhost:8080/api/user/handleCommit',
      method: 'POST',
      data: {
        content: comment.current.value,
        author: data.username,
        blogId: id,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
      }
    }).then(res => {
      console.log('success')
    })
  }
  // 删除评论
  const deleteCommit = () => {
    console.log('delete')
  }
  return (
    <div className="comment-wrapper">
      <div className="input-comment">
        <input 
          type="text" 
          ref={comment} 
          placeholder="输入评论..." 
          onChange={() => {getInputValue()}}
        />
        <button  
          className="input-comment-btn"
          onClick={() => {sendCommit()}}
          disabled={btn}
        >
          发布
        </button>
      </div>
      <div className="comment-list">
        <List
          header={`${CommentsData.length} replies`}
          itemLayout="horizontal"
          dataSource={CommentsData}
          renderItem={item => (
            <li>
              <Comment
                actions={item.actions}
                author={item.author}
                avatar={item.avatar}
                content={item.content}
              />
            </li>
          )}
        />
      </div>
    </div>
  )
}

export default Comments