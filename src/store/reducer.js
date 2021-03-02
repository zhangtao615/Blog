/* eslint-disable import/no-anonymous-default-export */
import { INIT_ARTICLE_LIST, SEARCH_ARTICLE, LOGIN_SUCCESS, LOGOUT } from './actionTypes'

const defaultState = {
  article_list: [],
  isLogin: false,
  username: ''
}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch(action.type) {
    case INIT_ARTICLE_LIST: 
      newState.article_list = action.data
      return newState
    case SEARCH_ARTICLE: 
      newState.article_list = action.data
      return newState
    case LOGIN_SUCCESS:
      newState.isLogin = true
      newState.username = action.data.message
      return newState
    case LOGOUT:
      newState.isLogin = false
      newState.username = ''
      return newState
    default:
      return state
  }
}