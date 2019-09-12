import { takeLatest, put, call } from 'redux-saga/effects'

import api from '~/services/api'
import { types, actions } from './actions'

function* getFeedSaga({ meta }) {
  const { pageNumber, shouldRefresh } = meta
  yield put(actions.setLoading(true))

  try {
    const response = yield call(
      api.get,
      `/feed?_expand=author&_limit=5&_page=${pageNumber}`,
    )

    yield put(actions.setFeed(
      response.data,
      shouldRefresh,
      response.headers['x-total-count']
    ))
  } catch (error) {
    yield put(actions.setError(true))
  } finally {
    yield put(actions.setLoading(false))
  }
}

export default function* () {
  yield takeLatest(types.GET_FEED, getFeedSaga)
}
