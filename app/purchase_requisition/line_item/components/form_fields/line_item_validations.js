import lineItemFields from './new_line_item'

const isDecimal = (value) => {
  return /^\d{0,2}(\.\d{1,2})?$/.test(value)
}

const validate = (values) => {
  const errors = {}
  _.forOwn(lineItemFields, (field, key) => {
    if (field.required && (_.isUndefined(values[field]) || _.isNull(values[field]))) {
      errors[field.name] = 'This field must not be blank'
    }
    if (field.fieldType == 'decimal' && isDecimal(values[field])) {
      errors[field.name] = 'Must be a valid decimal'
    }
  })
  return errors
}
export default validate
