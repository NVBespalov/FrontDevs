import React, { PureComponent } from 'react'
import pt from 'prop-types'
import Chevron from '../../components/Chevron'

export default class extends PureComponent {
  static propTypes = {
    types: pt.shape({}),
    type: pt.string
  }
  static defaultProps = {
    types: {
      ASC: 'up',
      DESC: 'down'
    },
    type: 'DESC'
  }
  render() {
    const { types, type } = this.props
    return (<div>Sort BY PRICE <Chevron mode={types[type]} /> </div>)
  }
}
