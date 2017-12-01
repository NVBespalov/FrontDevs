import React, { PureComponent } from 'react'
import pt from 'prop-types'

import styles from './CatalogPage.styl'
import CategorySelector from '../../containers/CategorySelector'
import SortBy from '../../containers/CatalogSortBy'
import CatalogCategory from '../../containers/CatalogCategory'

export default class extends PureComponent {
  static propTypes = {
    form: pt.string.isRequired,
    categoriesByType: pt.shape({})
  }
  static defaultProps = {
    categoriesByType: {}
  }

  render() {
    const { form: formName, categoriesByType } = this.props
    return (
      <div className={styles.catalogPage}>
        <CategorySelector formName={formName} />
        <SortBy />
        {Object.keys(categoriesByType).map(categoryType => (<CatalogCategory key={categoryType} categoryType={categoryType} categoryItems={categoriesByType[categoryType]} />))}
      </div>
    )
  }
}
