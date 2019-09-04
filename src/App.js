import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import styled from 'styled-components/native'

const TouchableOpacity = styled.TouchableOpacity`
  background: #0747a6;
  padding: 16px;
`
const Text = styled.Text`
  color: white;
  text-align: center;
`

const App = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <TouchableOpacity>
        <Text>Click</Text>
      </TouchableOpacity>
    </SafeAreaView>
  </>
)

export default App
