import { connect } from 'react-redux'
import NewPRComponent from '../components/new_pr_component'

const mapStateToProps = (state) => {
  return {
    data: state.PurchaseRequisition,
    references: state.References
  }
}

export default connect(mapStateToProps)(NewPRComponent)
