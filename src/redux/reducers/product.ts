/* eslint-disable indent */
import {
  ProductState,
  ProductActions,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
} from '../../types'

export default function product(
  state: ProductState = {
    inCart: [],
  },
  action: ProductActions
): ProductState {
  switch (action.type) {
    case ADD_PRODUCT: {
      const { product } = action.payload
      if (state.inCart.find((p) => p.name === product.name)) {
        return state
      }
      // Always return new state (e.g, new object) if changed
      const newState = [...state.inCart, product]
      localStorage.setItem('inCart', JSON.stringify(newState))
      return { ...state, inCart: newState }
    }

    case REMOVE_PRODUCT: {
      const { product } = action.payload
      const index = state.inCart.findIndex((p) => p.name === product.name)
      if (index >= 0) {
        state.inCart.splice(index, 1)
        return { ...state, inCart: [...state.inCart] }
      }
      localStorage.setItem('inCart', JSON.stringify(state))
      return state
    }

    default:
      return state
  }
}
