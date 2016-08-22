import { PR } from '../../../../config/constants'

const PlantAddress = (values, plant) => {
  console.log('ship to address value..', values)
  console.log('plants ..', plant)
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

const addMaterialDtails = (materialValue, materialData) => {
  const details = { description: materialData.materialdesc, uom: materialData.uom, price: materialData.unitprice }
  return Object.assign({}, materialValue, details)
}

const materialDetails = (values, materialData) => {
  return Object.assign({}, values, { material: addMaterialDtails(values.material, materialData) })
}

const LineItem = (state = {}, action) => {
  switch (action.type) {
    case PR.LINE_ITEM.SHIP_TO_ADDRESS:
      return Object.assign({}, state, { values: PlantAddress(state.values, action.data) })
    case PR.LINE_ITEM.LOAD_MATERIAL_DETAILS:
      return Object.assign({}, state, { values: materialDetails(state.values, action.data) })
    default:
      return state
  }
}
export default LineItem
