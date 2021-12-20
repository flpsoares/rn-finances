import { StyleSheet } from 'react-native'
import { cssvar_dark, cssvar_text } from '../../../css_variables'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: cssvar_dark,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    paddingHorizontal: 40
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  avatar: {
    borderColor: cssvar_text,
    borderRadius: 14,
    borderWidth: 1,
    padding: 6
  }
})
