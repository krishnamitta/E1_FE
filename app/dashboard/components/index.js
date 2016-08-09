import React from 'react'
import Tile from '../../shared/components/tile'
import { Link } from 'react-router'

const DashboardComponent = () => {
  return (
    <div className="col-1-1">
      <div className="col-1-5">
        <Link to="/purchase_requisitions/new">
          <Tile label="Purchase Requisition" />
        </Link>
      </div>
      <div className="col-1-5">
        <Link to="/purchase_requisitions/new">
          <Tile label="Purchase Order" />
        </Link>
      </div>
    </div>

  )
}
export default DashboardComponent
