import { PR } from '../../../config/constants'

export const addLineItem = () => {
  return (dispatch) => {
    dispatch({ type: PR.ADD_PR_LINE_ITEM, data: { vendor: 'Vendor 1', business_unit: 'G1 P2P', currency: 'USD' } })
  }
}
