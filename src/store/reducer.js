/* eslint-disable import/no-anonymous-default-export */
import { GET_ARTICLE_LIST, INIT_ARTICLE_LIST, SEARCH_ARTICLE } from './actionTypes'

const defaultState = {
  article_list: []
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
    default:
      return state
  }
}