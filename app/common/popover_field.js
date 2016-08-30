import React, { Component, PropTypes } from 'react'
import Popover from 'material-ui/Popover'
import LocationIcon from 'material-ui/svg-icons/communication/location-on'
import IconButton from 'material-ui/IconButton'
import Paper from 'material-ui/Paper'

const color = 'rgb(7, 52, 116)'

const section = {
  innerHeader: { padding: 2,
    margin: 4,
    backgroundColor: '#F1F1F1',
    height: 30,
    color,
    fontSize: 15
  },
  innerFooter: {
    padding: 2,
    margin: 4,
    height: 30,
    fontSize: 14,
    color
  }
}

const paper = {
  paddingTop: 20,
  backgroundColor: 'white',
  height: 100,
  width: 300
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
    const data = this.props ? this.props : ''
    const address = data.address ? data.address : ''
    const city = address.city ? address.city : ''
    const postalCode = address.postalCode ? address.postalCode : ''
    const state = address.state ? address.state : ''
    const country = address.country ? address.country : ''
    const street = address.street ? address.street : ''
    const addressSecondLine = `${city} ${state},${postalCode},${country}`

    const header = () => {
      return <p style={ section.innerHeader }>{ data.tooltip.toUpperCase() }</p>
    }

    const footer = () => {
      return (
        <p style={ section.innerFooter }>
          <div>{ street }</div>
          <div>{ addressSecondLine }</div>
        </p>)
    }

    return (
      <div>
        <IconButton tooltip={ data.tooltip }
          onTouchTap={ (event) => this.handleTouchTap(event) }
          style={ { position: 'relative', top: 22, left: '-10px', paddingLeft: 0 } }>
          <LocationIcon />
        </IconButton>
        <Popover
        open={ this.state.open }
        anchorEl={ this.state.anchorEl }
        anchorOrigin={ { horizontal: 'left', vertical: 'bottom' } }
        targetOrigin={ { horizontal: 'left', vertical: 'top' } }
        onRequestClose={ (event) => this.handleRequestClose() }
        >
          { header() }
          <Paper style={ paper } zDepth="0">
            <div> GOOGLE MAP </div>
          </Paper>
          { footer() }
        </Popover>
      </div>
    )
  }
}

PopoverField.propTypes = {
  street: PropTypes.string,
  country: PropTypes.string,
  postalCode: PropTypes.string,
  city: PropTypes.string,
  address: PropTypes.object,
  header: PropTypes.string
}
