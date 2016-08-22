import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import InputField from '../../common/input_field'
import Address from '../form_fields'

const section = {
  wrapper: { paddingRight: 0, paddingTop: 5 },
  innerHeader: { paddingTop: 10, margin: 0 }
}

const header = (title) => {
  return <h5 style={ section.innerHeader }>{ title }</h5>
}

const AddressComponent = (props) => {
  const data = props.data || {}
  const fieldName = (name) => {
    return `${props.addressType}.${name}`
  }
  return (
    <div className="col-1-1" style={ section.wrapper }>
      { data.header ? <header /> : '' }
      <div className="col-1-4"><Field { ...Address.street } name={ fieldName('street') } component={ InputField } /></div>
      <div className="col-1-5"><Field { ...Address.city } name={ fieldName('city') } component={ InputField } /></div>
      <div className="col-1-5"><Field { ...Address.country } name={ fieldName('country') } component={ InputField } /></div>
      <div className="col-1-5"><Field { ...Address.state } name={ fieldName('state') } component={ InputField } /></div>
      <div className="col-1-8"><Field { ...Address.zip } name={ fieldName('postalCode') } component={ InputField } /></div>
    </div>
  )
}

AddressComponent.propTypes = {
  header: PropTypes.string,
  addressType: PropTypes.string,
  data: PropTypes.object
}
export default AddressComponent
