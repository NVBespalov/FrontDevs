import { createAction, createReducer } from 'redux-act'
import { prop as rProp, equals as rEquals } from 'ramda'

const initialState = {

}
export const setSortBy = createAction('FrontDevs/category/SET_SORT_BY')
const sortBySelector = rProp('sortBy')


const handleSetSortBy = (state, sortBy) => rEquals(sortBy, sortBySelector(state)) ? state : { ...state, sortBy }

const reducer = createReducer(on => {
  on(setSortBy, handleSetSortBy)
}, initialState)

export default reducer
