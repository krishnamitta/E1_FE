import React, { Component, PropTypes } from 'react'
import Popover from 'material-ui/Popover'
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

export default class AddressComponent extends Component {

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


  render() {
    const addressString1 = []
    addressString1.push(this.props.address.street)
    addressString1.push(this.props.address.city)
    addressString1.push(this.props.address.state)
    const addressString2 = []
    addressString2.push(this.props.address.postalCode)
    addressString2.push(this.props.address.country)
    return (
      <div>
        <IconButton tooltip={ this.props.tooltip }
          disabled={ this.props.disabled }
          onTouchTap={ (event) => this.handleTouchTap(event) }
          style={ { position: 'relative', top: 30, left: '-20px', paddingLeft: 0 } }>
          <img src="/images/location.svg" alt="location" width="24px" />
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
            <div>{ addressString1.join(', ') }</div>
            <div>{ addressString2.join(', ') }</div>
          </footer>
        </Popover>
      </div>
    )
  }
}

AddressComponent.propTypes = {
  address: PropTypes.object,
  tooltip: PropTypes.string,
  header: PropTypes.string,
  disabled: PropTypes.bool
}

AddressComponent.defaultProps = {
  disabled: false
}
