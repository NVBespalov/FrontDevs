import React, { PureComponent } from 'react'
import pt from 'prop-types'

import CategoryTitle from '../CategoryTitle'
import NavBar from '../../containers/NavBar'
import Product from '../Product'
import styles from './ProductPage.styl'

export default class extends PureComponent {
  static defaultProps = {
    product: {}
  }
  static propTypes = {
    product: pt.shape({})
  }

  render() {
    return (
      <div className={styles.productPage}>
        <NavBar navText='BACK TO CATALOG' />
        <CategoryTitle title={this.props.product.title} style={{ margin: '19px 59px 0px 59px' }} />
        <Product {...this.props.product} />
      </div>
    )
  }
}
