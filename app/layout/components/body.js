import React, { Component } from 'react'
import styles from '../../styles.js'

export default class Body extends Component {
  render() {
    return (
      <section className="wrapper" style={ styles.wrapper }>
        { this.props.data }
      </section>
    )
  }
}

Body.propTypes = {
  data: React.PropTypes.object
}
