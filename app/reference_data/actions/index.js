import axios from 'axios'
import config from 'config' // eslint-disable-line
import { REFERENCEDATA } from '../../../config/constants'

export const fetchVendorList = () => {
  const url = config.services.endpoint + config.services.references.getVendorList
  return (dispatch) => {
    axios.get(url).then((response) => {
      dispatch({ type: REFERENCEDATA.LOAD_VENDORS, data: response.data })
    }).catch((error) => {
      dispatch({ type: REFERENCEDATA.LOAD_VENDORS, data: [] })
    })
  }
}
