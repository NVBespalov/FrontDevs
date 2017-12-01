import React, { PureComponent } from 'react'
import ExchangeRatesPageComponentSchema from 'schemas/ExchangeRatesPageSchema'
import { connect } from 'react-redux'

import CatalogPage from './../../components/CatalogPage'
import { fetchCategories, fetchProducts } from '../../reducers/CatalogPage'
import productsByCategorySelector from '../../reducers/CatalogPage/productsByCategorySelector'

@connect(state => ({
  productsByCategory: productsByCategorySelector(state)
}), { fetchCategories, fetchProducts })
export default class ExchangeContainer extends PureComponent {
  static defaultProps = ExchangeRatesPageComponentSchema.defaultProps
  static propTypes = ExchangeRatesPageComponentSchema.propTypes
  componentWillMount() {
    this.props.fetchCategories()
      .then(this.props.fetchProducts)
  }
  render() {
    return (
      <CatalogPage {...this.props} />
    )
  }
}
