import { StyleSheet } from 'react-native'
import { cssvar_primary } from '../../../css_variables'

export const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: cssvar_primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30
  }
})
