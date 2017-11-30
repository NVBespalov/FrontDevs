import React, { PureComponent } from 'react'

import styles from './CatalogCategory.styl'
import CategoryItem from '../../components/CategoryItem'

export default class extends PureComponent {
  render() {
    return (
      <div>
        <div className={styles.categoryTitle}><span className={styles.title}>MEN</span> <hr className={styles.delimiter} /></div>
        <div className={styles.count}>
          <div>1/5</div>
          <div className={styles.nav} />
        </div>
        <div className={styles.items}>
          <div className={styles.wrapper}> <CategoryItem /></div>
          <div className={styles.wrapper}> <CategoryItem /></div>
          <div className={styles.wrapper}> <CategoryItem /></div>
        </div>
      </div>
    )
  }
}
