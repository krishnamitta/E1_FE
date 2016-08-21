import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import InputField from '../../../common/input_field'
import newLineItem from '../../../common/form_fields/new_line_item'
import { fetchShipToAddress, loadMaterialDetails, loadVendorAddress } from '../actions'
import { fetchMaterialList, loadReferenceData } from '../../../reference_data/actions'
import Paper from 'material-ui/Paper'
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
    this.props.dispatch((loadMaterialDetails({}))) // clear existing material
    this.props.dispatch(fetchMaterialList(plantId))
    this.props.dispatch(fetchShipToAddress(this.findPlantById(plantId)))
  }

  handleMaterialChange(materialId) {
    this.props.dispatch(loadMaterialDetails(this.findMaterialById(materialId)))
  }

  handleVendorChange(vendorId) {
    this.props.dispatch(loadVendorAddress(vendorId))
  }

  handleSubmit(event) {
    console.log('cme here..')
    event.preventDefault()
    const form = event.target
    console.log('form elements..', form.elements)
  }

  render() {
    const data = this.props.data || {}
    return (
      <div className="col-1-1">
        <Paper className="line_item_form">
          <form className="lineItemForm" onSubmit={ (event) => this.handleSubmit(event) }>
            <div className="col-1-4">
              <Field { ...newLineItem.plant } component={ InputField }
                dataSource={ this.props.references.plants }
                onChange={ (event, i, value) => this.handlePlantChange(value) } data={ data.plant } />
            </div>
            <div className="col-1-4">
              <Field { ...newLineItem.business_unit } component={ InputField } dataSource={ this.props.references.business_units }
                data={ data.business_unit } />
            </div>
            <div className="col-1-4">
              <Field { ...newLineItem.expected_deliver_date } component={ InputField } data={ data.expected_deliver_date } />
            </div>
            <div className="col-1-1">
              <div className="col-1-4">
                <Field { ...newLineItem.material.name } dataSource={ this.props.references.materials }
                  component={ InputField } onChange={ (event, i, value) => this.handleMaterialChange(value) } />
              </div>
              <div className="col-1-4">
                <Field { ...newLineItem.material.description } component={ InputField } data={ data.material.materialdesc } />
              </div>
              <div className="col-1-4">
                <Field { ...newLineItem.material.group } component={ InputField } dataSource={ this.props.references.material_groups } />
              </div>
              <div className="col-1-4">
                <Field { ...newLineItem.uom } component={ InputField } data={ data.material.uom } />
              </div>
              <div className="col-1-4">
                <Field { ...newLineItem.quantity } component={ InputField } data={ data.quantity } />
              </div>
              <div className="col-1-4">
                <Field { ...newLineItem.price } component={ InputField } data={ data.material.unitprice } />
              </div>
              <div className="col-1-4">
                <Field { ...newLineItem.currency } component={ InputField }
                  dataSource={ this.props.references.currencies } data={ data.currency } />
              </div>
              <div className="col-1-4">
                <Field { ...newLineItem.total_price } component={ InputField } data={ data.price } />
              </div>
            </div>
            <AddressComponent header="Ship To Address" data={ data.shipToAddress } />
            <div className="col-1-1" style={ section.wrapper }>
              <h5 style={ section.innerHeader }>Vendor</h5>
              <div className="col-1-4">
                <Field { ...newLineItem.vendor.name } component={ InputField }
                  onChange={ (event, i, value) => this.handleVendorChange(value) }
                  dataSource={ this.props.references.vendors } />
              </div>
              <div className="col-1-5">
                <Field { ...newLineItem.vendor.material_number } component={ InputField } />
              </div>
              <div className="col-1-5">
                <Field { ...newLineItem.part_number } component={ InputField } />
              </div>
              <AddressComponent data={ data.shipToAddress } />
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
            <div className="col-1-1">
              <Field { ...newLineItem.notes } component={ InputField } />
            </div>
          </form>
        </Paper>
      </div>
    )
  }
}

LineItemComponent.propTypes = {
  references: PropTypes.object,
  data: PropTypes.object,
  dispatch: PropTypes.func
}

export default reduxForm({
  form: 'line_item'
})(LineItemComponent)
