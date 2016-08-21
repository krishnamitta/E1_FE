import React, { Component, PropTypes } from 'react'
import DatePicker from 'material-ui/DatePicker'

const datepickerStyle = {
  dialogContent: {
    width: 200
  },
  dialogBodyContent: {
    minHeight: 350,
    minWidth: 250
  }
}

export default class DateField extends Component {
  render() {
    const { input, floatingLabel, meta: { touched, error }, ...custom } = this.props
    return (
      <DatePicker
        minDate={ custom.minDate }
        maxDate={ custom.maxDate }
        floatingLabelText={ floatingLabel }
        container="inline"
        hintText={ custom.hintText }
        errorText={ touched && error }
        onBlur={ (event, date) => input.onBlur(event, date) }
        onChange={ (event, date) => input.onChange(date) }
        dialogContainerStyle={ datepickerStyle.dialogBodyContent }
        autoOk
      />
    )
  }
}

DateField.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  floatingLabel: PropTypes.string,
  hintText: PropTypes.string,
  minDate: PropTypes.string,
  maxDate: PropTypes.string
}
