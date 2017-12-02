import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import styles from './CatalogCategory.styl'
import CatalogCategory from '../../components/CatalogCategory'
import { setSelectedCategory } from '../../reducers/CatalogPage'

@connect(({ responsive, catalogPage: { selectedCategories } }, { categoryType }) => ({
  innerWidth: responsive.innerWidth,
  selectedCategory: selectedCategories[categoryType]

}), { setSelectedCategory })
export default class extends PureComponent {
  render() {
    return (
      <div className={styles.catalogCategory}>
        <CatalogCategory {...this.props} />
      </div>
    )
  }
}
