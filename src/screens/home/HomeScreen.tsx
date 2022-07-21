import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors, Products } from '../../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
// interface HomeScreenProps {}

const HomeScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <View style={styles.container}>
      {/* Products */}
      <Products />
    </View>
  );
};

export default HomeScreen;
