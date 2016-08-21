import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import Auth from '../auth/reducers'
import PurchaseRequisition from '../purchase_requisition/reducers'
import Referencedata from '../reference_data/reducers'
import LineItem from '../purchase_requisition/line_item/reducers'

const rootReducer = combineReducers({
  Auth,
  PurchaseRequisition,
  Referencedata,
  LineItem,
  resources: formReducer,
  routing: routerReducer
})
export default rootReducer
