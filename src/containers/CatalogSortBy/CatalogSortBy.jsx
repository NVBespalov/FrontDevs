import React, { PureComponent } from 'react'
import pt from 'prop-types'
import { connect } from 'react-redux'

import SortBy from '../../components/SortBy'
import { setSortBy } from '../../reducers/CatalogPage'
import styles from './CatalogSortBy.styl'

@connect(({ catalogPage: { sortBy } }) => ({ sortBy }), { setSortBy })
export default class extends PureComponent {
  static propTypes = {
    sortBy: pt.string,
    setSortBy: pt.func
  }
  static defaultProps = {
    sortBy: 'DESC',
    setSortBy: () => {}
  }
  render() {
    return (<div className={styles.catalogSortByContainer}><SortBy type={this.props.sortBy} setSortBy={this.props.setSortBy} /></div>)
  }
}
