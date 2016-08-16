import axios from 'axios'
import config from 'config' // eslint-disable-line
import { REFERENCEDATA } from '../../../config/constants'

// const headers = {
//   headers: {
//     Authorization: 'Basic VEVTVF9XRUJTRVJWOkNvcGFydEA5ODc'
//   }
// }

const buildURI = (resourceURI) => {
  return config.services.endpoint + resourceURI
}

export const fetchVendorList = () => {
  const url = buildURI(config.services.references.getVendorList)
  return (dispatch) => {
    axios.get(url).then((response) => {
      dispatch({ type: REFERENCEDATA.LOAD_VENDORS, data: response.data })
    }).catch((error) => {
      dispatch({ type: REFERENCEDATA.LOAD_VENDORS, data: [] })
    })
  }
}

export const fetchCountryList = () => {
  const url = buildURI(config.services.references.getCountries)
  return (dispatch) => {
    axios.get(url).then((response) => {
      dispatch({ type: REFERENCEDATA.LOAD_COUNTRIES, data: response.data.d.results })
    }).catch((error) => {
      dispatch({ type: REFERENCEDATA.LOAD_COUNTRIES, data: [] })
    })
  }
}
