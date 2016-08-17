import { REFERENCEDATA } from '../../../config/constants'

const Referencedata = (state = {}, action) => {
  switch (action.type) {
    case REFERENCEDATA.LOAD_VENDORS:
      return Object.assign({}, state, { vendors: action.data })
    case REFERENCEDATA.LOAD_COUNTRIES:
      return Object.assign({}, state, { countries: action.data })
    case REFERENCEDATA.LOAD_PLANTS:
      return Object.assign({}, state, { plants: action.data })
    case REFERENCEDATA.LOAD_CURRENCIES:
      return Object.assign({}, state, { currencies: action.data })
    case REFERENCEDATA.LOAD_MATERIALS:
      return Object.assign({}, state, { materials: action.data })
    case REFERENCEDATA.LOAD_UOMS:
      return Object.assign({}, state, { uoms: action.data })
    case REFERENCEDATA.LOAD_BUSINESS_UNITS:
      return Object.assign({}, state, { business_units: action.data })
    default:
      return state
  }
}
export default Referencedata
