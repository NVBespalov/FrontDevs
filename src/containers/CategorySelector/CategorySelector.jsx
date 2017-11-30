import React, { PureComponent } from 'react'
import { pathOr as rPathOr } from 'ramda'
import { connect } from 'react-redux'
import pt from 'prop-types'

import CategorySelector from '../../components/CategorySelector/CategorySelector'

const emptyObject = {}

const formValuesSelector = (state, { formName }) => rPathOr(emptyObject, ['from', formName, 'values'], state)


@connect((state, ownProps) => ({ values: formValuesSelector(state, ownProps) }))
export default class extends PureComponent {
  static propTypes = {
    values: pt.shape({}).isRequired
  }
  render() {
    return (
      <CategorySelector values={this.props.values} />
    )
  }
}
