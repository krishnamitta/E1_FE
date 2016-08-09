import { PR } from '../../../config/constants'
import initialState from '../initial_state'

// React's update() immutability helper.
import update from 'react/lib/update'

const LineItem = (state = {}, action) => {
  const data = action.data
  switch (action.type) {
    case PR.ADD_PR_LINE_ITEM:
      return {
        vendor: data.vendor, business_unit: data.business_unit,
        plant: data.plant, currency: data.currency
      }
    default:
      state
  }
}

const PurchaseRequisition = (state = initialState, action) => {
  switch (action.type) {
    case PR.ADD_PURCHASE_REQUISITON:
      return state
    case PR.ADD_PR_LINE_ITEM:
      return update(state, { line_items: { $push: [LineItem(undefined, action)] } })
    default:
      return state
  }
}
export default PurchaseRequisition
