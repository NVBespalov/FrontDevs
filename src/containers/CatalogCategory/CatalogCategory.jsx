/* eslint-disable no-nested-ternary */
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import styles from './CatalogCategory.styl'
import CatalogCategory from '../../components/CatalogCategory'
import { setSelectedCategory } from '../../reducers/CatalogPage'

@connect(({ responsive: { innerWidth }, catalogPage: { selectedCategories } }, { categoryType, categoryItems }) => {
  const selectedCategory = selectedCategories[categoryType]
  const itemsToShow = innerWidth < 855 ? 1 : innerWidth > 855 && innerWidth < 1200 ? 2 : 3
  const { page = 1 } = selectedCategory
  const pageFromZero = page - 1
  const offset = (pageFromZero * itemsToShow)
  const itemsToDisplay = categoryItems.slice(offset, page * itemsToShow)
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
