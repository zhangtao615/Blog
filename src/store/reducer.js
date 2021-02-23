/* eslint-disable import/no-anonymous-default-export */
import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
const defaultState =fromJS({
  article_list: []
})

export default function (state = defaultState, action) { 
  switch(action.type) {
    case  actionTypes.ARTICLE_GETARTICLE:
      return state.set('article_list', action.data)
    default:
      return state
  }  
}