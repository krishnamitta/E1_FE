import React from 'react'
import Tile from '../../common/tile'
import { Link } from 'react-router'
import ContentAddCircle from 'material-ui/svg-icons/content/add-circle'

import styles from '../../styles'

const DashboardComponent = () => {
  return (
    <div className="col-1-1">
      <div className="col-1-6">
        <Link to="/purchase_requisitions/new">
          <Tile label="Purchase Requisition" icon={ <ContentAddCircle color="#FFFFFF" style={ styles.tile.icon } /> } />
        </Link>
      </div>
    </div>

  )
}
export default DashboardComponent
