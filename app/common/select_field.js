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
      <MenuItem key={ index } value={ item.code } primaryText={ item.description } />
    )
  }

  handleChange(event, i, value) {
    this.setState({ value })
  }

  render() {
    return (
      <div>
        <SelectField
          name={ this.props.name }
          value={ this.state.value }
          onChange={ this.handleChange }
          style={ Style.root }
          floatingLabelStyle={ Style.floatingLabel }
          underlineFocusStyle={ Style.underlineFocus }
          floatingLabelText={ this.props.floatingLabel }
          hintText={ this.props.hintText }>
          { this.props.dataSource ? this.props.dataSource.map((item, index) => this.renderMenuItem(item, index)) : null }
        </SelectField>
      </div>
    )
  }
}
SDropdown.propTypes = {
  data: PropTypes.string,
  name: PropTypes.string,
  dataSource: PropTypes.array,
  floatingLabel: PropTypes.string,
  onChange: PropTypes.func,
  hintText: PropTypes.string
}
