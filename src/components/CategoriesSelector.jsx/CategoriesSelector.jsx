import React, { PureComponent } from 'react'
import { path, filter } from 'ramda'
import pt from 'prop-types'
import memoizee from 'memoizee'

import Checkbox from '../Checkbox'
import styles from './CategoriesSelector.styl'

const setCategorySelection = (categoryName, category, selected) => ({ [categoryName]: { ...category, selected } })

const getNotSelected = (selectedCategories, categories) => filter(categoryName => !path([categoryName, 'selected'], selectedCategories), categories)

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

  handleCategorySelectionChange = memoizee(categoryName => ({ target: { checked } }) =>
    this.props.setSelected(setCategorySelection(categoryName, this.props.selectedCategories[categoryName], checked)))

  handleSeeAll = () => {
    const notSelected = getNotSelected(this.props.selectedCategories, this.props.categories)
    return notSelected.forEach(categoryName =>
      this.props.setSelected(setCategorySelection(categoryName, this.props.selectedCategories[categoryName], true)))
  }

  render() {
    const { categories, selectedCategories } = this.props
    const notSelected = getNotSelected(selectedCategories, categories)
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
          <button disabled={notSelected.length === 0} onClick={this.handleSeeAll} className={styles.showAllButton}>See All PRODUCTS</button>
        </div>
      </div>
    )
  }
}
