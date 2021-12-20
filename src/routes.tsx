import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { cssvar_dark, cssvar_primary, cssvar_text } from '../css_variables'

import { Home } from './pages/Home'
import { Register } from './pages/Register'
import { Profile } from './pages/Profile'

import { ButtonNew } from './components/ButtonNew'

import { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: cssvar_dark,
          borderTopColor: cssvar_primary,
          paddingVertical: 5
        },
        tabBarActiveTintColor: '#919191',
        tabBarInactiveTintColor: cssvar_text
      }}
      initialRouteName="Home"
      sceneContainerStyle={{ flex: 1 }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Register"
        component={Register}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <ButtonNew size={size} color={color} focused={focused} />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}
