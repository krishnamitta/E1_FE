import { PR } from '../../../../config/constants'

export const fetchShipToAddress = (plant) => {
  return (dispatch) => {
    dispatch({ type: PR.LINE_ITEM.SHIP_TO_ADDRESS, data: plant })
  }
}

export const loadMaterialDetails = (material) => {
  return (dispatch) => {
    dispatch({ type: PR.LINE_ITEM.LOAD_MATERIAL_DETAILS, data: material })
  }
}
