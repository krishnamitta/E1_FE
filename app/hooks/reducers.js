import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import Auth from '../auth/reducers'

const rootReducer = combineReducers({
  Auth,
  routing: routerReducer
})
export default rootReducer
