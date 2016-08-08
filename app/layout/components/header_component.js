import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import AppBar from 'material-ui/AppBar'
import styles from '../styles'
import ProfileMenu from './profile_menu'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

const Style = {
  labelStyle: { color: 'rgb(256, 256, 256)' },
  underlineStyle: { visibility: 'hidden' }
}

export default class HeaderComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { value: 3 }
    this.redirect = this.redirect.bind(this)
  }

  redirect(path) {
    if (path != null || path != undefined){
      this.context.router.push(path)
    }
  }

  handleChange(event, index, value) {
    this.setState({ value })
  }

  renderNavMenu() {
    return (
      <DropDownMenu
        value={ this.state.value }
        onChange={ this.handleChange.bind(this) }
        labelStyle={ Style.labelStyle }
        underlineStyle={ Style.underlineStyle }>
        <MenuItem value={ 1 } primaryText="Seller Setup" />
        <MenuItem value={ 2 } primaryText="Vendors" onClick={ () => this.redirect('vendors') } />
        <MenuItem value={ 3 } primaryText="Contract Setup" onClick={ () => this.redirect('/') } />
      </DropDownMenu>
    )
  }

  renderProfileMenu() {
    return (
      <ProfileMenu { ...this.props } />
    )
  }

  render() {
    const user = this.props.user
    return (
      <header className="header">
        <AppBar style={ styles.appbar } showMenuIconButton={ false } titleStyle={ { flex: 'none' } }>
          <div className="col-2-12">
            <Link title="Copart" to="/">
              <img src="/images/logo.png" alt="Copart" style={ styles.logo } />
            </Link>
          </div>
          <div className="col-10-12" style={ { textAlign: 'right' } }>
            { user && user.isAuthenticated ? this.renderNavMenu() : '' }
          </div>
          <div className="col-2-12" style={ { textAlign: 'right' } }>
            { user && user.isAuthenticated ? this.renderProfileMenu() : '' }
          </div>
        </AppBar>
      </header>
    )
  }
}

HeaderComponent.propTypes = {
  value: PropTypes.number,
  user: PropTypes.object,
}

HeaderComponent.contextTypes = {
  router: React.PropTypes.object.isRequired
}
