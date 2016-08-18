import React from 'react'
import StringField from './string_field'
import DecimalField from './decimal_field'
import EmailField from './email_field'
import Dropdown from './select_field'
import Autocomplete from './dropdown'

const FieldMapper = {
  string: StringField,
  dropdown: Dropdown,
  autocomplete: Autocomplete,
  number: DecimalField,
  email: EmailField
}

export default class InputField extends React.Component {
  render() {
    const { attrs, ...other } = this.props
    const newProps = Object.assign({}, attrs, other)
    return React.createElement(FieldMapper[attrs.type], newProps)
 }
}

InputField.propTypes = {
  attrs: React.PropTypes.object
}
