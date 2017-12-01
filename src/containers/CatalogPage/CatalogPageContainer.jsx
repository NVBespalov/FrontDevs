import React, { PureComponent } from 'react'
import ExchangeRatesPageComponentSchema from 'schemas/ExchangeRatesPageSchema'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import CatalogPage from './../../components/CatalogPage'
import { fetchCategories } from '../../reducers/CatalogPage'
import categoriesByTypeSelector from '../../reducers/CatalogPage/categoriesByTypeSelector'
@reduxForm({
  form: 'categories',
  initialValues: {
    children: false,
    men: false,
    women: false
  }
})
@connect(state => ({
  categoriesByType: categoriesByTypeSelector(state)
}), { fetch: fetchCategories })
export default class ExchangeContainer extends PureComponent {
  static defaultProps = ExchangeRatesPageComponentSchema.defaultProps
  static propTypes = ExchangeRatesPageComponentSchema.propTypes
  componentWillMount() {
    this.props.fetch()
  }
  render() {
    return (
      <CatalogPage {...this.props} />
    )
  }
}
