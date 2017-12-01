/* eslint-disable no-nested-ternary */
import React, { PureComponent } from 'react'
import pt from 'prop-types'

import styles from './CatalogCategory.styl'
import CategoryItem from '../CategoryItem'
import Chevron from '../Chevron'
import CategoryTitle from '../CategoryTitle'

export default class extends PureComponent {
  static defaultProps = {
    categoryType: '',
    categoryItems: [],
    labelRight: false,
    innerWidth: 0
  }

  static propTypes = {
    categoryItems: pt.arrayOf(pt.shape({})),
    categoryType: pt.string,
    labelRight: pt.bool,
    innerWidth: pt.number
  }

  render() {
    const {
      categoryType,
      categoryItems,
      labelRight,
      innerWidth
    } = this.props
    const itemsToShow = innerWidth < 855 ? 1 : innerWidth > 855 && innerWidth < 1200 ? 2 : 3
    const itemsToDispaly = categoryItems.slice(0, itemsToShow)
    return (
      <div>
        <CategoryTitle labelRight={labelRight} title={categoryType} />
        <div className={styles.count}>
          <div className={styles.total}>1/{categoryItems.length}</div>
          <div className={styles.nav}>
            <Chevron mode='left' />
            <Chevron mode='right' />
          </div>
        </div>
        <div className={styles.items}>
          {itemsToDispaly.map(categoryItem => (<div key={categoryItem.id} className={styles.wrapper}> <CategoryItem {...categoryItem} /></div>))}
        </div>
      </div>
    )
  }
}
