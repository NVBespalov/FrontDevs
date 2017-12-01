import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import styles from './CatalogCategory.styl'
import CatalogCategory from '../../components/CatalogCategory'

@connect(({ responsive }) => ({
  innerWidth: responsive.innerWidth
}))
export default class extends PureComponent {
  render() {
    return (
      <div className={styles.catalogCategory}>
        <CatalogCategory {...this.props} />
      </div>
    )
  }
}
