import React, { Component } from 'react'
import { connect } from 'react-redux'
import LineItemComponent from '../../components/new_pr_component'

class LineItemContainer extends Component {
  render(){
    return (
      <LineItemComponent { ...this.props } />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: {}
  }
}

export default connect(mapStateToProps)(LineItemContainer)
