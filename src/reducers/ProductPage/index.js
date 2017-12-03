import { createAction, createReducer } from 'redux-act'
import { loop, Cmd } from 'redux-loop'
import memoizee from 'memoizee'

import { products as requestProducts } from '../../api/restAPI'

const initialState = {
  product: {}
}

const fetchProductWithParams = memoizee(params => () => requestProducts(params))

export const fetchProduct = createAction('FrontDevs/product/FETCH_PRODUCT')
export const fetchProductSuccessful = createAction('FrontDevs/product/FETCH_PRODUCT_SUCCESS')
const handleFetchProductSuccess = (state, { data: [product] }) => ({ ...state, product })

const handleFetchProduct = (state, params) => loop(
  { ...state, initStarted: true },
  Cmd.run(fetchProductWithParams(params), {
    successActionCreator: fetchProductSuccessful,
    failActionCreator: fetchProductSuccessful,
    args: [Cmd.getState, Cmd.dispatch]
  })
)

const reducer = createReducer(on => {
  on(fetchProduct, handleFetchProduct)
  on(fetchProductSuccessful, handleFetchProductSuccess)
}, initialState)

export default reducer
