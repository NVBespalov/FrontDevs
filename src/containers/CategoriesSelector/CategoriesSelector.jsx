import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import CategoriesSelector from '../../components/CategoriesSelector.jsx/CategoriesSelector'
import { setSelectedCategory } from '../../reducers/CatalogPage'

@connect(({ catalogPage: { categories, selectedCategories } }) => ({ categories, selectedCategories }), { setSelected: setSelectedCategory })
export default class extends PureComponent {
  render() {
    return (
      <CategoriesSelector {...this.props} />
    )
  }
}
