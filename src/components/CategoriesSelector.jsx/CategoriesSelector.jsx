import React, { PureComponent } from 'react'
import { path } from 'ramda'
import pt from 'prop-types'
import memoizee from 'memoizee'

import Checkbox from '../Checkbox'
import styles from './CategoriesSelector.styl'

export default class extends PureComponent {
  static propTypes = {
    categories: pt.arrayOf(pt.string),
    setSelected: pt.func,
    selectedCategories: pt.shape({})
  }
  static defaultProps = {
    categories: [],
    selectedCategories: {},
    setSelected: () => {
    }
  }

  handleCategorySelectionChange = memoizee(category => ({ target: { checked } }) => this.props.setSelected({ [category]: { selected: checked } }))

  render() {
    const { categories, selectedCategories } = this.props
    return (
      <div className={styles.categorySelector}>
        {categories.map(category => (
          <div
            className={styles.categoriesForm}
            key={category}
          >
            <Checkbox
              key={category}
              value={path([category, 'selected'], selectedCategories)}
              onChange={this.handleCategorySelectionChange(category)}
              label={category}
              name={category.toLowerCase()}
            />
          </div>
        ))}

        <div className={styles.seeAllContainer}>
          <button className={styles.showAllButton}>See All PRODUCTS</button>
        </div>
      </div>
    )
  }
}
