import React, { PureComponent } from 'react'
import pt from 'prop-types'

import styles from './ColorPicker.styl'

export default class extends PureComponent {
  static propTypes = {
    colors: pt.arrayOf(pt.string),
    label: pt.string,
    labelStyle: pt.shape(),
    style: pt.shape()
  }
  static defaultProps = {
    colors: [],
    label: null,
    labelStyle: {},
    style: {}
  }

  render() {
    return (
      <div className={styles.color} style={this.props.style}>
        {this.props.colors.map(backgroundColor => (<div key={backgroundColor} className={styles.item} style={{ backgroundColor }} />))}
        {<span style={this.props.labelStyle}>{this.props.label}</span>}
      </div>
    )
  }
}
