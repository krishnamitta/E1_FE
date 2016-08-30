import React, { Component, PropTypes } from 'react'
import Popover from 'material-ui/Popover'
import LocationIcon from 'material-ui/svg-icons/communication/location-on'
import IconButton from 'material-ui/IconButton'

const color = 'rgb(7, 52, 116)'

const section = {
  innerHeader: {
    padding: '10px 5px',
    margin: 0,
    color,
    fontSize: 13
  },
  innerFooter: {
    padding: 5,
    fontSize: 13,
    color
  }
}

export default class PopoverField extends Component {

  constructor(props) {
    super(props);
    this.state = { open: false,
    disabled: false }
  }

  handleTouchTap(event) {
    event.preventDefault();
    this.setState({ open: true, anchorEl: event.currentTarget })
  }

  handleRequestClose() {
    this.setState({ open: false })
  }

  isAddressPresent(address) {
    address ? this.setState({ disabled: false }) : this.setState({ disabled: true })
  }

  render() {
    const addressString = []
    addressString.push(this.props.address.street)
    addressString.push(this.props.address.city)
    addressString.push(this.props.address.state)
    return (
      <div>
        <IconButton tooltip={ this.props.tooltip }
          disabled={ this.props.disabled }
          onTouchTap={ (event) => this.handleTouchTap(event) }
          style={ { position: 'relative', top: 22, left: '-10px', paddingLeft: 0 } }>
          <LocationIcon color="#8B1103" />
        </IconButton>
        <Popover
          open={ this.state.open }
          anchorEl={ this.state.anchorEl }
          anchorOrigin={ { horizontal: 'left', vertical: 'bottom' } }
          targetOrigin={ { horizontal: 'left', vertical: 'top' } }
          onRequestClose={ (event) => this.handleRequestClose() }>
          <header style={ section.innerHeader }>
            <div style={ { fontSize: 13, margin: 0 } }>{ this.props.tooltip.toUpperCase() }</div>
          </header>
          <div>
            <img src="/images/mapimage.png" alt="google map" width="300px" height="150px" />
          </div>
          <footer style={ section.innerFooter }>
            <div>{ addressString.join(', ') }</div>
            <div>{ `${this.props.address.postalCode}, ${this.props.address.country}` }</div>
          </footer>
        </Popover>
      </div>
    )
  }
}

PopoverField.propTypes = {
  address: PropTypes.object,
  tooltip: PropTypes.string,
  header: PropTypes.string,
  disabled: PropTypes.bool
}

PopoverField.defaultProps = {
  disabled: false
}
