import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import Auth from '../auth/reducers'
import PurchaseRequisition from '../purchase_requisition/reducers'
import Referencedata from '../reference_data/reducers'
import LineItem from '../lineItem/reducers'

const rootReducer = combineReducers({
  Auth,
  Referencedata,
  form: formReducer.plugin({
    LineItem,
    PurchaseRequisition
  }),
  routing: routerReducer
})
export default rootReducer
