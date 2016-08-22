import { PR } from '../../../../config/constants'

const PlantAddress = (values, plant) => {
  const address = {
    shipToAddress: {
      street: plant.street,
      postalCode: plant.postalcode,
      city: plant.city,
      country: plant.country,
      state: plant.region
    }
  }
  return Object.assign({}, values, address)
}

const addMaterialDetails = (materialValue, materialData) => {
  const details = { description: materialData.materialdesc, uom: materialData.uom, price: materialData.unitprice }
  return Object.assign({}, materialValue, details)
}

const copyFormValues = (values, materialData) => {
  return Object.assign({}, values, { material: addMaterialDetails(values.material, materialData) })
}

const LineItem = (state = {}, action) => {
  switch (action.type) {
    case PR.LINE_ITEM.SHIP_TO_ADDRESS:
      return Object.assign({}, state, { values: PlantAddress(state.values, action.data) })
    case PR.LINE_ITEM.LOAD_MATERIAL_DETAILS:
      return Object.assign({}, state, { values: copyFormValues(state.values, action.data) })
    default:
      return state
  }
}
export default LineItem
