import React, { PureComponent } from 'react'
import { reduxForm } from 'redux-form'
import CategorySelector from '../../components/CategorySelector/CategorySelector'

@reduxForm({
  form: 'categories',
  onChange: (e) => {
    debugger
  }
})
export default class extends PureComponent {
  render() {
    return (
      <CategorySelector {...this.props} />
    )
  }
}
