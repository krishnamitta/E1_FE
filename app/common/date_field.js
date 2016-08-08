import React from 'react'
import BaseComponent from './base_component.js'
import TextField from 'material-ui/TextField'

export default class DateField extends BaseComponent {
  render() {
    <TextField
      name={ this.props.name }
      id={ this.props.elementId }
      hintText={ this.props.hintText }
      value={ this.state.value }
    />
  }
}
