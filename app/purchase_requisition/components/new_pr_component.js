import React from 'react'
import InputField from '../../common/input_field'
import newPR from '../../common/form_fields/new_pr'
import styles from '../../styles'
import IconButton from 'material-ui/IconButton'
import ContentAddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline'

const NoItemsMessage = () => {
  return (
    <div style={ styles.no_items_message.wrapper }>
      <div style={ styles.no_items_message.content }>
        <h1>No Items available, click add</h1>
        <div style={ { textAlign: 'center' } }>
          <IconButton primary={ true } style={ { width: 40, height: 40 } }>
            <ContentAddCircleOutline style={ { width: 40, height: 40, color: '#c1c1c1' } } />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

const NewPRComponent = (props) => {
  return (
    <div className="col-1-1">
      <h2 className="col-1-1" style={ styles.formHeader }>New Purchase Requisition</h2>
      <div className="col-1-5"><InputField attrs={ newPR.title } data={ props.data.title } /></div>
      <div className="col-1-5"><InputField attrs={ newPR.vendor } data={ props.data.currency } /></div>
      <div className="col-1-5"><InputField attrs={ newPR.business_unit } data={ props.data.business_unit } /></div>
      <div className="col-1-5"><InputField attrs={ newPR.plant } data={ props.data.plant } /></div>
      <div className="col-1-5"><InputField attrs={ newPR.currency } data={ props.data.currency } /></div>
      <div className="col-1-1" style={ Object.assign({}, { marginTop: 20 }, styles.headerBackground) }>
        <div className="col-1-12" style={ styles.header }>
          <h3 style={ Object.assign({}, styles.formHeader, styles.innerHeader) }>Items</h3>
        </div>
        <div className="col-11-12" style={ { padding: '5px 0' } } />
      </div>
      <section className="col-1-1">
        { props.items ? '' : <NoItemsMessage /> }
      </section>
    </div>
  )
}

NewPRComponent.propTypes = {
  data: React.PropTypes.object,
  items: React.PropTypes.array
}

export default NewPRComponent
