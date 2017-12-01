import React, { PureComponent } from 'react'
import { pathOr as rPathOr } from 'ramda'
import { connect } from 'react-redux'
import pt from 'prop-types'

import CategoriesSelector from '../../components/CategoriesSelector.jsx/CategoriesSelector'

@connect(({ catalogPage: { categories } }) => ({ categories }))
export default class extends PureComponent {
  static propTypes = {
    categories: pt.shape({}).isRequired
  }
  render() {
    return (
      <CategoriesSelector categories={this.props.categories} />
    )
  }
}
