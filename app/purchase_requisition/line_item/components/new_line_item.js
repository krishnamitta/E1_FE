import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import InputField from '../../../common/input_field'
import newLineItem from './utils/form_fields'
import { fetchShipToAddress, loadMaterialDetails, loadVendorAddress, calculateTotalPriceForLineItem } from '../actions'
import { fetchMaterialList, loadReferenceData } from '../../../reference_data/actions'
import Paper from 'material-ui/Paper'
import validate from './utils/line_item_validations'
import AddressComponent from '../../../address/components'

const section = {
  wrapper: { paddingRight: 0, paddingTop: 5 },
  innerHeader: { paddingTop: 10, margin: 0 }
}

class LineItemComponent extends Component {

  componentDidMount() {
    this.props.dispatch(loadReferenceData())
  }

  findPlantById(plantId) {
    return _.find(this.props.references.plants, (plant) => { return plant.plant == plantId })
  }

  findMaterialById(materialId) {
    return _.find(this.props.references.materials, (material) => { return material.material == materialId })
  }

  handlePlantChange(plantId) {
    this.props.dispatch(fetchMaterialList(plantId))
    this.props.dispatch(fetchShipToAddress(this.findPlantById(plantId)))
  }

  handleMaterialChange(materialId) {
    this.props.dispatch(loadMaterialDetails(this.findMaterialById(materialId)))
    setTimeout(this.calculateTotalPrice(), 1000)
  }

  handleVendorChange(vendorId) {
    this.props.dispatch(loadVendorAddress(vendorId))
  }

  calculateTotalPrice() {
    const lineItem = this.props.lineItem || {}
    const price = Number(lineItem.price) || 0
    const quantity = Number(lineItem.quantity) || 0
    this.props.dispatch(calculateTotalPriceForLineItem(price, quantity))
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <div className="col-1-1" style={ { overflow: 'hidden' } }>
        <form ref="lineItemForm" onSubmit={ (event) => handleSubmit(this.props.onSubmit) }>
          <Paper className="line_item_form">
            <div className="col-1-4">
              <Field { ...newLineItem.plant } component={ InputField }
                dataSource={ this.props.references.plants }
                onChange={ (event, i, value) => this.handlePlantChange(value) } />
            </div>
            <div className="col-1-4">
              <Field { ...newLineItem.business_unit } component={ InputField } dataSource={ this.props.references.business_units } />
            </div>
            <div className="col-1-4">
              <Field { ...newLineItem.expected_deliver_date } component={ InputField } />
            </div>
            <div className="col-1-1">
              <div className="col-1-4">
                <Field { ...newLineItem.material_name } dataSource={ this.props.references.materials }
                  component={ InputField } onChange={ (event, i, value) => this.handleMaterialChange(value) } />
              </div>
              <div className="col-1-4">
                <Field { ...newLineItem.material_description } component={ InputField } />
              </div>
              <div className="col-1-4">
                <Field { ...newLineItem.material_group } component={ InputField } dataSource={ this.props.references.material_groups } />
              </div>
              <div className="col-1-4">
                <Field { ...newLineItem.material_uom } component={ InputField } />
              </div>
              <div className="col-1-4">
                <Field { ...newLineItem.quantity } component={ InputField }
                  handleChange={ (event) => this.calculateTotalPrice() } />
              </div>
              <div className="col-1-4">
                <Field { ...newLineItem.price } component={ InputField }
                  handleChange={ (event) => this.calculateTotalPrice() } />
              </div>
              <div className="col-1-4">
                <Field { ...newLineItem.currency } component={ InputField }
                  dataSource={ this.props.references.currencies } />
              </div>
              <div className="col-1-4">
                <Field { ...newLineItem.total_price } component={ InputField } />
              </div>
            </div>
            <AddressComponent header="Ship To Address" addressType="shipToAddress" />
            <div className="col-1-1" style={ section.wrapper }>
              <h5 style={ section.innerHeader }>Vendor</h5>
              <div className="col-1-4">
                <Field { ...newLineItem.vendor_name } component={ InputField }
                  onChange={ (event, i, value) => this.handleVendorChange(value) }
                  dataSource={ this.props.references.vendors } />
              </div>
              <div className="col-1-5">
                <Field { ...newLineItem.vendor_material_number } component={ InputField } />
              </div>
              <div className="col-1-5">
                <Field { ...newLineItem.part_number } component={ InputField } />
              </div>
              <AddressComponent addressType="vendorAddress" />
            </div>
            <section className="col-1-1" style={ section.wrapper }>
              <h5 style={ section.innerHeader }>Accounting</h5>
              <div className="col-1-4">
                <Field { ...newLineItem.accounting.distribution } component={ InputField } />
              </div>
              <div className="col-1-5">
                <Field { ...newLineItem.accounting.assignment_category } component={ InputField } />
              </div>
            </section>
            <section className="col-1-1">
              <div className="col-1-12">
                <label style={ { fontSize: 12, position: 'relative', top: 15 } }>Internal Note</label>
              </div>
              <div className="col-11-12">
                <Field { ...newLineItem.internal_note } component={ InputField } />
              </div>
            </section>
            <section className="col-1-1">
              <div className="col-1-12">
                <label style={ { fontSize: 12, position: 'relative', top: 15 } }>External Note</label>
              </div>
              <div className="col-11-12">
                <Field { ...newLineItem.external_note } component={ InputField } />
              </div>
            </section>
          </Paper>
        </form>
      </div>
    )
  }
}

LineItemComponent.propTypes = {
  references: PropTypes.object,
  lineItem: PropTypes.object,
  onSubmit: PropTypes.func,
  dispatch: PropTypes.func,
  handleSubmit: PropTypes.func,
  name: PropTypes.string,
  floatingLabel: PropTypes.string
}

export default reduxForm({
  form: 'LineItem',
  validate
})(LineItemComponent)
