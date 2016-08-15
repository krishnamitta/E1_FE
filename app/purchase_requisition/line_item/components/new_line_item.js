import React, { PropTypes } from 'react'
import InputField from '../../../common/input_field'
import newLineItem from '../../../common/form_fields/new_line_item'
import Paper from 'material-ui/Paper'

const LineItemComponent = (props) => {
  const data = props.data || {}
  return (
    <div className="col-1-1">
      <Paper className="line_item_form">
        <div className="col-1-4"><InputField attrs={ newLineItem.plant } data={ data.plant } /></div>
        <div className="col-1-4"><InputField attrs={ newLineItem.business_unit } data={ data.business_unit } /></div>
        <div className="col-1-4"><InputField attrs={ newLineItem.expected_deliver_date } data={ data.expected_deliver_date } /></div>
        <div className="col-1-1" style={ { paddingRight: 0 } }>
          <div className="col-1-4"><InputField attrs={ newLineItem.material.name } /></div>
          <div className="col-1-4"><InputField attrs={ newLineItem.description } data={ data.description } /></div>
          <div className="col-1-4"><InputField attrs={ newLineItem.material.group } /></div>
          <div className="col-1-4"><InputField attrs={ newLineItem.uom } data={ data.uom } /></div>
          <div className="col-1-4"><InputField attrs={ newLineItem.quantity } data={ data.quantity } /></div>
          <div className="col-1-4"><InputField attrs={ newLineItem.price } data={ data.price } /></div>
          <div className="col-1-4"><InputField attrs={ newLineItem.currency } data={ data.currency } /></div>
          <div className="col-1-4"><InputField attrs={ newLineItem.total_price } data={ data.price } /></div>
        </div>
        <div className="col-1-1" style={ { paddingRight: 0, paddingTop: 5 } }>
          <h5 style={ { paddingTop: 10, margin: 0 } }>Vendor</h5>
          <div className="col-1-4"><InputField attrs={ newLineItem.vendor.name } /></div>
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

LineItemComponent.propTypes = {
  data: PropTypes.object
}

export default LineItemComponent
