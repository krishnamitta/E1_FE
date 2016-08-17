import React, { Component, PropTypes } from 'react'
import InputField from '../../../common/input_field'
import newLineItem from '../../../common/form_fields/new_line_item'
import { fetchMaterialList, fetchPlantList,
  fetchUOMList, fetchBusinessUnitList, fetchVendorList } from '../../../reference_data/actions'
import Paper from 'material-ui/Paper'

class LineItemComponent extends Component {

  componentDidMount() {
    this.props.dispatch(fetchPlantList())
    this.props.dispatch(fetchVendorList())
    this.props.dispatch(fetchUOMList())
    this.props.dispatch(fetchBusinessUnitList())
  }

  fetchMaterials(plantId) {
    this.props.dispatch(fetchMaterialList(plantId))
  }

  render() {
    const data = this.props.data || {}
    return (
      <div className="col-1-1">
        <Paper className="line_item_form">
          <div className="col-1-4"><InputField dataSource={ this.props.references.plants } attrs={ newLineItem.plant }
            onChange={ (event, i, value) => this.fetchMaterials(value) } data={ data.plant } /></div>
          <div className="col-1-4"><InputField dataSource={ this.props.references.business_units } attrs={ newLineItem.business_unit } data={ data.business_unit } /></div>
          <div className="col-1-4"><InputField attrs={ newLineItem.expected_deliver_date } data={ data.expected_deliver_date } /></div>
          <div className="col-1-1" style={ { paddingRight: 0 } }>
            <div className="col-1-4"><InputField attrs={ newLineItem.material.name } dataSource={ this.props.references.materials } /></div>
            <div className="col-1-4"><InputField attrs={ newLineItem.material.description } data={ data.description } /></div>
            <div className="col-1-4"><InputField attrs={ newLineItem.material.group } /></div>
            <div className="col-1-4"><InputField attrs={ newLineItem.uom } dataSource={ this.props.references.uoms } data={ data.uom } /></div>
            <div className="col-1-4"><InputField attrs={ newLineItem.quantity } data={ data.quantity } /></div>
            <div className="col-1-4"><InputField attrs={ newLineItem.price } data={ data.price } /></div>
            <div className="col-1-4"><InputField attrs={ newLineItem.currency } data={ data.currency } /></div>
            <div className="col-1-4"><InputField attrs={ newLineItem.total_price } data={ data.price } /></div>
          </div>
          <div className="col-1-1" style={ { paddingRight: 0, paddingTop: 5 } }>
            <h5 style={ { paddingTop: 10, margin: 0 } }>Vendor</h5>
            <div className="col-1-4"><InputField dataSource={ this.props.references.vendors } attrs={ newLineItem.vendor.name } /></div>
            <div className="col-1-5"><InputField attrs={ newLineItem.vendor.material_number } /></div>
            <div className="col-1-5"><InputField attrs={ newLineItem.part_number } /></div>
            <div className="col-1-3"><InputField attrs={ newLineItem.vendor.address } /></div>
          </div>
          <section className="col-1-1" style={ { paddingRight: 0 } }>
            <h5 style={ { paddingTop: 10, margin: 0 } }>Accounting</h5>
            <div className="col-1-4"><InputField attrs={ newLineItem.accounting.distribution } /></div>
            <div className="col-1-5"><InputField attrs={ newLineItem.accounting.assignment_category } /></div>
          </section>
          <div className="col-1-1"><InputField attrs={ newLineItem.notes } data={ data.notes } /></div>
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
