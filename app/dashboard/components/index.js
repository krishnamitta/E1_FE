import React from 'react'
import Tile from '../../common/tile'
import { Link } from 'react-router'
import ActionNoteAdd from 'material-ui/svg-icons/action/note-add'
import ContentAddCircle from 'material-ui/svg-icons/content/add-circle'

import styles from '../../styles'

const DashboardComponent = () => {
  return (
    <div className="col-1-1">
      <div className="col-1-5">
        <Link to="/purchase_requisitions/new">
          <Tile label="Purchase Requisition" icon={ <ActionNoteAdd color="#FFFFFF" style={ styles.addIcon } /> } />
        </Link>
      </div>
      <div className="col-1-5">
        <Link to="/purchase_requisitions/new">
          <Tile label="Purchase Order" icon={ <ContentAddCircle color="#FFFFFF" style={ styles.addIcon } /> } />
        </Link>
      </div>
    </div>

  )
}
export default DashboardComponent
