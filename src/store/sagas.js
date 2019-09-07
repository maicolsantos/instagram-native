import { all } from 'redux-saga/effects'

import feedSaga from '~/views/Feed/store/saga'

export default function* rootSaga() {
  yield all([
    feedSaga(),
  ])
}
