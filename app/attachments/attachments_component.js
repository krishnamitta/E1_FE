import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import IconButton from 'material-ui/IconButton'
import CloseIcon from 'material-ui/svg-icons/navigation/close'
import AttachmentIcon from 'material-ui/svg-icons/file/attachment'
import Paper from 'material-ui/Paper'
import styles from './styles'

const bgColor = 'rgb(7, 52, 116)'

export default class AttachmentComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  attachmentHolder() {
    return (
      <Paper style={ { height: 500, width: 650, right: 0 } } zDepth={ 1 }>
        <div style={ { backgroundColor: '#F1F1F1', padding: '0px 10px' } } className="col-1-1">
          <h4 className="col-11-12" style={ styles.subheader }>Attachments</h4>
          <section className="col-1-12">
            <IconButton tooltip="Close" onClick={ (event) => this.closeAttachmentHolder() }>
              <CloseIcon color={ bgColor } />
            </IconButton>
          </section>
          <section className="attachmentsList"></section>
          <section className="col-1-12" style={ { position: 'absolute', bottom: 10, right: 0 } }>
            <FloatingActionButton backgroundColor={ bgColor } mini={ true }>
              <AttachmentIcon />
            </FloatingActionButton>
          </section>
        </div>
      </Paper>
    )
  }

  closeAttachmentHolder() {
    this.setState({ open: false })
  }

  openAttachmentHolder() {
    this.setState({ open: true })
  }

  render() {
    return (
      <div className="attachmentsComponent" >
        <div style={ styles.attachmentsBtn }>
          <div style={ styles.container }>
            <RaisedButton label="Attachments" onClick={ (event) => this.openAttachmentHolder() }
              backgroundColor="rgb(82,82,78)" labelColor="#F1F1F1" icon={ <AttachmentIcon /> } />
          </div>
        </div>
        <div style={ { position: 'absolute', bottom: 2 } }>
          { this.state.open ? this.attachmentHolder() : '' }
        </div>
      </div>
    )
  }
}
