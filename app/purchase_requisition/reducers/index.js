import { PR } from '../../../config/constants'
import initialState from '../initial_state'

const PurchaseRequisition = (state = initialState, action) => {
  switch (action.type) {
    case PR.ADD_PURCHASE_REQUISITON:
      return state
    case PR.ADD_PR_LINE_ITEM:
      return Object.assign({}, state, {})
    default:
      return state
  }
}
export default PurchaseRequisition
