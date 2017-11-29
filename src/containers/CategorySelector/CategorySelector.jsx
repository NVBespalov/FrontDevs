import React, { PureComponent } from 'react'
import { reduxForm } from 'redux-form'
import { pathOr as rPathOr } from 'ramda'
import { connect } from 'react-redux'
import CategorySelector from '../../components/CategorySelector/CategorySelector'

@reduxForm({
  form: 'categories',
  initialValues: {
    children: false,
    men: false,
    women: false
  }
})
@connect(({ form }, { form: formName }) => {
  return ({ values: rPathOr({}, [formName, 'values'], form) })
})
export default class extends PureComponent {
  render() {
    return (
      <CategorySelector {...this.props} />
    )
  }
}
