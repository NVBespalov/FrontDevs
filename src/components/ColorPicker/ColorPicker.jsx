import React, { PureComponent } from 'react'
import pt from 'prop-types'

import styles from './ColorPicker.styl'

export default class extends PureComponent {
  static propTypes = {
    colors: pt.arrayOf(pt.string)
  }
  static defaultProps = {
    colors: []
  }

  render() {
    return (
      <div className={styles.color}>
        {this.props.colors.map(backgroundColor => (<div key={backgroundColor} className={styles.item} style={{ backgroundColor }} />))}
      </div>
    )
  }
}
