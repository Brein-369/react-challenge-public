import {combineReducers} from 'redux'
import favorites from './favorites'
import heroes from './heroes'


export default combineReducers({
    favorites,
    heroes
})