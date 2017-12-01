/**
 * Created by nbespalov on 11.04.2017.
 */
import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import { install } from 'redux-loop'
import { mediaQueryTracker } from 'redux-mediaquery'
import rootReducer from '../reducers'

export default function configureStore(state) {
  const initialState = state || {}
  const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose

  const enhancer = composeEnhancers(applyMiddleware(logger), install())

  const store = createStore(rootReducer, initialState, enhancer)

  mediaQueryTracker({
    isPhone: 'screen and (max-width: 767px)',
    isTablet: 'screen and (max-width: 1024px)',
    innerWidth: true,
    innerHeight: true
  }, store.dispatch)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = rootReducer
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
