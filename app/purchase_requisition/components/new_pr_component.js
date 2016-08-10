import React, { Component, PropTypes } from 'react'
import InputField from '../../common/input_field'
import newPR from '../../common/form_fields/new_pr'
import styles from '../../styles'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import { addLineItem } from '../actions'
import LineItem from '../line_item/components/new_line_item'

const NoItemsMessage = (props) => {
  return (
    <div style={ styles.no_items_message.wrapper }>
      <div style={ styles.no_items_message.content }>
        <h1>No Line Items Available!</h1>
        <div style={ { textAlign: 'center' } }>
          <FloatingActionButton onTouchTap={ (event) => { props.dispatch(addLineItem()) } }>
            <ContentAdd />
          </FloatingActionButton>
        </div>
      </div>
    </div>
  )
}

export default class NewPRComponent extends Component {

  renderLineItem(lineItem) {
    return React.createElement(LineItem, { data: lineItem })
  }

  render() {
    const data = this.props.data
    return (
      <div className="col-1-1">
        <h2 className="col-1-1" style={ styles.formHeader }>New Purchase Requisition</h2>
        <div className="col-1-5"><InputField attrs={ newPR.title } data={ data.title } /></div>
        <div className="col-1-5"><InputField attrs={ newPR.vendor } data={ data.currency } /></div>
        <div className="col-1-5"><InputField attrs={ newPR.business_unit } data={ data.business_unit } /></div>
        <div className="col-1-5"><InputField attrs={ newPR.plant } data={ data.plant } /></div>
        <div className="col-1-5"><InputField attrs={ newPR.currency } data={ data.currency } /></div>
        <div className="col-1-1" style={ Object.assign({}, { marginTop: 20 }, styles.headerBackground) }>
          <div className="col-1-12" style={ styles.header }>
            <h3 style={ Object.assign({}, styles.formHeader, styles.innerHeader) }>Items</h3>
          </div>
          <div className="col-11-12" style={ { padding: '5px 0' } } />
        </div>
        <section className="col-1-1">
          { data.line_items.length ? data.line_items.map((lineItem, i) => this.renderLineItem(lineItem)) : <NoItemsMessage { ...this.props } /> }
        </section>
      </div>
    )
  }
}

NoItemsMessage.propTypes = {
  dispatch: PropTypes.func
}

NewPRComponent.propTypes = {
  data: PropTypes.object,
  line_items: PropTypes.array
}
