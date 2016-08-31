import React, { Component, PropTypes } from 'react'
import InputField from '../../common/input_field'
import newPR from './formFields'
import { Field, reduxForm } from 'redux-form'
import RaisedButton from 'material-ui/RaisedButton'
import styles from '../../styles'
import LineItemBtn from './add_line_item'
import LineItemGrid from '../../lineItem/components/lineItemGrid'
import AttachmentComponent from '../../attachments/attachments_component'
import CustomValidate from '../../utils/formValidations'

const validate = (values) => {
  return CustomValidate(newPR, values)
}

class NewPRComponent extends Component {
  itemCount() {
    return this.props.data.line_items.length
  }

  renderAddLineItemBtn() {
    return (
      this.itemCount() > 0 ? <LineItemBtn /> : ''
    )
  }

  render() {
    const { handleSubmit } = this.props
    const submit = (values) => {
      console.log('valies..', values)
      console.log('line itesmm..', this.props.data.line_items)
    }

    return (
      <div className="col-1-1">
        <form onSubmit={ handleSubmit(submit) }>
          <div className="col-1-1">
            <h2 className="col-10-12" style={ styles.formHeader }>New Purchase Requisition</h2>
            <div className="col-2-12" style={ { textAlign: 'right' } }>{ this.renderAddLineItemBtn() }</div>
          </div>
          <div className="col-2-12">
            <Field { ...newPR.title } component={ InputField } />
          </div>
          <div className="col-10-12">
            <Field { ...newPR.notes } component={ InputField } />
          </div>
          { /* LineItem List */ }
          <LineItemGrid line_items={ this.props.data.line_items } />
          <div className="col-1-1" style={ { marginTop: 10, textAlign: 'right' } }>
            <span style={ { marginRight: 10 } }><RaisedButton backgroundColor="#c1c1c1" label="Route for Approval" /></span>
            <span><RaisedButton type="submit" primary={ true } label="Submit" /></span>
          </div>
          <AttachmentComponent />
        </form>
      </div>
    )
  }
}

NewPRComponent.propTypes = {
  data: PropTypes.object,
  handleSubmit: PropTypes.func
}

export default reduxForm({
  form: 'PurchaseRequisition',
  validate
})(NewPRComponent)
