import { createSelector } from 'reselect'
import { reduce, path } from 'ramda'

const categoriesSelector = path(['catalogPage', 'categories'])

export default createSelector(
  categoriesSelector,
  (categories = []) => reduce((memo, cat) => ({ ...memo, [cat.category]: [...(memo[cat.category] || []), cat] }), {}, categories)
)
