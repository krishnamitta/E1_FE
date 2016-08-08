import React from 'react'
import Tile from '../../shared/components/tile'
import { Link } from 'react-router'

const DashboardComponent = () => {
  return (
    <div className="col-1-1">
      <Link to="/">
        <Tile />
      </Link>

    </div>

  )
}
export default DashboardComponent
