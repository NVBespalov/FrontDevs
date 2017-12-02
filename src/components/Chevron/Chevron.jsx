import React, { PureComponent } from 'react'
import pt from 'prop-types'
import cx from 'classnames'

import styles from './Chevron.styl'

export default class extends PureComponent {
  static propTypes = {
    mode: pt.string,
    onClick: pt.func,
    style: pt.shape({})
  }
  static defaultProps = {
    mode: 'up',
    onClick: () => {
    },
    style: {}
  }

  render() {
    const { mode, onClick, style } = this.props
    return (
      <button
        onClick={onClick}
        className={cx(styles.chevron, { [styles[mode]]: mode })}
        style={{ ...style }}
      />)
  }
}
