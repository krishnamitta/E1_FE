import React, { Component, PropTypes } from 'react'
import TextField from 'material-ui/TextField'
import Style from '../styles'

export default class DecimalField extends Component {
  constructor(props) {
    super(props)
    this.state = { errorText: '', value: this.formatValue(this.props.data) || 0 }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data) {
      this.setState({ value: this.formatValue(nextProps.data) })
    }
  }

  formatValue(value) {
    return value && value.toLocaleString()
  }

  validate(e) {
    const value = e.target.value
    if (!value || /^\d+$/.test(value)) {
      this.setState({ errorText: '', value })
    } else {
      this.setState({ errorText: 'Invalid value', value })
    }
  }

  render() {
    return (
      <TextField
        style={ Style.root }
        disabled={ this.props.disabled }
        floatingLabelText={ this.props.floatingLabel }
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

DecimalField.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  data: PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
  style: PropTypes.object,
  underlineShow: PropTypes.bool,
  floatingLabel: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool
}

DecimalField.defaultProps = {
  underlineShow: true
}
