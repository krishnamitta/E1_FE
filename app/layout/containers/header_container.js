import React, { Component } from 'react'
import HeaderComponent from '../../components/layout/header_component'
import { logout } from '../../actions/login_actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class HeaderContainer extends Component {
  render() {
    return (
      <HeaderComponent { ...this.props } />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.Auth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logout
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
