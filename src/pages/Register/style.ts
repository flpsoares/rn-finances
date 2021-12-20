import { Platform, StyleSheet } from 'react-native'
import { cssvar_dark, cssvar_text, cssvar_primary } from '../../../css_variables'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cssvar_dark,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: cssvar_primary,
    fontSize: 52,
    fontWeight: '700',
    textAlign: 'center'
  }
})
