import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import { styles } from './style'

export const Profile: React.FC = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.title}>Profile</Text>
    </SafeAreaView>
  )
}
