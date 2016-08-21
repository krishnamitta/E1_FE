import React, { Component, PropTypes } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Style from '../styles'

export default class SDropdown extends Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = { value: this.props.data || '' }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value) {
      this.setState({ value: nextProps.value })
    }
  }

  renderMenuItem(item, index) {
    return (
      <MenuItem key={ index } value={ item[this.props.valueField] } primaryText={ item[this.props.label] } />
    )
  }

  handleChange(event, i, value, input) {
    this.setState({ value })
    input.onChange(value)
    if (this.props.hasOwnProperty('onChange')) {
      this.props.onChange(event, i, value)
    }
  }

  render() {
    const { input, meta: { touched, error } } = this.props
    return (
      <div>
        <SelectField
          { ...input }
          value={ this.state.value }
          onChange={ (event, i, value) => this.handleChange(event, i, value, input) }
          style={ Style.root }
          errorText={ touched && error }
          floatingLabelStyle={ Style.floatingLabel }
          underlineFocusStyle={ Style.underlineFocus }
          floatingLabelText={ this.props.floatingLabel }
          hintText={ this.props.hintText }>
          { (this.props.dataSource && this.props.valueField && this.props.label) ? this.props.dataSource.map((item, index) => this.renderMenuItem(item, index)) : null }
        </SelectField>
      </div>
    )
  }
}

SDropdown.propTypes = {
  data: PropTypes.string,
  meta: PropTypes.object,
  input: PropTypes.object,
  name: PropTypes.string,
  valueField: PropTypes.string,
  label: PropTypes.string,
  dataSource: PropTypes.array,
  floatingLabel: PropTypes.string,
  onChange: PropTypes.func,
  hintText: PropTypes.string
}

SDropdown.defaultProps = {
  label: 'description',
  valueField: 'code'
}
