import { connect } from 'react-redux'
import LineItemSiderbarComponent from '../components/lineItemSidebar'

const mapStateToProps = (state) => {
  return {
    lineItems: state.form.PurchaseRequisition.line_items
  }
}

export default connect(mapStateToProps)(LineItemSiderbarComponent)
