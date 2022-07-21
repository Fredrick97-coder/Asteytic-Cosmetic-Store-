import React from 'react';
import { View, Text } from 'react-native';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MainStackScreenProp } from '../../navigation/RootNavigator';
import { StyleSheet } from 'react-native';
import { colors } from '../../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 50,
  },
});

const SplashScreen = () => {
  const navigation = useNavigation<MainStackScreenProp>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 3000);
  });

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;
