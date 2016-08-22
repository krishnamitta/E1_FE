import { PR } from '../../../config/constants'

export const addLineItemAction = (lineItem) => {
  return (dispatch) => {
    dispatch({ type: PR.ADD_PR_LINE_ITEM, data: lineItem })
  }
}
