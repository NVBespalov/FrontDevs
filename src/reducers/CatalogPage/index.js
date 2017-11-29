import { createAction, createReducer } from 'redux-act'

const initialState = {

}
  export const setRates = createAction('FrontDevs/exchange/SET_RATES')
export const setCurrencies = createAction('FrontDevs/exchange/SET_CURRENCIES')
export const setAmount = createAction('FrontDevs/exchange/SET_AMOUNT')

const handleSetRates = (state, rates) => ({ ...state, rates })
const handleSetCurrencies = (state, currencies) => ({ ...state, currencies })
const handleSetAmount = (state, amount) => ({ ...state, amount })
const reducer = createReducer(on => {
  on(setRates, handleSetRates)
  on(setCurrencies, handleSetCurrencies)
  on(setAmount, handleSetAmount)
}, initialState)

export default reducer
