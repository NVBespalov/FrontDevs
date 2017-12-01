import React, { PureComponent } from 'react'
import pt from 'prop-types'

import styles from './CatalogPage.styl'
import CategoriesSelector from '../../containers/CategoriesSelector'
import SortBy from '../../containers/CatalogSortBy'
import CatalogCategory from '../../containers/CatalogCategory'

export default class extends PureComponent {
  static propTypes = {
    productsByCategory: pt.shape({}),
    selectedCategories: pt.arrayOf(pt.string)
  }
  static defaultProps = {
    productsByCategory: {},
    selectedCategories: {}
  }

  render() {
    const { productsByCategory, selectedCategories } = this.props
    return (
      <div className={styles.catalogPage}>
        <CategoriesSelector />
        <div className={styles.feed}>
          <SortBy />
          {Object.keys(productsByCategory).filter(key => selectedCategories.indexOf(key) !== -1).map((categoryType, i) => (
            <CatalogCategory
              key={categoryType}
              labelRight={i % 2 !== 0}
              categoryType={categoryType}
              categoryItems={productsByCategory[categoryType]}
            />
          ))}
        </div>
      </div>
    )
  }
}
