import { createSelector } from 'reselect'
import { reduce, path } from 'ramda'

const selectedCategoriesSelector = path(['catalogPage', 'selectedCategories'])

export default createSelector(
  selectedCategoriesSelector,
  (selectedCategories = []) => reduce((memo, key) => (
    path([key, 'selected'], selectedCategories) ? [...memo, key] : memo
  ), [], Object.keys(selectedCategories))
)
