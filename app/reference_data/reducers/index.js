import { REFERENCEDATA } from '../../../config/constants'

const Referencedata = (state = {}, action) => {
  switch (action.type) {
    case REFERENCEDATA.LOAD_VENDORS:
      return {}
    default:
      return state
  }
}
export default Referencedata
