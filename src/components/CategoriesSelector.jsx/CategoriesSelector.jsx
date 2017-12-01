import React, { PureComponent } from 'react'
import pt from 'prop-types'
import { Field } from 'redux-form'

import Checkbox from '../Checkbox'
import styles from './CategoriesSelector.styl'

export default class extends PureComponent {
  static propTypes = {
    categories: pt.arrayOf(pt.string)
  }
  static defaultProps = {
    categories: []
  }

  render() {
    const { categories } = this.props
    return (
      <div className={styles.categorySelector}>
        {categories.map(category => (<Checkbox value onChange={() => {}} label={category} name={category.toLowerCase()} />))}

        <div className={styles.seeAllContainer}>
          <button className={styles.showAllButton}>See All PRODUCTS</button>
        </div>
      </div>
    )
  }
}
