import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { styles } from './style'

interface ButtonNewProps {
  size: number
  color: string
  focused: boolean
}

export const ButtonNew: React.FC<ButtonNewProps> = ({ size, color, focused }) => {
  return (
    <View style={styles.container}>
      <Feather name="plus" size={size} color={focused ? '#919191' : color} />
    </View>
  )
}
