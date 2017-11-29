import React, { PureComponent } from 'react'
import pt from 'prop-types'
import cx from 'classnames'

import styles from './Checkbox.styl'

class Checkbox extends PureComponent {
  static propTypes = {
    title: pt.string,
    id: pt.string,
    mode: pt.string,
    disabled: pt.bool
  }

  static defaultProps = {
    id: '',
    title: '',
    disabled: false
  }

  state = {
    checked: false
  }

  handleChange = () => {
    this.setState({
      checked: !this.state.checked
    })
  }

  render() {
    const { title, mode, id, disabled } = this.props

    const label = (
      <label
        className={styles.checkbox__label}
        htmlFor={id}
      >
        {title}
      </label>
    )
    return (
      <div
        className={cx({
          [styles.checkbox]: true,
          [styles[`checkbox_mode_${mode}`]]: mode,
          [styles.checkbox_disabled]: disabled
        })}
      >
        <input
          type='checkbox'
          id={id}
          checked={this.state.checked}
          className={styles.checkbox__field}
          onChange={this.handleChange}
        />
        {label}
      </div>
    )
  }
}

export default Checkbox
