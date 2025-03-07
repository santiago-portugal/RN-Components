import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../config/theme/theme'

const Animation101Screen = () => {

    




  return (
    <View style={styles.container}>
      <View style={[
        styles.purpleBox,
      ]}/>

      <Pressable onPress={()=>console.log('fadein')} style={{marginTop: 10}}>
        <Text>Fadein</Text>
      </Pressable>
      <Pressable onPress={()=>console.log('fadeout')} style={{marginTop: 10}}>
        <Text>Fadeout</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    purpleBox: {
        backgroundColor: colors.primary,
        width: 150,
        height: 150,
    }
})

export default Animation101Screen
