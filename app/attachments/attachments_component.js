import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import AttachmentIcon from 'material-ui/svg-icons/file/attachment'

import styles from './styles'

export default class AttachmentComponent extends Component {
  render() {
    return (
      <div className="attachmentsComponent" style={ styles.attachmentsBtn }>
        <div style={ styles.container }>
          <RaisedButton label="Attachments" backgroundColor="rgb(82,82,78)" labelColor="#F1F1F1" icon={ <AttachmentIcon /> } />
        </div>
      </div>
    )
  }
}
