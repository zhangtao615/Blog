import React, { useState, useEffect } from 'react';
import axios from 'axios'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import './style.scss'

const WriteArticle = () => {
  const [showCard, setShowCard] = useState(false)
  const [tagList, setTagList] = useState([])
  const [selectedTag, setSelectedTag] = useState('')
  const [content, setContent] = useState('')
  let editorVal = ''
  // 获取标签列表
  const getTagList = () => {
    axios({
      method: 'get',
      url: 'http://localhost:8080/api/tag/getTagList',
    }).then (res => {
      setTagList(res.data.data)
    })
  }
  // 创建标签
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
  // 选择标签
  const selectTag = (id) => {
    setSelectedTag(id)
  }
  const saveContent = () => {
    
  }
  useEffect (() => {
    
  }, [])
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
      <SimpleMDE
        id="editor"
        options={{
          autofocus: true,
          spellChecker: false
        }}
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
              onFocus={() => {setShowCard(true); getTagList()}}
              onBlur={() => {setShowCard(false)}}
             />
            <div className={showCard ? "tag-select-card show" : "tag-select-card"}>
              { tagList &&
                tagList.map(item => {
                  return (
                    <div 
                      className="tag-select-card-item"
                      key={item.id}
                      onClick={() => {selectTag(item.id)}}
                    >
                      { item.tag }
                    </div>
                  )
                })
              }
              { !tagList &&
                <div className='tag-select-card-none'>
                  暂无标签
                </div>
              }
            </div>
          </div>
        </div>
        <div className="banner">
          <span className="banner-title">图片封面</span>
          <input 
            type="text"
            className="banner-input"
            placeholder="请输入图片链接"
          />
        </div>
        <div className="publish">
          <button 
            className="publish-btn"
            onClick={() => {saveContent()}}
          >发布</button>
        </div>
      </footer>
    </div>
  )
};

export default WriteArticle;