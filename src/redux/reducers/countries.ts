import {
  CountriesActions,
  CountriesState,
  GET_COUNTRIES,
  GET_COUNTRIES_SUCCESS,
} from '../../types'

const initialState: CountriesState = {
  all: [],
  loading: false,
}

const countriesReducer = (
  state = initialState,
  action: CountriesActions
): CountriesState => {
  switch (action.type) {
  case GET_COUNTRIES:
    return { ...state, loading: true }
  case GET_COUNTRIES_SUCCESS:
    return { ...state, loading: false, all: action.payload }
  default:
    return state
  }
}

export default countriesReducer
