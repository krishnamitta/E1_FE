import React, { Component, PropTypes } from 'react'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'

const headerStyle = {
  fontWeight: 600, fontSize: 13
}
export default class LineItemList extends Component {

  renderGridBody(lineItem, index) {
    return (
      <TableRow key={ index }>
        <TableRowColumn>{ lineItem.plant }</TableRowColumn>
        <TableRowColumn>{ lineItem.business_unit }</TableRowColumn>
        <TableRowColumn>{ lineItem.material }</TableRowColumn>
        <TableRowColumn>{ lineItem.quantity }</TableRowColumn>
        <TableRowColumn>{ lineItem.price }</TableRowColumn>
        <TableRowColumn>{ lineItem.expected_deliver_date }</TableRowColumn>
      </TableRow>
    )
  }

  render() {
    return (
      <div>
        <div className="col-1-1">
          <Table selectable={ true }>
            <TableHeader displaySelectAll={ false } adjustForCheckbox={ true }>
              <TableRow>
                <TableHeaderColumn style={ headerStyle }><span>Plant</span></TableHeaderColumn>
                <TableHeaderColumn style={ headerStyle }><span>Business Unit</span></TableHeaderColumn>
                <TableHeaderColumn style={ headerStyle }><span>Material</span></TableHeaderColumn>
                <TableHeaderColumn style={ headerStyle }><span>Quantity</span></TableHeaderColumn>
                <TableHeaderColumn style={ headerStyle }><span>Price</span></TableHeaderColumn>
                <TableHeaderColumn style={ headerStyle }><span>Expected Delivery Date</span></TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody showRowHover={ true } displayRowCheckbox={ true }>
              { this.props.line_items.length ? this.props.line_items.map((lineItem, index) => this.renderGridBody(lineItem, index)) : '' }
            </TableBody>
          </Table>
        </div>
      </div>
    )
  }
}

LineItemList.propTypes = {
  line_items: PropTypes.array
}
