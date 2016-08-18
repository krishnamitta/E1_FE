import React, { Component, PropTypes } from 'react'
import TextField from 'material-ui/TextField'
import Style from '../styles'

export default class StringField extends Component {
  constructor(props) {
    super(props)
    this.state = { value: this.props.data || '' }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data) {
      this.setState({ value: nextProps.data })
    }
  }

  handleChange(event) {
		this.setState({ value: event.target.value })
	}

  render() {
    return (
      <TextField
        name={ this.props.name }
        onChange={ (event) => this.handleChange(event) }
        className={ this.props.className }
        value={ this.state.value }
        disabled={ this.props.disabled }
        hintText={ this.props.hintText }
        floatingLabelText={ this.props.floatingLabel }
        underlineShow={ this.props.underlineShow }
        errorText={ this.props.errorText }
        style={ Style.root }
        ref={ this.props.references }
        type={ this.props.field_type || 'text' }
        floatingLabelStyle={ Style.floatingLabel }
        underlineFocusStyle={ Style.underlineFocus }
        multiLine={ this.props.multiLine } />
    )
  }
}

StringField.propTypes = {
  className: PropTypes.string,
  hintText: PropTypes.string,
  floatingLabel: PropTypes.string,
  errorText: PropTypes.string,
  data: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string,
  multiLine: PropTypes.bool,
  underlineShow: PropTypes.bool,
  field_type: PropTypes.string,
  references: PropTypes.func
}

StringField.defaultProps = {
  fullWidth: true,
  disabled: false,
  multiLine: false,
  underlineShow: true
}
