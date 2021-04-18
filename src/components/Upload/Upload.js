import React, { useRef, useState, Fragment } from 'react'
import { message } from 'antd'
import OSS from 'ali-oss'
import './style.scss'

const Upload = (props) => {
  const { getUploadImg } = props
  let file = useRef(null)
  const [url, setUrl] = useState('')
  let client = new OSS({
    region: 'oss-cn-beijing',
    accessKeyId: 'LTAI5tALvdNoXMeFm1gDnYRP',
    accessKeySecret: '8qgDWsEjZvVrbBC3zXvG23oXNML9ge',
    bucket: '7years-img'
  });
  async function put (file) {
    try {
      let res = await client.put(`${file.name}`, file);
      setUrl(res.url)
      message.success('图片上传成功')
      getUploadImg(res.url)
    } catch (e) {
      console.log(e)
    }
  }
  const uploadImg = (file) => {
    const data = file.current.files[0]
    put(data)
  }
  const deleteBanner = () => {
    setUrl('')
    getUploadImg('')
  }
  return (
    <Fragment>
    { !url && 
      <div className="file">
        上传封面
        <input type="file" ref={file} onChange={() => {uploadImg(file)}}/>
      </div> 
    }
    { url &&
      <div className="blog-banner">
        <div className="change-banner" onClick={() => {deleteBanner()}}>删除</div>
        <img src={url} alt="" />
      </div>
    }
    </Fragment>
  )
}
export default Upload