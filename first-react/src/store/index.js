import { createStore,applyMiddleware } from 'redux'
// redux thunk  = async func on  middleware
import thunk from 'redux-thunk'
import logger from './middlewares/logger'
import reducer from './reducers/index'

const store = createStore(reducer, applyMiddleware(logger, thunk) )

export default store