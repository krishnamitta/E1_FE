import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import NewPRComponent from '../components/new_pr_component'
import { fetchVendorList } from '../../reference_data/actions'

class NewPRContainer extends Component {
  componentDidMount() {
      this.props.dispatch(fetchVendorList())
  }

  render() {
    return (
      <NewPRComponent { ...this.props } />
    )
  }
}

NewPRContainer.propTypes = {
  dispatch: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    data: state.PurchaseRequisition,
    references: state.References
  }
}

export default connect(mapStateToProps)(NewPRContainer)
