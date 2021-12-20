import { StyleSheet } from 'react-native'
import { cssvar_dark, cssvar_text, cssvar_primary } from '../../../css_variables'

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    color: cssvar_text,
    justifyContent: 'center',
    backgroundColor: cssvar_dark,
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
