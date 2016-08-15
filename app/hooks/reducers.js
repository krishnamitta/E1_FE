import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import Auth from '../auth/reducers'
import PurchaseRequisition from '../purchase_requisition/reducers'
import Referencedata from '../reference_data/reducers'

const rootReducer = combineReducers({
  Auth,
  PurchaseRequisition,
  Referencedata,
  routing: routerReducer
})
export default rootReducer
