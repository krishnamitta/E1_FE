import { connect } from 'react-redux'
import NewLineItem from '../components/new_line_item'

const mapStateToProps = (state) => {
  return {
    references: state.Referencedata,
    data: state.LineItem
  }
}

export default connect(mapStateToProps)(NewLineItem)
