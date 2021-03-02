import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'
import E from 'wangeditor'
import useKeypress from '../../hooks/useKeyPress'
import './style.scss'

let editor = null
const WriteArticle = () => {
  const [showCard, setShowCard] = useState(false)
  const [tagList, setTagList] = useState([])
  const [inputActive, setInputActive] = useState(false)
  const [selectedTag, setSelectedTag] = useState('')
  const [content, setContent] = useState('')
  const enterPressed = useKeypress(13);
  let articleTitle = useRef('') // 文章标题
  let tag = useRef('') // 文章标签
  let banner = useRef('') // 文章封面
  let desc = useRef('') // 文章描述
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const createTag = (tag) => {
    axios({
      method: 'POST',
      url: 'http://localhost:8080/api/tag/createTag',
      data: {
        tag: tag
      }
    }).then (() => {
      getTagList()
      setSelectedTag(tag)
    })
  }
  // 选择标签
  const selectTag = (id) => {
    tagList.map(item => {
      if (item.id === id) {
        tag.current.value = item.tag
        setSelectedTag(item.tag)
      }
    })
  }
  const saveContent = () => {
    let time = new Date()
    console.log(time.toUTCString())
  }
  useEffect (() => {
    if (enterPressed && inputActive) {
      if (tag.current.value !== '') {
        createTag(tag.current.value)
      }
    }
  }, [createTag, enterPressed, inputActive])
  useEffect(() => {
    editor = new E("#wang-editor")
    editor.config.onchange = (newHtml) => {
      setContent(newHtml)
    }
    editor.create()
    return () => {
      editor.destroy()
    }
  }, [])
  return (
    <div className="write-wrapper">
      <header className="blog">
        <input 
          className="input-title" 
          type="text"
          placeholder="请输入文章标题"
          ref={articleTitle}
        ></input>
      </header>
      <div className="editor">
        <div id='wang-editor'></div>
      </div>
      <footer className="addition">
        <div className="tag">
          <span className="tag-title">添加标签</span>
          <div className="tag-select">
            <input 
              className="tag-select-input"
              type="text"
              placeholder="选择或创建标签"
              onFocus={() => {setShowCard(true); getTagList(); setInputActive(true)}}
              onBlur={() => {setShowCard(false); setInputActive(false)}}
              ref={tag}
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
            ref={banner}
          />
        </div>
        <div className="desc">
          <span className="desc-title">文章描述</span>
          <input 
            type="text"
            className="desc-input"
            placeholder="请输入文章描述"
            ref={desc}
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