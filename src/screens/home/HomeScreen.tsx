import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Categories, colors, Header, SearchComponent } from '../../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upper: {
    position: 'relative',
    flex: 0.4,
    backgroundColor: colors.primary,
    overflow: 'hidden',
  },
  lightLine: {
    top: -70,
    right: 0,
    height: '170%',
    width: 250,
    backgroundColor: colors.shadow,
    transform: [{ rotate: '45deg' }, { translateX: 50 }, { translateY: -50 }],
    zIndex: -1,
  },
  lower: {},
});
// interface HomeScreenProps {}

const HomeScreen = ({ navigation }: any) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <View style={styles.container}>
      {/* upper part */}
      <View style={styles.upper}>
        {/* header */}
        <Header isHome={true} />
        {/* search */}
        <SearchComponent />
        <View
          style={{ ...StyleSheet.absoluteFillObject, ...styles.lightLine }}
        />
        {/* categories */}
        <Categories />
      </View>
      {/* lower part */}
      <View style={styles.lower}></View>
    </View>
  );
};

export default HomeScreen;
