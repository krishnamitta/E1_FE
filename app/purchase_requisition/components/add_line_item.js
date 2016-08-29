import React, { Component, PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import styles from '../../styles'
import { addLineItemAction } from '../actions'
import { connect } from 'react-redux'
import NewLineItem from '../line_item/components/new_line_item'
import ExitAppIcon from 'material-ui/svg-icons/action/exit-to-app'
import { reset, formValueSelector } from 'redux-form'

const customContentStyle = {
  width: '95%',
  maxWidth: 'none',
}
const LineItemForm = 'LineItem'

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

  /* TODO - Work in progress */
  saveAndNewLineItem() {
    if (this.props.lineItem) {
      this.props.dispatch(addLineItemAction(this.props.lineItem))
      this.props.dispatch(reset(LineItemForm))
    }
  }

  handleSubmit(event) {
    this.props.dispatch(addLineItemAction(this.props.lineItem))
    this.closeDialog()
  }

  render() {
    const actions = [
      <span style={ { marginRight: 5 } }>
        <RaisedButton label="Cancel" onTouchTap={ (event) => this.closeDialog() } />
      </span>,
      <span style={ { marginRight: 5 } }>
        <RaisedButton primary={ true } label="Save & Add New" onTouchTap={ (event) => this.saveAndNewLineItem() } />
      </span>,
      <RaisedButton secondary={ true } icon={ <ExitAppIcon /> } label="Save & Exit"
        onTouchTap={ (event) => this.refs.lineItemForm.submit() } keyboardFocused={ true } />,
    ]
    return (
      <div>
        <RaisedButton label="Add line item" primary={ true } onTouchTap={ (event) => this.openDialog() } />
        <Dialog
          title="Add Line Item"
          style={ Object.assign({}, styles.formHeader, styles.font20) }
          bodyStyle={ { paddingRight: 0 } }
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
const selector = formValueSelector(LineItemForm)
const mapStateToProps = (state) => {
  const isItemPresent = selector(state, 'material_not_found')
  return {
    isItemPresent,
    references: state.Referencedata,
    lineItem: (state.form.LineItem ? state.form.LineItem.values : {})
  }
}

export default connect(mapStateToProps)(LineItemBtn)
