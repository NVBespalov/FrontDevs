import { createAction, createReducer } from 'redux-act'
import { prop as rProp, equals as rEquals } from 'ramda'
import memoizee from 'memoizee'
import { loop, Cmd } from 'redux-loop'

import { categories as requestCategories, products as requestProducts } from '../../api/restAPI'

const sortBySelector = rProp('sortBy')

const initialState = {
  categories: [],
  products: [],
  selectedCategories: {
    MEN: { selected: true },
    WOMEN: { selected: true }
  }
}

const fetchCategoriesWithParams = memoizee(params => () => requestCategories(params))

const fetchProductsWithParams = memoizee(params => () => requestProducts(params))

export const setSortBy = createAction('FrontDevs/category/SET_SORT_BY')
export const setSelected = createAction('FrontDevs/category/SET_SELECTED')
export const fetchCategories = createAction('FrontDevs/category/FETCH_CATEGORIES')
export const fetchProducts = createAction('FrontDevs/category/FETCH_PRODUCTS')
export const fetchCategoriesSuccessful = createAction('FrontDevs/category/FETCH_CATEGORIES_SUCCESS')
export const fetchProductsSuccessful = createAction('FrontDevs/category/FETCH_PRODUCTS_SUCCESS')

const handleSetSortBy = (state, sortBy) => rEquals(sortBy, sortBySelector(state)) ? state : { ...state, sortBy }

const handleFetchCategories = state => loop(
  { ...state, initStarted: true },
  Cmd.run(fetchCategoriesWithParams({}), {
    successActionCreator: fetchCategoriesSuccessful,
    failActionCreator: fetchCategoriesSuccessful,
    args: [Cmd.getState, Cmd.dispatch]
  })
)
const handleFetchProducts = state => loop(
  { ...state, initStarted: true },
  Cmd.run(fetchProductsWithParams({}), {
    successActionCreator: fetchProductsSuccessful,
    failActionCreator: fetchProductsSuccessful,
    args: [Cmd.getState, Cmd.dispatch]
  })
)
const handleFetchCategoriesSuccess = (state, { data }) => ({ ...state, categories: data })
const handleFetchProductsSuccess = (state, { data }) => ({ ...state, products: data })
const handleSetSelected = (state, selected) => ({
  ...state,
  selectedCategories: { ...state.selectedCategories, ...selected }
})

const reducer = createReducer(on => {
  on(setSortBy, handleSetSortBy)
  on(fetchCategories, handleFetchCategories)
  on(fetchProducts, handleFetchProducts)
  on(fetchCategoriesSuccessful, handleFetchCategoriesSuccess)
  on(fetchProductsSuccessful, handleFetchProductsSuccess)
  on(setSelected, handleSetSelected)
}, initialState)

export default reducer
