import React, { PureComponent } from 'react'
import { Field } from 'redux-form'
import Checkbox from '../Checkbox'
import styles from './CategorySelector.styl'

export default class extends PureComponent {
  render() {
    return (
      <div className={styles.categorySelector}>
        <form className={styles.categoriesForm}>
          <Checkbox title='MEN' id='men' />
          <Checkbox title='WOMEN' id='women' />
          <Checkbox title='CHILDREN' id='children' />
        </form>
        <button className={styles.showAllButton}>See All PRODUCTS</button>
      </div>
    )
  }
}
