import axios from 'axios'
import config from 'config' // eslint-disable-line
import { REFERENCEDATA } from '../../../config/constants'

const buildURI = (resourceURI) => {
  return config.services.endpoint + resourceURI
}

const dispatchAction = (url, actionType) => {
  return (dispatch) => {
    axios.get(url).then((response) => {
      dispatch({ type: actionType, data: response.data.d.results })
    }).catch((error) => {
      dispatch({ type: actionType, data: [] })
    })
  }
}

export const fetchVendorList = () => {
  const url = buildURI(config.services.references.getVendorList)
  return dispatchAction(url, REFERENCEDATA.LOAD_VENDORS)
}

export const fetchPlantList = () => {
  const url = buildURI(config.services.references.getPlantList)
  return dispatchAction(url, REFERENCEDATA.LOAD_PLANTS)
}

export const fetchCountryList = () => {
  const url = buildURI(config.services.references.getCountries)
  return dispatchAction(url, REFERENCEDATA.LOAD_COUNTRIES)
}
