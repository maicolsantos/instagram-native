import { types } from './actions'

const INITIAL_STATE = {
  count: 0,
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SET_COUNTER:
      return {
        ...state,
        count: +state.count + 1,
      }
    default:
      return state
  }
}
