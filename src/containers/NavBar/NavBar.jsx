import React, { PureComponent } from 'react'
// import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import NavBar from '../../components/NavBar'

// @connect((_, ownProps) => {
//   debugger
//   return ({})
// }, {})
export default withRouter(class extends PureComponent {
  handleOnNav = () => this.props.history.goBack()
  render() {
    return (
      <NavBar {...this.props} onNav={this.handleOnNav} />
    )
  }
})
