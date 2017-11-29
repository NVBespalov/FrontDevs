import React, { PureComponent } from 'react'
import styles from './CatalogPage.styl'
import CategorySelector from '../../containers/CategorySelector'
import SortBy from '../SortBy/'

export default class extends PureComponent {
  render() {
    return (
      <div className={styles.catalogPage}>
        <CategorySelector />
        <SortBy />
      </div>
    )
  }
}
