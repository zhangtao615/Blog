import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './style.scss'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'

const WriteArticle = () => {
  let editorState = BraftEditor.createEditorState(null)
  const [showCard, setShowCard] = useState(false)
  const createTag = () => {
    axios({
      method: 'POST',
      url: 'http://localhost:8080/api/tag/createTag',
      data: {
        tag: 'test'
      }
    }).then (res => {
      console.log(res)
    })
  }
  useEffect (() => {
    
  }, [editorState])
  return (
    <div className="write-wrapper">
      <header className="blog">
        <input 
          className="input-title" 
          type="text"
          placeholder="请输入文章标题"
        ></input>
      </header>
      <div className="editor">
        <BraftEditor
          value={editorState}
        />
      </div>
      <footer className="addition">
        <div className="tag">
          <span className="tag-title">添加标签</span>
          <div className="tag-select">
            <input 
              className="tag-select-input"
              type="text"
              placeholder="选择或创建标签"
              onFocus={() => {setShowCard(true)}}
              onBlur={() => {setShowCard(false)}}
             />
            <div className={showCard ? "tag-select-card show" : "tag-select-card"}>
              
            </div>
          </div>
        </div>
        <div className="publish">
          <button 
            className="publish-btn"
            onClick={() => {createTag()}}
          >发布</button>
        </div>
      </footer>
      
    </div>
  )
};

export default WriteArticle;