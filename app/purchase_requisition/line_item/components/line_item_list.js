import React, { Component, PropTypes } from 'react'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'


export default class LineItemList extends Component {
  renderGridHeaderColumn(header, index) {
    return (
      <TableHeaderColumn style={ { fontWeight: 600, fontSize: 13 } } key={ index }><span>{ header }</span></TableHeaderColumn>
    )
  }
  renderGridBody(row, index) {
    return (
      <TableRow>
      { Object.keys(row).map((property, i) => this.renderRowColumn(row[property], property, i)) }
      </TableRow>
    )
  }
  renderRowColumn(data, index) {
    return (
      <TableRowColumn key={ index }>
        { data }
      </TableRowColumn>
    )
  }
  render() {
    return (
      <div>
        <div className="col-1-1">
          <Table selectable={ true }>
            <TableHeader displaySelectAll={ false } adjustForCheckbox={ true }>
              <TableRow>
                { this.props.grid_headers ? this.props.grid_headers.map((header, index) => this.renderGridHeaderColumn(header, index)) : '' }
              </TableRow>
            </TableHeader>
            <TableBody showRowHover={ true } displayRowCheckbox={ true }>
              { this.props.grid_body ? this.props.grid_body.map((row, index) => this.renderGridBody(row, index)) : '' }
            </TableBody>
          </Table>
        </div>
      </div>
    )
  }
}

LineItemList.propTypes = {
  grid_headers: PropTypes.array,
  grid_body: PropTypes.array
}
