import { all } from 'redux-saga/effects'

import exampleSaga from '~/components/Example/store/saga'

export default function* rootSaga() {
  yield all([
    exampleSaga(),
  ])
}
