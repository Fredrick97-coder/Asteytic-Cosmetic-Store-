import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View } from 'react-native';
import { colors } from '../colors';

const styles = StyleSheet.create({
  lightLine: {
    top: -70,
    right: 0,
    height: '200%',
    width: 250,
    backgroundColor: colors.shadow,
    transform: [{ rotate: '45deg' }, { translateX: 50 }, { translateY: -50 }],
    zIndex: -1,
  },
});

const LinearGradientComponent = () => {
  return (
    <LinearGradient
      start={{ x: 0.5, y: 0.2 }}
      colors={[colors.shadow, 'transparent']}
      style={{ ...StyleSheet.absoluteFillObject, ...styles.lightLine }}
    />
  );
};

export default LinearGradientComponent;
