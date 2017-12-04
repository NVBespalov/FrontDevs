import React, { PureComponent } from 'react'
import pt from 'prop-types'

import CategoryTitle from '../CategoryTitle'
import NavBar from '../../containers/NavBar'
import Product from '../Product'
import styles from './ProductPage.styl'
import TopLogo from '../TopLogo'

const categoryTitleStyle = {
  marginTop: 72,
  fontSize: 20,
  fontWeight: 'bold'
}

const productStyle = { margin: '79px 8px' }

export default class extends PureComponent {
  static defaultProps = {
    product: {}
  }
  static propTypes = {
    product: pt.shape({
      title: pt.string
    })
  }

  render() {
    return (
      <div className={styles.productPage}>
        <TopLogo />
        <NavBar navText='BACK TO CATALOG' />
        <div className={styles.mainSectionWrapper}>
          <CategoryTitle title={this.props.product.title} style={categoryTitleStyle} />
          <Product {...this.props.product} style={productStyle} />
        </div>
      </div>
    )
  }
}
