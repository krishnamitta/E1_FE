import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import styles from '../../styles'
import LineItemContainer from '../line_item/containers/new_line_item'

const customContentStyle = {
  width: '80%',
  maxWidth: 'none',
}

export default class addLineItem extends Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  openDialog() {
    this.setState({ open: true })
  }

  closeDialog() {
    this.setState({ open: false })
  }

  render() {
    const actions = [
      <span style={ { marginRight: 5 } }>
        <FlatButton label="Cancel" onTouchTap={ (event) => this.closeDialog() } />
      </span>,
      <FlatButton label="Submit" keyboardFocused={ true } />,
    ]

    return (
      <div>
        <RaisedButton label="Add line item" primary={ true } onTouchTap={ (event) => this.openDialog() } />
        <Dialog
          title="Add Line Item"
          style={ Object.assign({}, styles.formHeader, styles.font20) }
          autoScrollBodyContent={ true }
          titleStyle={ styles.dialogTitleStyle }
          contentStyle={ customContentStyle }
          open={ this.state.open }
          onRequestClose={ this.handleClose }
          modal={ false }
          actions={ actions }>
          <LineItemContainer />
        </Dialog>
      </div>
    )
  }

}
