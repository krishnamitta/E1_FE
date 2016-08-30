import React, { PropTypes } from 'react'
import Subheader from 'material-ui/Subheader'
import { List, ListItem } from 'material-ui/List'

import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import { grey400 } from 'material-ui/styles/colors'

const color = 'rgb(7, 52, 116)'

const style = {
  container: { height: '65%', borderLeft: '1px solid #c1c1c1' },
  subheader: { backgroundColor: '#F1F1F1', padding: '0px 10px', color, fontSize: 15, marginTop: 1 }
}

const renderLineItem = (lineItem, index) => {
  const iconButtonElement = (
    <IconButton
      touch={ true }
      tooltip="more"
      style={ { position: 'relative', left: '-11px' } }
      tooltipPosition="bottom-left">
      <MoreVertIcon color={ grey400 } />
    </IconButton>
  )

  const IconMenuList = (
    <IconMenu style={ { margin: 0, left: 0 } } iconButtonElement={ iconButtonElement }>
      <MenuItem>Edit</MenuItem>
      <MenuItem>Clone</MenuItem>
      <MenuItem>Delete</MenuItem>
    </IconMenu>
  )
  return <ListItem key={ index } leftIcon={ IconMenuList } primaryText={ lineItem.material_description || lineItem.plant } />
}

const LineItemSidebar = (props) => {
  return (
    <section style={ style.container }>
      <List>
        <Subheader style={ style.subheader }>Line Items</Subheader>
        { props.lineItems.length ? props.lineItems.map((lineItem, i) => renderLineItem(lineItem, i)) :
          <p style={ { padding: '0 10px', fontSize: 14 } }>No Line Items available.</p> }
      </List>
    </section>
  )
}
LineItemSidebar.propTypes = {
  lineItems: PropTypes.array
}
export default LineItemSidebar
