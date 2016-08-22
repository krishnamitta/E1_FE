import { PR } from '../../../../config/constants'

const PlantAddress = (plant) => {
  return {
    street: plant.street,
    postalCode: plant.postalcode,
    city: plant.city,
    country: plant.country,
    state: plant.region
  }
}

const LineItem = (state = {}, action) => {
  switch (action.type) {
    case PR.LINE_ITEM.SHIP_TO_ADDRESS:
      console.log('state...', state)
      return Object.assign({}, state, { shipToAddress: PlantAddress(action.data) })
    case PR.LINE_ITEM.LOAD_MATERIAL_DETAILS:
      return Object.assign({}, state, { material: action.data })
    default:
      return state
  }
}
export default LineItem
