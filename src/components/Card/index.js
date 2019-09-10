import React from 'react'

import {
  View,
  Header,
  Avatar,
  Name,
  PostImage,
  Description,
} from './styles'

const Card = ({ item }) => (
  <View>
    <Header>
      <Avatar source={{ uri: item.author.avatar }} />
      <Name>{ item.author.name }</Name>
    </Header>
    <PostImage
      ratio={item.aspectRatio}
      source={{ uri: item.image }}
    />
    <Description>
      <Name>{ item.author.name }</Name> { item.description }
    </Description>
  </View>
)

export default Card
