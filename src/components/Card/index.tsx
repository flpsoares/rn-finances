import React from 'react'

import { View, Text } from 'react-native'
import { styles } from './style'

interface CardProps {
  item: {
    number: string
    name: string
  }
  index: number
}

const Card: React.FC<CardProps> = ({ item, index }) => {
  return (
    <View key={index} style={styles.container}>
      <View style={styles.icons}>
        <View style={styles.leftBall} />
        <View style={styles.rightBall} />
      </View>
      <View style={styles.content}>
        <View>
          <Text style={styles.cardNumberTitle}>CARD NUMBER</Text>
          <Text style={styles.cardNumber}>{item.number}</Text>
        </View>
        <View>
          <Text style={styles.name}>{item.name.toUpperCase()}</Text>
        </View>
      </View>
    </View>
  )
}

export default Card
