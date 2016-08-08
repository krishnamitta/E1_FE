import React from 'react'
import StringField from './string_field'
import Dropdown from './dropdown'
import IntegerField from './integer_field'
import EmailField from './email_field'

const FieldMapper = {
  string: StringField,
  dropdown: Dropdown,
  integer: IntegerField,
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
