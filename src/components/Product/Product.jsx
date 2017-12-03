import React, { PureComponent } from 'react'
import pt from 'prop-types'

import styles from './Product.styl'
import ColorPicker from '../ColorPicker'
import SizePicker from '../SizePicker'

export default class extends PureComponent {
  static defaultProps = {
    colors: [],
    size: []
  }
  static propTypes = {
    size: pt.arrayOf({}),
    colors: pt.arrayOf({})
  }

  render() {
    return (
      <div className={styles.product}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            alt={this.props.title}
            src={this.props.thumbnail}
          />
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.left}>
            <div>{this.props.price}</div>
            {
              <div
                className={styles.colors}
              >
                {this.props.colors.map(backgroundColor => <div className={styles.color} key={backgroundColor} style={{ backgroundColor }} />)}
              </div>
            }
            {this.props.size.join(',')}
          </div>
          <div className={styles.right}>
            <div>Price</div>
            {this.props.colors.length > 0 && <div>Color</div>}
            <div>Size</div>
          </div>
        </div>
      </div>
    )
  }
}
