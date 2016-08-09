import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import Auth from '../auth/reducers'
import PurchaseRequisition from '../purchase_requisition/reducers'

const rootReducer = combineReducers({
  Auth,
  PurchaseRequisition,
  routing: routerReducer
})
export default rootReducer
