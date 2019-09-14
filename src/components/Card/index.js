import React from 'react'

import {
  View,
  Header,
  Avatar,
  Name,
  Description,
} from './styles'
import LazyImage from '../LazyImage'

const Card = ({ item, shouldLoad }) => (
  <View>
    <Header>
      <Avatar source={{ uri: item.author.avatar }} />
      <Name>{ item.author.name }</Name>
    </Header>
    <LazyImage
      shouldLoad={shouldLoad}
      aspectRatio={item.aspectRatio}
      source={{ uri: item.image }}
      smallSource={{ uri: item.small }}
    />
    <Description>
      <Name>{ item.author.name }</Name> { item.description }
    </Description>
  </View>
)

export default Card
