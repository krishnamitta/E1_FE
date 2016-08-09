import React, { PropTypes } from 'react'
import Paper from 'material-ui/Paper'
import styles from '../styles'
import ActionNoteAdd from 'material-ui/svg-icons/action/note-add'


const Tile = (props) => {
  return (
    <Paper style={ styles.tile.wrapper }>
      <h1 style={ styles.tile.header }>{ props.label }</h1>
      <div style={ { position: 'relative' } }>
        <ActionNoteAdd color="#FFFFFF" style={ styles.addIcon } />
      </div>
    </Paper>
  )
}

Tile.propTypes = {
  label: PropTypes.string
}

export default Tile
