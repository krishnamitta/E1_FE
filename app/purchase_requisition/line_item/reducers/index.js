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

const LineItem = (state = {}, action) => {
  switch (action.type) {
    case PR.LINE_ITEM.SHIP_TO_ADDRESS:
      return Object.assign({}, state, { values: PlantAddress(state.values, action.data) })
    case PR.LINE_ITEM.LOAD_MATERIAL_DETAILS:
      return Object.assign({}, state, { material: action.data })
    default:
      return state
  }
}
export default LineItem
