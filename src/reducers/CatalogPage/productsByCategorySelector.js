import { createSelector } from 'reselect'
import { reduce, path } from 'ramda'

const productsSelector = path(['catalogPage', 'products'])

export default createSelector(
  productsSelector,
  (products = []) => reduce((memo, product) => ({
    ...memo,
    [product.category]: [...(memo[product.category] || []), product]
  }), {}, products)
)
