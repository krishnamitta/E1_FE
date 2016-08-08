import React, { Component, PropTypes } from 'react'
import TextField from 'material-ui/TextField'
import Style from '../styles'

export default class IntegerField extends Component {
  constructor(props) {
    super(props)
    this.state = { errorText: '', value: this.formatValue(this.props.data) || '' }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hasOwnProperty('data')) {
      const convertedValue = nextProps.data || ''
      this.setState({ value: this.formatValue(convertedValue) })
    }
  }

  formatValue(value) {
    return value && value.toLocaleString()
  }

  validate(e) {
    const valid = !e.target.value || /^\d+$/.test(e.target.value)
    if (valid) {
      this.setState({ errorText: '', value: e.target.value })
    } else {
      this.setState({ errorText: 'Invalid input. This is a number field' })
    }
  }
  render() {
    return (
      <TextField
        hintText={ this.props.label }
        style={ Style.root }
        id={ this.props.id }
        disabled={ this.props.disabled }
        floatingLabelText={ this.props.label }
        floatingLabelStyle={ Style.floatingLabel }
        name={ this.props.name }
        value={ this.state.value }
        underlineShow={ this.props.underlineShow }
        underlineFocusStyle={ Style.underlineFocus }
        required={ this.props.required }
        onChange={ (event) => { this.validate(event) } }
        errorText={ this.state.errorText }
        floatingLabelFixed={ this.props.disabled } />
      )
  }
}

IntegerField.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  data: PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
  style: PropTypes.object,
  underlineShow: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool
}

IntegerField.defaultProps = {
  underlineShow: true
}
