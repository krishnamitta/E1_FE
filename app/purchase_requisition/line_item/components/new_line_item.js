import React, { PropTypes } from 'react'
import InputField from '../../../common/input_field'
import newLineItem from '../../../common/form_fields/new_line_item'
import Paper from 'material-ui/Paper'

const LineItemComponent = (props) => {
  return (
    <div className="col-1-1">
      <Paper>
        <div className="col-1-5"><InputField attrs={ newLineItem.title } data={ props.data.title } /></div>
        <div className="col-1-5"><InputField attrs={ newLineItem.vendor } data={ props.data.currency } /></div>
        <div className="col-1-5"><InputField attrs={ newLineItem.business_unit } data={ props.data.business_unit } /></div>
        <div className="col-1-5"><InputField attrs={ newLineItem.plant } data={ props.data.plant } /></div>
        <div className="col-1-5"><InputField attrs={ newLineItem.currency } data={ props.data.currency } /></div>
      </Paper>
    </div>
  )
}

LineItemComponent.propTypes = {
  data: PropTypes.object
}

export default LineItemComponent
