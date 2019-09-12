import { types } from './actions'

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: false,
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SET_FEED: {
      const { shouldRefresh, totalPage } = action.meta

      return {
        ...state,
        totalPage,
        data: shouldRefresh
          ? action.payload
          : [ ...state.data, ...action.payload ],
      }
    }
    case types.SET_LOADING:
      return {
        ...state,
        ...action.meta,
      }
    case types.SET_ERROR:
      return {
        ...state,
        ...action.meta,
      }
    default:
      return state
  }
}
