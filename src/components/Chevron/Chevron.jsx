import React, { PureComponent } from 'react'
import pt from 'prop-types'
import cx from 'classnames'

import styles from './Chevron.styl'

export default class extends PureComponent {
  static propTypes = {
    mode: pt.string
  }
  static defaultProps = {
    mode: 'up'
  }
  render() {
    const { mode } = this.props
    return (<div className={cx(styles.chevron, { [styles[mode]]: mode })} style={{ ...this.props.style }} />)
  }
}
