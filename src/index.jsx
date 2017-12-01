import ReactDOM from 'react-dom'
import React from 'react'
import { HashRouter as Router, Route, withRouter } from 'react-router-dom'
import { Provider, connect } from 'react-redux'
import 'roboto-fontface/css/roboto/sass/roboto-fontface-black-italic.scss'

import ExchangeContainer from './containers/CatalogPage'
import configureStore from './store/configureStore'
import './styles/general.scss'

const store = configureStore({})


const Public = withRouter(connect(s => s)(({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (<Component {...props} />)}
  />
)))

const App = () => (
  <Provider store={store}>
    <Router>
      <div className='App'>
        <Public exact path='/' component={ExchangeContainer} />
      </div>
    </Router>
  </Provider>
)

ReactDOM.render(<App />, document.querySelector('#root'))

