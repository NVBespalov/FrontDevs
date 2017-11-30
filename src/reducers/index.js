/**
 * Created by nbespalov on 11.04.2017.
 */
import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import catalogPage from './CatalogPage'

const appReducer = combineReducers({
  catalogPage,
  form
})


export default appReducer

