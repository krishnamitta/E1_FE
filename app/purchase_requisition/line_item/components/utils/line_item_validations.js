import lineItemFields from './form_fields'

const isDecimal = (value) => {
  return /^(\-|\+)?([0-9]+(\.[0-9]+)?)$/.test(value)
}

const validate = (values) => {
  const errors = {}
  _.forOwn(lineItemFields, (field, key) => {
    if (field.required && (_.isUndefined(values[field.name]) || _.isNull(values[field.name]))) {
      errors[field.name] = `${field.floatingLabel} is required`
    }
    if (field.fieldType == 'decimal' && !isDecimal(values[field.name])) {
      errors[field.name] = 'Must be a valid decimal'
    }
  })
  return errors
}
export default validate
