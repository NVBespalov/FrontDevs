import React, { PureComponent } from 'react'
import pt from 'prop-types'

import ColorPicker from '../../components/ColorPicker'
import SizePicker from '../../components/SizePicker'
import styles from './CategoryItem.styl'

export default class extends PureComponent {
  static defaultProps = {
    size: [],
    colors: [],
    title: '',
    price: '',
    thumbnail: ''
  }

  static propTypes = {
    size: pt.arrayOf(pt.string),
    colors: pt.arrayOf(pt.string),
    title: pt.string,
    price: pt.string,
    thumbnail: pt.string,
  }

  render() {
    const { title } = this.props
    return (
      <div className={styles.categoryItem}>
        <div className={styles.params}>
          <div><SizePicker size={this.props.size} /></div>
          <div><ColorPicker colors={this.props.colors} /></div>
        </div>
        <div className={styles.imageContainer}><img alt={title} src={this.props.thumbnail} /></div>
        <div className={styles.info}>
          <span className={styles.title}>{title}</span>
          <span>{this.props.price}</span>
        </div>
      </div>
    )
  }
}
