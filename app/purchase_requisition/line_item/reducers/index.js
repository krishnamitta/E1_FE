import { PR } from '../../../../config/constants'

const buildAddress = (values, object, key) => {
  const addressAttrs = {
    street: object.street,
    postalCode: object.postalcode,
    city: object.city,
    country: object.country,
    state: object.region
  }
  const address = {}
  address[key] = addressAttrs
  return Object.assign({}, values, address)
}

const addMaterialDetails = (materialValue, materialData) => {
  const details = { description: materialData.materialdesc, uom: materialData.uom, price: materialData.unitprice }
  return Object.assign({}, materialValue, details)
}

const copyFormValues = (values, materialData) => {
  return Object.assign({}, values, { material: addMaterialDetails(values.material, materialData) })
}

const calculateTotalPrice = (values, totalPrice) => {
  return Object.assign({}, values, { totalPrice })
}

const LineItem = (state = {}, action) => {
  switch (action.type) {
    case PR.LINE_ITEM.SHIP_TO_ADDRESS:
      return Object.assign({}, state, { values: buildAddress(state.values, action.data, 'shipToAddress') })
    case PR.LINE_ITEM.LOAD_MATERIAL_DETAILS:
      return Object.assign({}, state, { values: copyFormValues(state.values, action.data) })
    case PR.LINE_ITEM.CALCULATE_TOTAL_PRICE_FOR_LINEITEM:
      return Object.assign({}, state, { values: calculateTotalPrice(state.values, action.data) })
    case PR.LOAD_VENDOR_ADDRESS:
      return Object.assign({}, state, { values: buildAddress(state.values, action.data, 'vendorAddress') })
    default:
      return state
  }
}
export default LineItem
