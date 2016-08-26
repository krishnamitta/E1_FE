import { connect } from 'react-redux'
import NewLineItem from '../components/new_line_item'
import { formValueSelector } from 'redux-form'

const selector = formValueSelector('LineItem')

const mapStateToProps = (state) => {
  const isItemPresent = selector(state, 'material_not_found')
  return {
    isItemPresent
  }
}

export default connect(mapStateToProps)(NewLineItem)
