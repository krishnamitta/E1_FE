import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import NewPRComponent from '../components/new_pr_component'
import { fetchVendorList, fetchCurrencies } from '../../reference_data/actions'

class NewPRContainer extends Component {
  componentDidMount() {
      this.props.dispatch(fetchVendorList())
      this.props.dispatch(fetchCurrencies())
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
    data: {},
    references: state.References
  }
}

export default connect(mapStateToProps)(NewPRContainer)
