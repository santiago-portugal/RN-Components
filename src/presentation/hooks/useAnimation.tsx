import React, { useRef } from 'react'
import { Animated, Easing } from 'react-native';

const useAnimation = () => {
    const animatedOpacity = useRef(new Animated.Value(0)).current;
    const animatedTop = useRef(new Animated.Value(0)).current;
    
    
      const fadeIn = ({duration = 500, toValue = 1, callback = () => {}}) => {
    
        // Animated.timing(animatedTop, {
        //   toValue: 0,
        //   duration: 1000,
        //   useNativeDriver: true,
        //   easing: Easing.bounce
        // }).start()
    
    
    
        Animated.timing(animatedOpacity, {
          toValue: toValue,
          duration: duration,
          useNativeDriver: true
        }).start(callback)
      }
    
      
      const fadeOut = ({duration = 500, toValue = 0, callback = () => {}}) => {
        Animated.timing(animatedOpacity, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: true
        }).start(callback);
        // ()=> animatedTop.resetAnimation()
      }

      const startMovingPosition = ({initialPosition = 0, toValue = 0, duration = 300, easing = Easing.linear, callback = () =>{}}) => {

        animatedTop.setValue(initialPosition);
        Animated.timing(animatedTop, {
          toValue: toValue,
          duration: duration,
          useNativeDriver: true,
          easing: easing
        }).start(callback)

      }
  return {
    animatedOpacity,
    animatedTop,
    fadeIn,
    fadeOut,
    startMovingPosition
  }
}

export default useAnimation
