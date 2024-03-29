import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useEffect } from 'react';
import { colors, Header, LinearGradientComponent } from '../../components';
import WelcomeCard from '../../components/welcome/WelcomeCard';
import { useNavigation } from '@react-navigation/native';
import { MainStackScreenProp } from '../../navigation/RootNavigator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upper: {
    position: 'relative',
    flex: 0.65,
    backgroundColor: colors.primary,
    overflow: 'hidden',
  },
  imgContainer: {
    flex: 1,
    zIndex: 1,
  },
  flower: {
    height: 350,
    width: 350,
  },
  model: {
    position: 'absolute',
    bottom: -200,
    right: 0,
    left: 0,
    height: '150%',
    width: '100%',
    resizeMode: 'contain',
    transform: [
      {
        translateX: -50,
      },
    ],
  },
  lower: {
    position: 'absolute',
    bottom: 50,
    left: 50,
    right: 50,
    flex: 0.35,
    transform: [
      {
        translateX: -100,
      },
    ],
  },
});

const WelcomeScreen = () => {
  const navigation = useNavigation<MainStackScreenProp>();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <LinearGradientComponent />
        <Header />
        <View style={styles.imgContainer}>
          <Image
            source={require('../../../assets/img/flower.png')}
            style={styles.flower}
          />
          <Image
            source={require('../../../assets/img/woman-transparent-png-19.png')}
            style={styles.model}
          />
        </View>
      </View>
      <View style={styles.lower}>
        <WelcomeCard />
      </View>
    </View>
  );
};

export default WelcomeScreen;
