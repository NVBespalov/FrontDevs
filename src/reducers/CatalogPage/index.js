import { createAction, createReducer } from 'redux-act'
import { prop as rProp, equals as rEquals } from 'ramda'
import { loop, Cmd } from 'redux-loop'

import { categories as requestCategories } from '../../api/restAPI'

const initialState = {
  categories: []
}

const sortBySelector = rProp('sortBy')

export const setSortBy = createAction('FrontDevs/category/SET_SORT_BY')
export const fetchCategories = createAction('FrontDevs/category/FETCH')
export const fetchCategoriesSuccessful = createAction('FrontDevs/category/FETCH_SUCCESS')

const handleSetSortBy = (state, sortBy) => rEquals(sortBy, sortBySelector(state)) ? state : { ...state, sortBy }
const handleFetch = state => loop(
  { ...state, initStarted: true },
  Cmd.run(requestCategories, {
    successActionCreator: fetchCategoriesSuccessful,
    failActionCreator: fetchCategoriesSuccessful,
    args: [Cmd.getState, Cmd.dispatch]
  })
)
const handleFetchSuccess = (state, { data }) => ({ ...state, categories: data })

const reducer = createReducer(on => {
  on(setSortBy, handleSetSortBy)
  on(fetchCategories, handleFetch)
  on(fetchCategoriesSuccessful, handleFetchSuccess)
}, initialState)

export default reducer
