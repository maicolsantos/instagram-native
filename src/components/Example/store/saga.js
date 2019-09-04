import { takeLatest, put } from 'redux-saga/effects'

import { types } from './actions'

function* counterSaga() {
  yield put({ type: types.SET_COUNTER })
}

export default function* () {
  yield takeLatest(types.COUNTER, counterSaga)
}
