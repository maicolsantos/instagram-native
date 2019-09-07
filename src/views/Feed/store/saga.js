import { takeLatest, put, call } from 'redux-saga/effects'

import api from '~/services/api'
import { types, actions } from './actions'

function* getFeedSaga() {
  yield put(actions.setFeed({ loading: true }))

  try {
    const response = yield call(
      api.get,
      '/feed?_expand=author&_limit=5&_page=1'
    )
    yield put(actions.setFeed({ data: response.data }))
  } catch (error) {
    yield put(actions.setFeed({ error: true }))
  } finally {
    yield put(actions.setFeed({ loading: false }))
  }
}

export default function* () {
  yield takeLatest(types.GET_FEED, getFeedSaga)
}
