import React, { Component, PropTypes } from 'react'
import Griddle from 'griddle-react'
import styles from '../../../styles'
import LineItemBtn from '../../components/add_line_item'
import ColumnMetaData from './ColumnMetaData'

const NoDataComponent = () => (
  <div style={ styles.no_items_message.wrapper }>
    <div style={ styles.no_items_message.content }>
      <h1>No Line Items Available!</h1>
      <div style={ { textAlign: 'center' } }>
        <LineItemBtn />
      </div>
    </div>
  </div>
)

export default class LineItemList extends Component {

  render() {
    return (
      <div className="col-1-1" style={ { marginTop: 10 } }>
        <Griddle results={ this.props.line_items } columnMetadata={ ColumnMetaData }
          tableClassName="table"
          showFilter={ false }
          useGriddleStyles={ false }
          resultsPerPage={ 20 }
          useFixedHeader
          bodyHeight={ 450 }
          enableInfiniteScroll={ true }
          customNoDataComponent={ NoDataComponent }
          sortAscendingComponent={ <span className="fa fa-sort-alpha-asc"></span> }
          sortDescendingComponent={ <span className="fa fa-sort-alpha-desc"></span> }
          columns={ ['plant', 'business_unit', 'material_name', 'material_group', 'quantity', 'price', 'expected_deliver_date'] } />
      </div>
    )
  }
}

LineItemList.propTypes = {
  line_items: PropTypes.array
}
