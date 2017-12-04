import React, { PureComponent } from 'react'
import pt from 'prop-types'

import Chevron from '../../components/Chevron'
import styles from './SizePicker.styl'

export default class extends PureComponent {
  static defaultProps = {
    size: [],
    noDropDown: false,
    label: 'size',
    labelRight: false
  }
  static propTypes = {
    size: pt.arrayOf(pt.string),
    noDropDown: pt.bool,
    labelRight: pt.bool,
    label: pt.string
  }

  render() {
    const {
      labelRight, noDropDown, label, size
    } = this.props
    return (
      <div className={styles.sizePicker}>
        {!labelRight && <span className={styles.label}>{label}</span>}
        {!noDropDown && size.length > 1 && <Chevron mode='down' />}
        {!noDropDown && size.length === 1 && size[0]}
        {noDropDown && size.length > 0 && size.join(',')}
        {labelRight && <span className={styles.label}>{label}</span>}
      </div>
    )
  }
}
