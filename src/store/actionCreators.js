import { INIT_ARTICLE_LIST, IS_LOGIN, LOGOUT, LOGIN_SUCCESS } from './actionTypes'
import axios from 'axios'

export const initArticleListAction = (data) => ({
  type: INIT_ARTICLE_LIST,
  data
})

export const getArticleListAction = () => {
  return (dispatch) => {
    axios.get('http://localhost:8080/api/blog/getBlogList').then(res => {
      const data = res.data.data
      dispatch(initArticleListAction(data))
    })
  }
}

export const searchArticleAction = (value) => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: "http://localhost:8080/api/blog/getBlogList",
      params: {
        keyword: value
      }
    }).then(res => {
      const data = res.data.data
      dispatch(initArticleListAction(data))
    })
  }
}
export const isLoginAction = (data) => ({
  type: IS_LOGIN,
  data
})

export const loginSuccessAction = (data) => ({
  type: LOGIN_SUCCESS,
  data
})

export const logoutAction = () => ({
  type: LOGOUT
})