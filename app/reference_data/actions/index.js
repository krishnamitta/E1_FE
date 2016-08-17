import axios from 'axios'
import config from 'config' // eslint-disable-line
import objectToQueryString from '../../utils/object_to_query_string'
import { REFERENCEDATA } from '../../../config/constants'

const buildURI = (resourceURI, queryParameters = {}) => {
  let URI = config.services.endpoint + resourceURI
  if (Object.keys(queryParameters).length > 0) {
    URI += `&${objectToQueryString(queryParameters)}`
  }
  return URI
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
  const url = buildURI(config.services.references.vendorList)
  return dispatchAction(url, REFERENCEDATA.LOAD_VENDORS)
}

export const fetchUOMList = () => {
  const url = buildURI(config.services.references.UOMList)
  return dispatchAction(url, REFERENCEDATA.LOAD_UOMS)
}

export const fetchMaterialList = (plantId) => {
  const queryParameters = { plant: `'${plantId}'` }
  const url = buildURI(config.services.references.materialList, queryParameters)
  return dispatchAction(url, REFERENCEDATA.LOAD_MATERIALS)
}

export const fetchPlantList = () => {
  const url = buildURI(config.services.references.plantList)
  return dispatchAction(url, REFERENCEDATA.LOAD_PLANTS)
}

export const fetchBusinessUnitList = () => {
  const url = buildURI(config.services.references.businessUnitList)
  return dispatchAction(url, REFERENCEDATA.LOAD_BUSINESS_UNITS)
}

export const fetchCountryList = () => {
  const url = buildURI(config.services.references.countries)
  return dispatchAction(url, REFERENCEDATA.LOAD_COUNTRIES)
}
