import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, FlatList } from 'react-native'

import Card from '~/components/Card'
import { ActivityIndicator } from './styles'
import { actions } from './store/actions'

export default () => {
  const [ page, setPage ] = useState(1)
  const [ refreshing, setRefreshing ] = useState(false)
  const [ total, setTotal ] = useState(0)
  const feedStore = useSelector(({ feed }) => feed)
  const dispatch = useDispatch()

  const getFeed = (pageNumber = page, shouldRefresh = false) => {
    const pageLimit = 5

    if (total && pageNumber > total) return

    dispatch(actions.getFeed(pageNumber, shouldRefresh))
    setTotal(Math.floor(feedStore.totalPage / pageLimit))
    setPage(pageNumber + 1)
  }

  useEffect(() => {
    getFeed()
  }, [])

  const refreshList = async () => {
    const pageInitial = 1
    const refresh = true

    setRefreshing(true)
    await getFeed(pageInitial, refresh)
    setRefreshing(false)
  }

  return (
    <View>
      <FlatList
        data={feedStore.data}
        keyExtractor={(post) => String(post.id)}
        renderItem={({ item }) => <Card item={item} />}
        onEndReached={() => getFeed()}
        onEndReachedThreshold={0.1}
        onRefresh={refreshList}
        refreshing={refreshing}
        ListFooterComponent={feedStore.loading && <ActivityIndicator />}
      />
    </View>
  )
}
