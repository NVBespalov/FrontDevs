import React, { PureComponent } from 'react'
import pt from 'prop-types'

import styles from './Product.styl'
import ColorPicker from '../ColorPicker'
import SizePicker from '../SizePicker'

export default class extends PureComponent {
  static defaultProps = {
    colors: [],
    size: [],
    title: '',
    thumbnail: '',
    style: {},
    price: '0'
  }
  static propTypes = {
    size: pt.arrayOf(pt.string),
    colors: pt.arrayOf(pt.string),
    style: pt.shape({}),
    price: pt.string,
    title: pt.string,
    thumbnail: pt.string
  }

  render() {
    const {
      colors, size, price, title, thumbnail, style
    } = this.props
    return (
      <div className={styles.product} style={style}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            alt={title}
            src={thumbnail}
          />
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.priceInfo}>
            <span className={styles.price}>{price}</span>
            <span className={styles.priceLable}>PRICE</span>
          </div>
          {colors.length > 0 && <ColorPicker
            style={{ marginTop: 18 }}
            colors={colors}
            label='COLORS'
            labelStyle={{ marginLeft: 20 }}
          />}
          {size.length > 0 && <SizePicker
            noDropDown
            labelRight
            size={size}
            label='SIZE'
          />}
        </div>
      </div>
    )
  }
}
