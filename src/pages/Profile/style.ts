import { Platform, StyleSheet } from 'react-native'
import { cssvar_dark, cssvar_text, cssvar_primary } from '../../../css_variables'

export const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: cssvar_dark,
    flex: 1,
    paddingHorizontal: 20
  },
  title: {
    color: cssvar_primary,
    fontSize: 52,
    fontWeight: '700',
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
    backgroundColor: cssvar_primary
  }
})
