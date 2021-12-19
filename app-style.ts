import { Platform, StyleSheet } from 'react-native'
import { cssvar_dark, cssvar_primary, cssvar_text } from './css_variables'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cssvar_dark,
    paddingVertical: Platform.OS === 'android' ? 40 : ''
  },
  title: {
    color: cssvar_text,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  icon: {
    color: cssvar_dark
  },
  iconButton: {
    width: 80,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: cssvar_text
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1
  }
})
