import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { View } from 'react-native'

import { actions } from './store/actions'

export default () => {
  const dispatch = useDispatch()

  const getFeed = () => {
    dispatch(actions.getFeed())
  }

  useEffect(() => {
    getFeed()
  }, [])

  return (
    <View />
  )
}
