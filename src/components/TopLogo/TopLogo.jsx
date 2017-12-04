import React, { PureComponent } from 'react'

import styles from './TopLogo.styl'

export default class extends PureComponent {
  render() {
    return (
      <div className={styles.topLogo}>
        <img src='/assets/images/GOOGLE.png' alt='google' />
      </div>
    )
  }
}
