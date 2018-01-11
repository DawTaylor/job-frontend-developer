import createStore from 'redux-zero'
import { applyMiddleware } from 'redux-zero/middleware'
import { connect } from 'redux-zero/devtools'

const initialState = {
  videos: [],
  artist: {}
}

const middlewares = connect ? applyMiddleware(connect(initialState)) : []

export const Store = createStore(initialState, middlewares)
