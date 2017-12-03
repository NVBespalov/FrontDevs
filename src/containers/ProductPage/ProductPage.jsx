import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import ProductPage from '../../components/ProductPage'
import { fetchProduct } from '../../reducers/ProductPage'

@connect(({ productPage: { product } }) => ({ product }), { fetchProduct })
export default withRouter(class extends PureComponent {
  componentDidMount() {
    const { match: { params: { slug, productId } } } = this.props
    this.props.fetchProduct({ category: slug, id: productId })
  }
  render() {
    return (
      <ProductPage {...this.props} />
    )
  }
})
