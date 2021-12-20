import React from 'react'
import { StatusBar } from 'react-native'

import { cssvar_primary } from './css_variables'

import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes'
import Header from './src/components/Header'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={cssvar_primary} barStyle="dark-content" />
      <Header />
      <Routes />
    </NavigationContainer>
  )
}
