import React, { PureComponent } from 'react'
import pt from 'prop-types'

import styles from './CategoryLitle.styl'

export default class extends PureComponent {
  static defaultProps = {
    title: '',
    labelRight: false,
    style: {}
  }
  static propTypes = {
    title: pt.string,
    labelRight: pt.bool,
    style: {}
  }

  render() {
    const { labelRight, style } = this.props
    const label = <span className={styles.title}>{this.props.title}</span>
    return (
      <div className={styles.categoryTitle} style={style}>{!labelRight && label}
        <hr className={styles.delimiter} />{labelRight && label}
      </div>
    )
  }
}
