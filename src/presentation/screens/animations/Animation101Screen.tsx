import React, { useRef } from 'react'
import { Animated, Easing, Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../config/theme/theme'
import useAnimation from '../../hooks/useAnimation'

const Animation101Screen = () => {

  const {fadeIn, fadeOut, animatedOpacity, animatedTop, startMovingPosition} = useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View style={[
        styles.purpleBox,
        {
          opacity: animatedOpacity,
          transform:[{
            translateY: animatedTop
          }]
        }
      ]}/>

      <Pressable onPress={()=>{fadeIn({}); startMovingPosition({initialPosition: -100, duration: 1000, easing: Easing.bounce})} } style={{marginTop: 10}}>
        <Text>Fadein</Text>
      </Pressable>
      <Pressable onPress={()=>fadeOut({})} style={{marginTop: 10}}>
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
