import React, { Component, PropTypes } from 'react'
import TextField from 'material-ui/TextField'

export default class DateField extends Component {
  constructor(props) {
    super(props)
    this.state = { value: this.props.value || '' }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value || ''
    })
  }

  handleChange(event) {
		this.setState({ value: event.target.value })
	}

  render() {
    return (
      <TextField
        name={ this.props.name }
        value={ this.state.value }
      />
    )
  }
}

DateField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string
}
