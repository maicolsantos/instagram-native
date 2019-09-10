import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, FlatList } from 'react-native'

import Card from '~/components/Card'
import { actions } from './store/actions'

export default () => {
  const feedItems = useSelector(({ feed }) => feed)
  const dispatch = useDispatch()

  const getFeed = () => {
    dispatch(actions.getFeed())
  }

  useEffect(() => {
    getFeed()
  }, [])

  return (
    <View>
      <FlatList
        data={feedItems.data}
        keyExtractor={(post) => String(post.id)}
        renderItem={({ item }) => <Card item={item} />}
      />
    </View>
  )
}
