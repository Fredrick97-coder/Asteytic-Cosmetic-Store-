import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../colors';
import { EvilIcons } from '@expo/vector-icons';

const Topbrand = '../../../assets/img/top.png';
const User = '../../../assets/user/user.png';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  brand: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '500',
    fontFamily: 'PoppinsMedium',
  },
  name: {
    color: colors.secondary,
    opacity: 0.5,
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'PoppinsRegular',
  },
  brandimg: {
    width: 60,
    height: 60,
  },
  homeLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationWrapper: {
    height: 40,
    width: 40,
    backgroundColor: '#e8dfdf7a',
    borderRadius: 50,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  user: {
    height: 45,
    width: 45,
  },
});

interface HeaderProps {
  isHome?: boolean;
}

const Header = ({ isHome }: HeaderProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.brand}>Asteytic</Text>
        <Text style={styles.name}>Skin Care</Text>
      </View>
      {!isHome ? (
        <Image source={require(Topbrand)} style={styles.brandimg} />
      ) : (
        <View style={styles.homeLeft}>
          <TouchableOpacity style={styles.notificationWrapper}>
            <EvilIcons name="bell" size={35} color={colors.bell} />
          </TouchableOpacity>
          <Image source={require(User)} style={styles.user} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Header;
