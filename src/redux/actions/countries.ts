import { Dispatch } from 'redux'
import {
  Country,
  GetCountriesSuccessAction,
  GET_COUNTRIES_SUCCESS,
} from '../../types'

export const getCountries = () => {
  return async (dispatch: Dispatch) => {
    const res = await fetch('https://restcountries.eu/rest/v2/all')
    const countryData = await res.json()
    dispatch(getCountriesSuccess(countryData))
  }
}

export const getCountriesSuccess = (
  countryData: Country[]
): GetCountriesSuccessAction => {
  return {
    type: GET_COUNTRIES_SUCCESS,
    payload: countryData,
  }
}
