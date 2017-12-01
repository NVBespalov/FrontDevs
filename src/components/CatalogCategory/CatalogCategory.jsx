import React, { PureComponent } from 'react'
import pt from 'prop-types'

import styles from './CatalogCategory.styl'
import CategoryItem from '../../components/CategoryItem'
import Chevron from '../../components/Chevron'

export default class extends PureComponent {
  static defaultProps = {
    categoryType: '',
    categoryItems: []
  }

  static propTypes = {
    categoryItems: pt.arrayOf(pt.shape({})),
    categoryType: pt.string
  }

  render() {
    const { categoryType, categoryItems } = this.props
    return (
      <div>
        <div className={styles.categoryTitle}><span className={styles.title}>{categoryType}</span> <hr className={styles.delimiter} /></div>
        <div className={styles.count}>
          <div className={styles.total}>1/{categoryItems.length}</div>
          <div className={styles.nav}>
            <Chevron mode='left' />
            <Chevron mode='right' />
          </div>
        </div>
        <div className={styles.items}>
          {categoryItems.map(categoryItem => (<div key={categoryItem.id} className={styles.wrapper}> <CategoryItem {...categoryItem} /></div>))}
        </div>
      </div>
    )
  }
}
