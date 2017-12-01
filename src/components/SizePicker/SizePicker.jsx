import React, { PureComponent } from 'react'
import pt from 'prop-types'

import Chevron from '../../components/Chevron'
import styles from './SizePicker.styl'

export default class extends PureComponent {
  static defaultProps = {
    size: []
  }
  static propTypes = {
    size: pt.arrayOf(pt.string)
  }

  render() {
    return (
      <div className={styles.sizePicker}>
        <span className={styles.label}>size</span>
        {this.props.size.length > 1 ? <Chevron mode='down' /> : this.props.size[0]}
      </div>
    )
  }
}
