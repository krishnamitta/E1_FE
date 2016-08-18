import React, { Component, PropTypes } from 'react'
import DatePicker from 'material-ui/DatePicker'

export default class DateField extends Component {
  constructor(props) {
    super(props)
    this.state = { value: this.props.value || null }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value || null })
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
        autoOk
      />
    )
  }
}

DateField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  floatingLabel: PropTypes.string,
  hintText: PropTypes.string,
  minDate: PropTypes.string,
  maxDate: PropTypes.string
}
