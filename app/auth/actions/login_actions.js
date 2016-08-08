import axios from 'axios'
import { browserHistory } from 'react-router'
import { AUTH } from '../../../config/constants'

export const logout = () => {
  return (dispatch) => {
    document.cookie = 'access_token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    dispatch({ type: AUTH.LOGOUT_SUCCESS })
    browserHistory.push('/')
  }
}

export const loginRequest = (credentials) => {
  return ((dispatch) => {
        axios.post('/login', credentials, {
          withCredentials: true
        }).then((response) => {
          if (response.status == 200) {
            dispatch({ type: AUTH.LOGIN_SUCCESS, data: response.data })
          } else {
            dispatch({ type: AUTH.LOGIN_FAILURE, data: response })
          }
        }).catch((error) => {
          console.log('login error..', error)
          dispatch({ type: AUTH.LOGIN_FAILURE, data: error })
        })
    }
  )
}
