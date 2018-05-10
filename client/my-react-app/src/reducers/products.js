import {FETCHED_ALL_PRODUCTS} from '../actions/products'
import {ADD_PRODUCT} from '../actions/products'

export default function (state = [], action) {
  switch (action.type) {
    case FETCHED_ALL_PRODUCTS:
      return  action.payload

      case ADD_PRODUCT:
      return action.payload

    default:
      return state
  }
}
