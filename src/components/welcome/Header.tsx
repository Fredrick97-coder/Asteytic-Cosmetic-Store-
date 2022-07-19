import { View, Text, Image, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  brand: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '500',
  },
  name: {
    color: colors.secondary,
    opacity: 0.5,
    fontSize: 20,
    fontWeight: '400',
  },
  brandimg: {
    width: 60,
    height: 60,
  },
});

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.brand}>Asteytic</Text>
        <Text style={styles.name}>Skin Care</Text>
      </View>
      <Image
        source={require('../../../assets/img/top.png')}
        style={styles.brandimg}
      />
    </SafeAreaView>
  );
};

export default Header;
