import React, { PureComponent } from 'react'
import pt from 'prop-types'

import Chevron from '../../components/Chevron'
import styles from './SortBy.styl'

export default class extends PureComponent {
  static propTypes = {
    types: pt.shape({}),
    type: pt.string,
    setSortBy: pt.func
  }
  static defaultProps = {
    types: {
      ASC: 'up',
      DESC: 'down'
    },
    type: 'DESC',
    setSortBy: () => {
    }
  }
  handleSort = () => this.props.setSortBy(this.props.type === 'DESC' ? 'ASC' : 'DESC')

  render() {
    const { types, type } = this.props
    return (<div
      className={styles.sortBy}
      onClick={this.handleSort}
    >
      <div className={styles.title} >Sort BY</div>
      <div className={styles.titleDescription}>PRICE</div>
      <Chevron mode={types[type]} />
    </div>)
  }
}
