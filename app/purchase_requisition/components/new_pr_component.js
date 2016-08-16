import React, { Component, PropTypes } from 'react'
import InputField from '../../common/input_field'
import newPR from '../../common/form_fields/new_pr'
import styles from '../../styles'
import AddLineItem from './add_line_item'
import LineItemList from '../line_item/components/line_item_list'

export default class NewPRComponent extends Component {

  noLineItems() {
    return (
      <div style={ styles.no_items_message.wrapper }>
        <div style={ styles.no_items_message.content }>
          <h1>No Line Items Available!</h1>
          <div style={ { textAlign: 'center' } }>
            { this.renderLineItemDialog() }
          </div>
        </div>
      </div>
    )
  }

  itemCount() {
    return this.props.data.line_items.length
  }

  renderLineItemDialog() {
    return <AddLineItem { ...this.props } />
  }

  renderAddLineItemBtn() {
    return (
      this.itemCount() > 0 ? this.renderLineItemDialog() : ''
    )
  }

  render() {
    const data = this.props.data
    return (
      <div className="col-1-1">
        <h2 className="col-1-1" style={ styles.formHeader }>New Purchase Requisition</h2>
        <div className="col-1-1"><InputField attrs={ newPR.title } data={ data.title } /></div>
        <div className="col-1-1" style={ Object.assign({}, { marginTop: 20 }, styles.headerBackground) }>
          <div className="col-1-12" style={ styles.header }>
            <h3 style={ Object.assign({}, styles.formHeader, styles.innerHeader) }>Items - { this.itemCount() }</h3>
          </div>
          <div className="col-11-12" style={ { padding: '5px 0', textAlign: 'right' } }>
            <span>
              { this.renderAddLineItemBtn() }
            </span>
          </div>
        </div>

        <section className="col-1-1">
          { data.line_items.length ? <LineItemList line_items={ this.props.data.line_items } /> : this.noLineItems() }
        </section>
      </div>
    )
  }
}

NewPRComponent.propTypes = {
  data: PropTypes.object,
}
