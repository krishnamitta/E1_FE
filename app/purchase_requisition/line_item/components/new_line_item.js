import React, { Component, PropTypes } from 'react'
import InputField from '../../../common/input_field'
import newLineItem from '../../../common/form_fields/new_line_item'
import { fetchShipToAddress, loadMaterialDetails } from '../actions'
import { fetchMaterialList, fetchPlantList, fetchCurrentList,
  fetchUOMList, fetchBusinessUnitList, fetchVendorList } from '../../../reference_data/actions'
import Paper from 'material-ui/Paper'

const section = {
  wrapper: { paddingRight: 0, paddingTop: 5 },
  innerHeader: { paddingTop: 10, margin: 0 }
}

class LineItemComponent extends Component {

  componentDidMount() {
    this.props.dispatch(fetchPlantList())
    this.props.dispatch(fetchVendorList())
    this.props.dispatch(fetchUOMList())
    this.props.dispatch(fetchCurrentList())
    this.props.dispatch(fetchBusinessUnitList())
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
    this.props.dispatch((fetchShipToAddress(this.findPlantById(plantId))))
  }

  handleMaterialChange(materialId) {
    this.props.dispatch((loadMaterialDetails(this.findMaterialById(materialId))))
  }

  handleSubmit(event) {
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
            <div className="col-1-4"><InputField dataSource={ this.props.references.plants } attrs={ newLineItem.plant }
              onChange={ (event, i, value) => this.handlePlantChange(value) } data={ data.plant } /></div>
            <div className="col-1-4"><InputField dataSource={ this.props.references.business_units } attrs={ newLineItem.business_unit } data={ data.business_unit } /></div>
            <div className="col-1-4"><InputField attrs={ newLineItem.expected_deliver_date } data={ data.expected_deliver_date } /></div>
            <div className="col-1-1" style={ { paddingRight: 0 } }>
              <div className="col-1-4"><InputField attrs={ newLineItem.material.name } dataSource={ this.props.references.materials }
                onChange={ (event, i, value) => this.handleMaterialChange(value) } /></div>
              <div className="col-1-4"><InputField attrs={ newLineItem.material.description } data={ data.material.materialdesc } /></div>
              <div className="col-1-4"><InputField attrs={ newLineItem.material.group } /></div>
              <div className="col-1-4"><InputField attrs={ newLineItem.uom } dataSource={ this.props.references.uoms } data={ data.material.uom } /></div>
              <div className="col-1-4"><InputField attrs={ newLineItem.quantity } data={ data.quantity } /></div>
              <div className="col-1-4"><InputField attrs={ newLineItem.price } dataSource={ this.props.references.currencies } data={ data.material.unitprice } /></div>
              <div className="col-1-4"><InputField attrs={ newLineItem.currency } data={ data.currency } /></div>
              <div className="col-1-4"><InputField attrs={ newLineItem.total_price } data={ data.price } /></div>
            </div>
            <div className="col-1-1" style={ section.wrapper }>
              <h5 style={ section.innerHeader }>Ship to address</h5>
              <div className="col-1-4"><InputField attrs={ newLineItem.ship_to_address.street } data={ data.shipToAddress.street } /></div>
              <div className="col-1-5"><InputField attrs={ newLineItem.ship_to_address.city } data={ data.shipToAddress.city } /></div>
              <div className="col-1-5"><InputField attrs={ newLineItem.ship_to_address.country } data={ data.shipToAddress.country } /></div>
              <div className="col-1-5"><InputField attrs={ newLineItem.ship_to_address.state } data={ data.shipToAddress.state } /></div>
              <div className="col-1-8"><InputField attrs={ newLineItem.ship_to_address.zip } data={ data.shipToAddress.postalCode } /></div>
            </div>
            <div className="col-1-1" style={ section.wrapper }>
              <h5 style={ section.innerHeader }>Vendor</h5>
              <div className="col-1-4"><InputField dataSource={ this.props.references.vendors } attrs={ newLineItem.vendor.name } /></div>
              <div className="col-1-5"><InputField attrs={ newLineItem.vendor.material_number } /></div>
              <div className="col-1-5"><InputField attrs={ newLineItem.part_number } /></div>
              <div className="col-1-3"><InputField attrs={ newLineItem.vendor.address } /></div>
            </div>
            <section className="col-1-1" style={ section.wrapper }>
              <h5 style={ section.innerHeader }>Accounting</h5>
              <div className="col-1-4"><InputField attrs={ newLineItem.accounting.distribution } /></div>
              <div className="col-1-5"><InputField attrs={ newLineItem.accounting.assignment_category } /></div>
            </section>
            <div className="col-1-1"><InputField attrs={ newLineItem.notes } data={ data.notes } /></div>
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

export default LineItemComponent
