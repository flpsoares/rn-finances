import React from 'react'
import { SafeAreaView, StatusBar, View, Text, TouchableOpacity } from 'react-native'

import { FontAwesome } from '@expo/vector-icons'

import { styles } from './app-style'
import { cssvar_primary } from './css_variables'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={cssvar_primary} barStyle="dark-content" />
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Controle suas finanças de um jeito rápido e prático
        </Text>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome style={styles.icon} name="arrow-right" size={44} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
