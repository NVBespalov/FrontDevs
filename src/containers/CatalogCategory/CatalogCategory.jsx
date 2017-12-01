import React, { PureComponent } from 'react'

import styles from './CatalogCategory.styl'
import CatalogCategory from '../../components/CatalogCategory'

export default class extends PureComponent {
  render() {
    return (
      <div className={styles.catalogCategory}>
        <CatalogCategory {...this.props} />
      </div>
    )
  }
}
