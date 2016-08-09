import { PR } from '../../../config/constants'

export const addLineItem = () => {
  return (dispatch) => {
    dispatch({ type: PR.ADD_PR_LINE_ITEM })
  }
}
