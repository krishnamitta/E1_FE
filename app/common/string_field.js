import React, { Component, PropTypes } from 'react'
import TextField from 'material-ui/TextField'
import Style from '../styles'

class StringField extends Component {

  constructor(props) {
    super(props)
    this.state = { value: this.props.data || '' }
  }

  componentWillReceiveProps(nextProps) {
    this.state.value = nextProps.data
    console.log('string field next props..', nextProps)
  }

  render() {
    const { input, floatingLabel, meta: { touched, error }, ...custom } = this.props
    return (
      <TextField hintText={ floatingLabel }
        floatingLabelText={ floatingLabel }
        className={ custom.className }
        disabled={ custom.disabled }
        onBlur={ (event) => input.onBlur(event) }
        errorText={ touched && error }
        underlineShow={ custom.underlineShow }
        style={ Style.root }
        floatingLabelStyle={ Style.floatingLabel }
        underlineFocusStyle={ Style.underlineFocus }
        multiLine={ custom.multiLine }
        { ...custom } />
    )
  }
}

StringField.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
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

export default StringField
