import React, { PureComponent } from 'react'
import ExchangeRatesPageComponentSchema from 'schemas/ExchangeRatesPageSchema'
import { connect } from 'react-redux'
import CatalogPage from './../../components/CatalogPage'

@connect(() => ({}), {})
export default class ExchangeContainer extends PureComponent {
  static defaultProps = ExchangeRatesPageComponentSchema.defaultProps

  static propTypes = ExchangeRatesPageComponentSchema.propTypes

  render() {
    return (
      <CatalogPage {...this.props} />
    )
  }
}
