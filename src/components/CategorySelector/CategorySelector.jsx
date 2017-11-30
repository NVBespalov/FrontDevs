import React, { PureComponent } from 'react'
import pt from 'prop-types'
import { Field } from 'redux-form'

import Checkbox from '../Checkbox'
import styles from './CategorySelector.styl'

export default class extends PureComponent {
  static propTypes = {
    values: pt.shape({})
  }
  static defaultProps = {
    values: {}
  }

  renderField = ({ input: { name, onChange, value }, label }) => (
    <Checkbox value={value} onChange={onChange} label={label} name={name} />
  )

  render() {
    const { values } = this.props
    return (
      <div className={styles.categorySelector}>
        <form className={styles.categoriesForm}>
          <Field value={values.men} name='men' component={this.renderField} label='MEN' />
          <Field value={values.women} name='women' component={this.renderField} label='WOMEN' />
          <Field value={values.children} name='children' component={this.renderField} label='CHILDREN' />
        </form>
        <div className={styles.seeAllContainer}>
          <button className={styles.showAllButton}>See All PRODUCTS</button>
        </div>
      </div>
    )
  }
}
