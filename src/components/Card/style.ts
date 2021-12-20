import { StyleSheet } from 'react-native'
import { cssvar_secondary } from '../../../css_variables'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: cssvar_secondary,
    width: 300,
    height: 240,
    borderRadius: 40,
    marginRight: 40,
    padding: 30
  },
  icons: {
    flexDirection: 'row',
    position: 'relative'
  },
  leftBall: {
    backgroundColor: '#181818',
    borderRadius: 50,
    width: 34,
    height: 34,
    zIndex: 2
  },
  rightBall: {
    backgroundColor: '#9DA6AB',
    borderRadius: 50,
    width: 34,
    height: 34,
    position: 'absolute',
    left: 20
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 20
  },
  cardNumberTitle: {
    fontSize: 16,
    color: '#9DA6AB',
    fontWeight: 'bold'
  },
  cardNumber: {
    fontSize: 22,
    fontWeight: '700'
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold'
  }
})
