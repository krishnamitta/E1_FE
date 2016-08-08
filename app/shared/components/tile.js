import React from 'react'
import Paper from 'material-ui/Paper'
import styles from '../../styles'
import ActionNoteAdd from 'material-ui/svg-icons/action/note-add'


const Tile = () => {
  return (
    <div className="col-1-4">
      <Paper style={ styles.tile }>
        <h1>Purchase Requisition</h1>
        <ActionNoteAdd color="#FFFFFF" style={ styles.addIcon } />
      </Paper>
    </div>
  )
}

export default Tile
