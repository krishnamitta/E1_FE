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
  constructor(props) {
    super(props)
    this.state = { value: this.props.data || null }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hasOwnProperty('data')) {
      this.setState({ value: nextProps.data })
    }
  }

  handleChange(event, date) {
		this.setState({ value: date })
	}

  render() {
    return (
      <DatePicker
        name={ this.props.name }
        value={ this.state.value }
        minDate={ this.props.minDate }
        maxDate={ this.props.maxDate }
        floatingLabelText={ this.props.floatingLabel }
        container="inline"
        hintText={ this.props.hintText }
        onChange={ (event, date) => this.handleChange(event, date) }
        dialogContainerStyle={ datepickerStyle.dialogBodyContent }
        autoOk
      />
    )
  }
}

DateField.propTypes = {
  name: PropTypes.string,
  data: PropTypes.string,
  floatingLabel: PropTypes.string,
  hintText: PropTypes.string,
  minDate: PropTypes.string,
  maxDate: PropTypes.string
}
