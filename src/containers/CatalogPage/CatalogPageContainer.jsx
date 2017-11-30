import React, { PureComponent } from 'react'
import ExchangeRatesPageComponentSchema from 'schemas/ExchangeRatesPageSchema'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import CatalogPage from './../../components/CatalogPage'

@reduxForm({
  form: 'categories',
  initialValues: {
    children: false,
    men: false,
    women: false
  }
})
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
