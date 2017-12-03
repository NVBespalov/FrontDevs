import React, { PureComponent } from 'react'
import pt from 'prop-types'
import memoizee from 'memoizee'

import styles from './CatalogCategory.styl'
import CategoryItem from '../CategoryItem'
import Chevron from '../Chevron'
import CategoryTitle from '../CategoryTitle'

const leftChevronStyles = { marginRight: 9, cursor: 'pointer', color: '#A99D7D' }
const rightChevronStyles = { cursor: 'pointer', color: '#A99D7D' }

export default class extends PureComponent {
  static defaultProps = {
    categoryType: '',
    categoryItems: [],
    labelRight: false,
    innerWidth: 0,
    selectedCategory: {},
    itemsToDisplay: [],
    page: 1,
    lastPage: 1,
    setSelectedCategory: () => {}
  }

  static propTypes = {
    categoryItems: pt.arrayOf(pt.shape({})),
    categoryType: pt.string,
    labelRight: pt.bool,
    innerWidth: pt.number,
    selectedCategory: pt.shape({}),
    setSelectedCategory: pt.func,
    itemsToDisplay: pt.arrayOf(pt.shape({})),
    page: pt.number,
    lastPage: pt.number
  }

  handlePageChange = memoizee(page => () => {
    this.props.setSelectedCategory({ [this.props.categoryType]: { ...this.props.selectedCategory, page } })
  })

  handleProductClick = memoizee(({ category, id }) => () => this.props.history.push(`/${category}/${id}`))

  render() {
    const {
      categoryType,
      categoryItems,
      labelRight,
      page,
      lastPage,
    } = this.props

    return (
      <div>
        <CategoryTitle labelRight={labelRight} title={categoryType} />
        <div className={styles.count}>
          <div className={styles.total}>{page || 1}/{lastPage}</div>
          <div className={styles.nav}>
            <Chevron mode='left' style={leftChevronStyles} onClick={this.handlePageChange(page - 1 || lastPage)} />
            <Chevron mode='right' style={rightChevronStyles} onClick={this.handlePageChange(page + 1 > lastPage ? 1 : page + 1)} />
          </div>
        </div>
        <div className={styles.items} >
          {categoryItems.map(categoryItem => (<div
            key={categoryItem.id}
            className={styles.wrapper}
            onClick={this.handleProductClick(categoryItem)}
          > <CategoryItem {...categoryItem} /></div>))}
        </div>
      </div>
    )
  }
}
