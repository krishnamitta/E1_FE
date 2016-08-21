import React, { Component, PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import styles from '../../styles'
import { addLineItemAction } from '../actions'
import { connect } from 'react-redux'
import NewLineItem from '../line_item/components/new_line_item'

const customContentStyle = {
  width: '90%',
  maxWidth: '100%',
}

class LineItemBtn extends Component {
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

  submitLineItem(event) {
    this.props.dispatch(addLineItemAction(this.props.lineItem))
  }

  render() {
    const actions = [
      <span style={ { marginRight: 5 } }>
        <FlatButton label="Cancel" onTouchTap={ (event) => this.closeDialog() } />
      </span>,
      <FlatButton label="Submit" onTouchTap={ (event) => this.submitLineItem(event) } keyboardFocused={ true } />,
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
          <NewLineItem { ...this.props } />
        </Dialog>
      </div>
    )
  }

}

LineItemBtn.propTypes = {
  lineItem: PropTypes.object,
  dispatch: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    references: state.Referencedata,
    data: state.LineItem,
    lineItem: (state.entities.line_item ? state.entities.line_item.values : {})
  }
}

export default connect(mapStateToProps)(LineItemBtn)
