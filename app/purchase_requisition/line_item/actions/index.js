import { PR } from '../../../../config/constants'
import config from 'config' // eslint-disable-line
import { buildURI, dispatchAction } from '../../../utils/dispatch_request'

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

export const loadVendorAddress = (vendorId) => {
  const queryParameters = { vendor: `'${vendorId}'` }
  const url = buildURI(config.services.vendor.address, queryParameters)
  return dispatchAction(url, PR.LOAD_VENDOR_ADDRESS)
}

export const calculateTotalPriceForLineItem = (price, quantity) => {
  return (dispatch) => {
    dispatch({ type: PR.LINE_ITEM.CALCULATE_TOTAL_PRICE_FOR_LINEITEM, data: (price * quantity) })
  }
}
