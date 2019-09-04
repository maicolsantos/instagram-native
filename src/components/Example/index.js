import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  CountText,
  TouchableOpacity,
  Text,
} from './styles'
import { actions } from './store/actions'

const Example = () => {
  const state = useSelector(({ example }) => example)
  const dispatch = useDispatch()

  const onPress = () => {
    dispatch(actions.setCounter())
  }

  return (
    <>
      <CountText>Total: { state.count }</CountText>
      <TouchableOpacity onPress={onPress}>
        <Text>Click</Text>
      </TouchableOpacity>
    </>
  )
}

export default Example
