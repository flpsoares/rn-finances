import React from 'react'
import { Text, SafeAreaView } from 'react-native'

import { styles } from './style'

export const Register: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Register</Text>
    </SafeAreaView>
  )
}
