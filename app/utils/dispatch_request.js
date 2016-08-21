import config from 'config' // eslint-disable-line

import axios from 'axios'
import objectToQueryString from './object_to_query_string'

export const buildURI = (resourceURI, queryParameters = {}) => {
  let URI = config.services.endpoint + resourceURI
  if (Object.keys(queryParameters).length > 0) {
    URI += `&${objectToQueryString(queryParameters)}`
  }
  return URI
}

export const dispatchAction = (url, actionType) => {
  console.log('actionType..', actionType)
  return (dispatch) => {
    axios.get(url).then((response) => {
      dispatch({ type: actionType, data: response.data.d.results })
    }).catch((error) => {
      dispatch({ type: actionType, data: [] })
    })
  }
}
