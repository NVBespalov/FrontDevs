/* eslint-disable no-nested-ternary */
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import memoize from 'memoizee'

import styles from './CatalogCategory.styl'
import CatalogCategory from '../../components/CatalogCategory'
import { setSelectedCategory } from '../../reducers/CatalogPage'

const byPrice = memoize(reversed => (a, b) => {
  const priceA = parseFloat(a.price)
  const priceB = parseFloat(b.price)
  return reversed * ((priceA > priceB) - (priceB > priceA))
})

@connect(({ responsive: { innerWidth }, catalogPage: { selectedCategories, sortBy } }, { categoryType, categoryItems }) => {
  const selectedCategory = selectedCategories[categoryType]
  const itemsToShow = innerWidth < 855 ? 1 : innerWidth > 855 && innerWidth < 1200 ? 2 : 3
  const { page = 1 } = selectedCategory
  const pageFromZero = page - 1
  const offset = (pageFromZero * itemsToShow)
  const reverse = sortBy === 'ASC' ? 1 : -1

  const itemsToDisplay = categoryItems.sort(byPrice(reverse)).slice(offset, page * itemsToShow)
  const lastPage = categoryItems.length / itemsToShow

  return ({
    innerWidth,
    selectedCategory,
    categoryItems: itemsToDisplay,
    lastPage,
    page

  })
}, { setSelectedCategory })
export default class extends PureComponent {
  render() {
    return (
      <div className={styles.catalogCategory}>
        <CatalogCategory {...this.props} />
      </div>
    )
  }
}
