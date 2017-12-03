import React, { PureComponent } from 'react'
import pt from 'prop-types'

import Chevron from '../Chevron/'
import styles from './NavBar.styl'

const chevronStyle = { marginRight: 9, display: 'flex' }

export default class extends PureComponent {
  static defaultProps = {
    onNav: () => {}
  }
  static propTypes = {
    onNav: pt.func
  }

  render() {
    return (
      <div className={styles.navBar} onClick={this.props.onNav}>
        <Chevron mode='left' style={chevronStyle} />
        <span>{this.props.navText}</span>
      </div>
    )
  }
}
