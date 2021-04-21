import { combineReducers } from 'redux'

import product from './product'
import countries from './countries'

const createRootReducer = () =>
  combineReducers({
    product,
    countries,
  })

export default createRootReducer
