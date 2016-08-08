import React from 'react'
import InputField from '../../common/input_field'
import newPR from '../../common/form_fields/new_pr'

const NewPRComponent = (props) => {
  return (
    <div className="col-1-1">
      <div className="col-1-3"><InputField attrs={ newPR.title } data={ props.data.title } /></div>
      <div className="col-1-5"><InputField attrs={ newPR.vendor } data={ props.data.currency } /></div>
    </div>
  )
}

NewPRComponent.propTypes = {
  data: React.PropTypes.object
}

export default NewPRComponent
