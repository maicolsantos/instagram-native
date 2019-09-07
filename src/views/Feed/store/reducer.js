import { types } from './actions'

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: false,
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SET_FEED:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}
