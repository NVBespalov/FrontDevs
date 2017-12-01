import React, { PureComponent } from 'react'
import pt from 'prop-types'

import styles from './CatalogPage.styl'
import CategoriesSelector from '../../containers/CategoriesSelector'
import SortBy from '../../containers/CatalogSortBy'
import CatalogCategory from '../../containers/CatalogCategory'

export default class extends PureComponent {
  static propTypes = {
    productsByCategory: pt.shape({})
  }
  static defaultProps = {
    productsByCategory: {}
  }

  render() {
    const { productsByCategory } = this.props
    return (
      <div className={styles.catalogPage}>
        <CategoriesSelector />
        <div className={styles.feed}>
          <SortBy />
          {Object.keys(productsByCategory).map((categoryType, i) => (
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
