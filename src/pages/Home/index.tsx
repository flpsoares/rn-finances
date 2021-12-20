import React from 'react'
import { SafeAreaView, Dimensions } from 'react-native'

import { styles } from './style'
import Card from '../../components/Card'
import cards from '../../cards.json'

import Carousel from 'react-native-snap-carousel'

const SLIDER_WIDTH = Dimensions.get('window').width

export const Home: React.FC = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Carousel
        data={cards}
        renderItem={Card}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={300}
        useScrollView={true}
      />
    </SafeAreaView>
  )
}
