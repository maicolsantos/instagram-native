import React, { useState, useEffect } from 'react'
import { Animated } from 'react-native'

import {
  Small,
  Original,
} from './styles'

const OriginalAnimated = Animated.createAnimatedComponent(Original)

const LazyImage = ({
  smallSource,
  source,
  aspectRatio,
  shouldLoad,
}) => {
  const opacity = new Animated.Value(0)
  const [ loaded, setLoaded ] = useState(false)

  useEffect(() => {
    if (shouldLoad) {
      setTimeout(() => setLoaded(true), 1000)
    }
  }, [ shouldLoad ])

  const handleAnimate = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start()
  }

  return (
    <Small
      resizeMode="contain"
      source={smallSource}
      ratio={aspectRatio}
      blurRadius={2}
    >
      {
        loaded && (
          <OriginalAnimated
            resizeMode="contain"
            style={{ opacity }}
            source={source}
            ratio={aspectRatio}
            onLoadEnd={handleAnimate}
          />
        )
      }
    </Small>
  )
}

export default LazyImage
