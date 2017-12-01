import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import CategoriesSelector from '../../components/CategoriesSelector.jsx/CategoriesSelector'
import { setSelected } from '../../reducers/CatalogPage'

@connect(({ catalogPage: { categories, selectedCategories } }) => ({ categories, selectedCategories }), { setSelected })
export default class extends PureComponent {
  render() {
    return (
      <CategoriesSelector {...this.props} />
    )
  }
}
