import { REFERENCEDATA } from '../../../config/constants'

const Referencedata = (state = {}, action) => {
  switch (action.type) {
    case REFERENCEDATA.LOAD_VENDORS:
      return Object.assign({}, state, { vendors: action.data })
    case REFERENCEDATA.LOAD_MATERIALS:
      return Object.assign({}, state, { materials: action.data })
    case REFERENCEDATA.FETCH_ALL:
      return Object.assign({}, state, action.data)
    default:
      return state
  }
}
export default Referencedata
