import React, { PropTypes } from 'react'
import InputField from '../../../common/input_field'
import newLineItem from '../../../common/form_fields/new_line_item'
import Paper from 'material-ui/Paper'
import styles from '../../../styles'

const LineItemComponent = (props) => {
  const data = props.data || {}
  return (
    <div className="col-1-1">
      <Paper className="line_item_form">
        <div className="col-1-4"><InputField attrs={ newLineItem.title } data={ data.title } /></div>
        <div className="col-1-4"><InputField attrs={ newLineItem.plant } data={ data.plant } /></div>
        <div className="col-1-4"><InputField attrs={ newLineItem.business_unit } data={ data.business_unit } /></div>
        <div className="col-1-4"><InputField attrs={ newLineItem.expected_deliver_date } data={ data.expected_deliver_date } /></div>
        <section className="col-1-1" style={ { marginTop: 10 } }>
          <h3 style={ styles.line_item.innerHeader }>Material</h3>
          <div className="col-1-4"><InputField attrs={ newLineItem.material.description } /></div>
          <div className="col-1-4"><InputField attrs={ newLineItem.material.name } /></div>
          <div className="col-1-5"><InputField attrs={ newLineItem.material.group } /></div>
          <div className="col-1-8"><InputField attrs={ newLineItem.uom } data={ data.uom } /></div>
          <div className="col-2-12"><InputField attrs={ newLineItem.quantity } data={ data.quantity } /></div>
          <div className="col-2-12"><InputField attrs={ newLineItem.price } data={ data.price } /></div>
          <div className="col-2-12"><InputField attrs={ newLineItem.total_price } data={ data.price } /></div>
          <div className="col-2-12"><InputField attrs={ newLineItem.currency } data={ data.currency } /></div>
        </section>
        <section className="col-1-1" >
          <h3 style={ styles.line_item.innerHeader }>Vendor</h3>
          <div className="col-2-12"><InputField attrs={ newLineItem.vendor.name } /></div>
          <div className="col-2-12"><InputField attrs={ newLineItem.vendor.material_number } /></div>
          <div className="col-8-12"><InputField attrs={ newLineItem.vendor.address } /></div>
        </section>
        <section className="col-1-1" style={ { marginTop: 10 } }>
          <h3 style={ styles.line_item.innerHeader }>Accounting</h3>
          <div className="col-1-4"><InputField attrs={ newLineItem.accounting.distribution } /></div>
          <div className="col-1-4"><InputField attrs={ newLineItem.accounting.assignment_category } /></div>
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
