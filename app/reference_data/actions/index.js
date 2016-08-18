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

const defaultReferences = () => {
  const list = [
    config.services.references.vendorList, config.services.references.UOMList,
    config.services.references.plantList, config.services.references.businessUnitList,
    config.services.references.currencyList
  ]
  const services = list.map((service, index) => { return axios.get(buildURI(service)) })
  return services
}

export const loadReferenceData = () => {
  return (dispatch) => {
    axios.all(defaultReferences()).then(
      axios.spread((vendorList, UOMList, plantList, businessUnitList, currencyList) => {
        dispatch({ type: REFERENCEDATA.FETCH_ALL, data: {
          vendors: vendorList.data.d.results,
          uoms: UOMList.data.d.results,
          plants: plantList.data.d.results,
          business_units: businessUnitList.data.d.results,
          currencies: currencyList.data.d.results
         } })
      })
    )
  }
}

export const fetchMaterialList = (plantId) => {
  const queryParameters = { plant: `'${plantId}'` }
  const url = buildURI(config.services.references.materialList, queryParameters)
  return dispatchAction(url, REFERENCEDATA.LOAD_MATERIALS)
}
