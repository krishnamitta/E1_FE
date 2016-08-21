import { PR } from '../../../config/constants'
import initialState from '../initial_state'

// React's update() immutability helper.
import update from 'react/lib/update'

const PurchaseRequisition = (state = initialState, action) => {
  switch (action.type) {
    case PR.ADD_PURCHASE_REQUISITON:
      return state
    case PR.ADD_PR_LINE_ITEM:
      return update(state, { line_items: { $push: [action.data] } })
    default:
      return state
  }
}
export default PurchaseRequisition
