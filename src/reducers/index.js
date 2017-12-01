/**
 * Created by nbespalov on 11.04.2017.
 */
import { combineReducers } from 'redux-loop'
import { reducer as form } from 'redux-form'
import {reducer as responsive } from 'redux-mediaquery'

import catalogPage from './CatalogPage'

const appReducer = combineReducers({
  responsive,
  catalogPage,
  form
})


export default appReducer

