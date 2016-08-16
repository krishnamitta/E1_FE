import { REFERENCEDATA } from '../../../config/constants'

const Referencedata = (state = {}, action) => {
  switch (action.type) {
    case REFERENCEDATA.LOAD_VENDORS:
      return Object.assign({}, state, { vendors: action.data })
    case REFERENCEDATA.LOAD_COUNTRIES:
      return Object.assign({}, state, { countries: action.data })
    case REFERENCEDATA.LOAD_PLANTS:
      return Object.assign({}, state, { plants: action.data })
    default:
      return state
  }
}
export default Referencedata
