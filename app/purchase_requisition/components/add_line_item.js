import React, { Component, PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import styles from '../../styles'
import { addLineItemAction } from '../actions'
import { connect } from 'react-redux'
import NewLineItem from '../line_item/components/new_line_item'
import { formValueSelector } from 'redux-form'

const customContentStyle = {
  width: '95%',
  maxWidth: 'none',
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

  handleSubmit(event) {
    this.props.dispatch(addLineItemAction(this.props.lineItem))
    this.closeDialog()
  }

  render() {
    const actions = [
      <span style={ { marginRight: 5 } }>
        <FlatButton label="Cancel" onTouchTap={ (event) => this.closeDialog() } />
      </span>,
      <FlatButton label="Submit" onTouchTap={ (event) => this.refs.lineItemForm.submit() } keyboardFocused={ true } />,
    ]
    return (
      <div>
        <RaisedButton label="Add line item" primary={ true } onTouchTap={ (event) => this.openDialog() } />
        <Dialog
          title="Add Line Item"
          style={ Object.assign({}, styles.formHeader, styles.font20) }
          titleStyle={ styles.dialogTitleStyle }
          contentStyle={ customContentStyle }
          open={ this.state.open }
          onRequestClose={ this.handleClose }
          modal={ false }
          autoDetectWindowHeight
          autoScrollBodyContent
          actions={ actions }>
          <NewLineItem { ...this.props } ref="lineItemForm" onSubmit={ (event) => this.handleSubmit(event) } />
        </Dialog>
      </div>
    )
  }

}

LineItemBtn.propTypes = {
  lineItem: PropTypes.object,
  dispatch: PropTypes.func,
  onSubmit: PropTypes.func
}
const selector = formValueSelector('LineItem')
const mapStateToProps = (state) => {
  const isItemPresent = selector(state, 'material_not_found')
  return {
    isItemPresent,
    references: state.Referencedata,
    lineItem: (state.form.LineItem ? state.form.LineItem.values : {})
  }
}

export default connect(mapStateToProps)(LineItemBtn)
