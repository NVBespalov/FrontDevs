import React, { PureComponent } from 'react'
import pt from 'prop-types'
import cx from 'classnames'

import styles from './Checkbox.styl'

class Checkbox extends PureComponent {
  static propTypes = {
    label: pt.string,
    mode: pt.string,
    name: pt.string,
    disabled: pt.bool,
    onChange: pt.func,
    value: pt.bool
  }

  static defaultProps = {
    label: '',
    name: '',
    value: false,
    disabled: false,
    mode: null,
    onChange: () => {}
  }


  render() {
    const {
      label, mode, disabled, name, onChange, value
    } = this.props

    const labelElm = (
      <label
        className={styles.checkbox__label}
        htmlFor={name}
      >
        {label}
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
          id={name}
          name={name}
          checked={value}
          className={styles.checkbox__field}
          onChange={onChange}
        />
        {labelElm}
      </div>
    )
  }
}

export default Checkbox
