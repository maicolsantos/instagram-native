import React from 'react'
import { Provider } from 'react-redux'
import { SafeAreaView, StatusBar } from 'react-native'

import '~/config/ReactotronConfig'

import Example from '~/components/Example'
import store from '~/store'

const App = () => (
  <Provider store={store}>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <Example />
    </SafeAreaView>
  </Provider>
)

export default App
