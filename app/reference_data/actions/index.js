import axios from 'axios'
import config from 'config' // eslint-disable-line
import { buildURI, dispatchAction } from '../../utils/dispatch_request'
import { REFERENCEDATA } from '../../../config/constants'

const defaultReferences = () => {
  const list = [
    config.services.references.vendorList, config.services.references.UOMList,
    config.services.references.plantList, config.services.references.businessUnitList,
    config.services.references.currencyList, config.services.references.materialGroupList
  ]
  const services = list.map((service, index) => { return axios.get(buildURI(service)) })
  return services
}

export const loadReferenceData = () => {
  return (dispatch) => {
    axios.all(defaultReferences()).then(
      axios.spread((vendorList, UOMList, plantList, businessUnitList, currencyList, materialGroupList) => {
        dispatch({ type: REFERENCEDATA.FETCH_ALL, data: {
          vendors: vendorList.data.d.results,
          uoms: UOMList.data.d.results,
          plants: plantList.data.d.results,
          business_units: businessUnitList.data.d.results,
          currencies: currencyList.data.d.results,
          material_groups: materialGroupList.data.d.results
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
