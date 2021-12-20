import React from 'react'

import { View, Image } from 'react-native'

import { styles } from './style'

import { Feather } from '@expo/vector-icons'
import { cssvar_text } from '../../../css_variables'

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Feather name="settings" size={24} color={cssvar_text} />
      <View style={styles.avatar}>
        <Image style={styles.image} source={require('../../images/avatar.jpg')} />
      </View>
    </View>
  )
}

export default Header
