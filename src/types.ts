// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const GET_COUNTRIES = 'GET_COUNTRIES'
export const GET_COUNTRIES_SUCCESS = 'GET_COUNTRIES_SUCCESS'

// A product
export type Product = {
  id: string
  name: string
  price: number
}

export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: {
    product: Product
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: Product
  }
}

// Use this union in reducer
export type ProductActions = AddProductAction | RemoveProductAction

// A countries
export type Languages = {
  name: string
  iso639_1: string
}

export type Country = {
  flag: string
  name: string
  languages: Languages[]
  population: number
  region: string
  numericCode: string
}

export type GetCountriesAction = {
  type: typeof GET_COUNTRIES
}

export type GetCountriesSuccessAction = {
  type: typeof GET_COUNTRIES_SUCCESS
  payload: Country[]
}

export type CountriesActions = GetCountriesAction | GetCountriesSuccessAction

// States

export type ProductState = {
  inCart: Product[]
}

export type CountriesState = {
  all: Country[]
  loading: boolean
}

export type AppState = {
  product: ProductState
  countries: CountriesState
}
