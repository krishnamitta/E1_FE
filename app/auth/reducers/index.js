import { AUTH } from '../../../config/constants'

const Auth = (state = {}, action) => {
  const currentState = (localStorage.getItem('profile') && JSON.parse(localStorage.getItem('profile'))) || state
  let newState
  switch (action.type) {
    case AUTH.LOGIN_SUCCESS:
      newState = Object.assign({}, currentState, { isAuthenticated: true, username: action.data.entity_name })
      break
    case AUTH.LOGIN_FAILURE:
      newState = Object.assign({}, currentState, { isAuthenticated: false })
      break
    case AUTH.CLEAR_SESSION:
      newState = Object.assign({}, currentState, { isAuthenticated: false, username: null })
      break
    case AUTH.LOGOUT_SUCCESS:
      newState = Object.assign({}, currentState, { isAuthenticated: false, username: null })
      break
    default:
      newState = currentState
  }
  localStorage.setItem('profile', JSON.stringify(newState))
  return newState
}
export default Auth
