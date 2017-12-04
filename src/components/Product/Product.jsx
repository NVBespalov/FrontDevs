import React, { PureComponent } from 'react'
import pt from 'prop-types'

import styles from './Product.styl'
import ColorPicker from '../ColorPicker'
import SizePicker from '../SizePicker'

export default class extends PureComponent {
  static defaultProps = {
    colors: [],
    size: [],
    style: {},
    price: '0'
  }
  static propTypes = {
    size: pt.arrayOf({}),
    colors: pt.arrayOf({}),
    style: pt.shape({}),
    price: pt.string
  }

  render() {
    return (
      <div className={styles.product} style={this.props.style}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            alt={this.props.title}
            src={this.props.thumbnail}
          />
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.priceInfo}>
            <span className={styles.price}>{this.props.price}</span>
            <span className={styles.priceLable}>PRICE</span>
          </div>
          <ColorPicker
            style={{ marginTop: 18 }}
            colors={this.props.colors}
            label='COLORS'
            labelStyle={{ marginLeft: 20 }}
          />
          <SizePicker
            noDropDown
            labelRight
            size={this.props.size}
            label='SIZE'
          />
        </div>
      </div>
    )
  }
}
