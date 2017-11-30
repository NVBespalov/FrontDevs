import React, { PureComponent } from 'react'

import styles from './CategoryItem.styl'

export default class extends PureComponent {
  render() {
    return (
      <div className={styles.categoryItem}>
        <div>
          size
        </div>
        <div>color</div>
        <img alt='t-shirt' />
        <div>
          T-shirt
          5$
        </div>
      </div>
    )
  }
}
