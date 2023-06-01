import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ScreenContainer = ({children, additionalStyle}: any) => {
  return (
    <View style={[styles.container, additionalStyle]}>
      {children}
    </View>
  )
}

export default ScreenContainer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
})