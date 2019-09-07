import React from 'react'
import { Provider } from 'react-redux'
import { StatusBar } from 'react-native'

import '~/config/ReactotronConfig'

import Routes from '~/routes'
import store from '~/store'

const App = () => (
  <Provider store={store}>
    <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />
    <Routes />
  </Provider>
)

export default App
