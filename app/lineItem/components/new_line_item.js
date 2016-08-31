import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import InputField from '../../common/input_field'
import newLineItem from './utils/form_fields'
import { fetchShipToAddress, loadMaterialDetails, loadVendorAddress, calculateTotalPriceForLineItem } from '../actions'
import { fetchMaterialList, loadReferenceData } from '../../reference_data/actions'
import Paper from 'material-ui/Paper'
import CustomValidate from '../../utils/formValidations'
import LineItemSiderbar from '../containers/lineItemSidebarContainer'
import styles from './styles'
import AddressComponent from './address_component'

const section = {
  wrapper: { paddingRight: 0, paddingTop: 5 },
  innerHeader: { paddingTop: 10, margin: 0 }
}

const validate = (values) => {
  return CustomValidate(newLineItem, values)
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

  clearMaterialValue() {
    this.props.dispatch(loadMaterialDetails({}))
  }

  renderMaterailName(lineItemPresent){
    return (
      lineItemPresent ?
        <div className="col-1-2">
          <Field { ...newLineItem.material_description } component={ InputField } />
        </div> :
        <div className="col-1-2">
          <Field { ...newLineItem.material_name } dataSource={ this.props.references.materials }
            component={ InputField } onChange={ (event, i, value) => this.handleMaterialChange(value) } />
        </div>
    )
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <div className="col-1-1" style={ { overflow: 'hidden', paddingRight: 1 } }>
        <div className="col-9-12">
          <form ref="lineItemForm" onSubmit={ (event) => handleSubmit(this.props.onSubmit) }>
            <Paper className="line_item_form">
              <div className="col-1-1">
                <div className="col-1-2">
                  <div className="col-11-12">
                    <Field { ...newLineItem.plant } component={ InputField }
                      dataSource={ this.props.references.plants }
                      onChange={ (event, i, value) => this.handlePlantChange(value) } />
                  </div>
                  <div className="col-1-12">
                    <AddressComponent disabled={ !this.props.isPlantPresent } address={ this.props.lineItem && this.props.lineItem.shipToAddress ? this.props.lineItem.shipToAddress : {} }
                      tooltip="Ship to Address" />
                  </div>
                </div>
                <div className="col-1-2">
                  <Field { ...newLineItem.expected_delivery_date } component={ InputField } />
                </div>
              </div>
              <div className="col-1-1">
                { this.renderMaterailName(this.props.isItemPresent) }
                <div className="col-1-2">
                  <Field { ...newLineItem.material_group } component={ InputField } dataSource={ this.props.references.material_groups } />
                </div>
                <div>
                  <Field { ...newLineItem.material_not_found } component={ InputField } style={ styles.checkBoxStyle.rootStyle }
                    labelStyle={ Object.assign({}, styles.checkBoxStyle.lineitemNotFound) }
                    iconStyle={ Object.assign({}, styles.checkBoxStyle.iconStyle) }
                    handleOnCheck={ (event) => this.clearMaterialValue() } />
                </div>
                <div className="col-1-5">
                  <Field { ...newLineItem.material_uom } component={ InputField } />
                </div>
                <div className="col-1-5">
                  <Field { ...newLineItem.quantity } component={ InputField }
                    handleChange={ (event) => this.calculateTotalPrice() } />
                </div>
                <div className="col-1-5">
                  <Field { ...newLineItem.currency } component={ InputField }
                    dataSource={ this.props.references.currencies } />
                </div>
                <div className="col-1-5">
                  <Field { ...newLineItem.price } component={ InputField }
                    handleChange={ (event) => this.calculateTotalPrice() } />
                </div>
                <div className="col-1-5">
                  <Field { ...newLineItem.total_price } component={ InputField } />
                </div>
              </div>
              <div className="col-1-1" style={ section.wrapper }>
                <div className="col-1-3">
                  <div className="col-11-12">
                    <Field { ...newLineItem.vendor_name } component={ InputField }
                      onChange={ (event, i, value) => this.handleVendorChange(value) }
                      dataSource={ this.props.references.vendors } />
                  </div>
                  <div className="col-1-12">
                    <AddressComponent disabled={ !this.props.isVendorPresent } address={ this.props.lineItem && this.props.lineItem.vendorAddress ? this.props.lineItem.vendorAddress : {} }
                      tooltip="Vendor Address" />
                  </div>
                </div>
                <div className="col-1-3">
                  <Field { ...newLineItem.vendor_material_number } component={ InputField } />
                </div>
                <div className="col-1-3">
                  <Field { ...newLineItem.part_number } component={ InputField } />
                </div>
              </div>
              <section className="col-1-1" style={ section.wrapper }>
                <div className="col-1-3">
                  <Field { ...newLineItem.accounting.business_unit } component={ InputField } dataSource={ this.props.references.business_units } />
                </div>
                <div className="col-1-3">
                  <Field { ...newLineItem.accounting.distribution } component={ InputField } />
                </div>
                <div className="col-1-3">
                  <Field { ...newLineItem.accounting.assignment_category } component={ InputField } />
                </div>
              </section>
              <section className="col-1-1">
                <div className="col-1-2">
                  <Field { ...newLineItem.internal_note } component={ InputField } />
                </div>
                <div className="col-1-2">
                  <Field { ...newLineItem.external_note } component={ InputField } />
                </div>
              </section>
            </Paper>
          </form>
        </div>
        <div className="col-3-12">
          <LineItemSiderbar />
        </div>
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
  floatingLabel: PropTypes.string,
  isItemPresent: PropTypes.bool,
  isPlantPresent: PropTypes.string,
  isVendorPresent: PropTypes.string
}

export default reduxForm({
  form: 'LineItem',
  validate
})(LineItemComponent)
