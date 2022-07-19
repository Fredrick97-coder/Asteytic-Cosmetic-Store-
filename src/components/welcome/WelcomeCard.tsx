import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';
import { colors } from '../colors';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 20,
    height: 300,
    width: width - 40,
    backgroundColor: '#fff',

    borderRadius: 30,
    marginHorizontal: 70,
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 15,
  },
  titleWrapper: {
    marginVertical: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 16,
    marginBottom: 30,
    color: '#ccc',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '100%',
    borderRadius: 30,
    backgroundColor: colors.btn,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
const WelcomeCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Asteytic Skin Care</Text>
        <Text style={styles.title}>Solution App</Text>
      </View>
      <Text style={styles.desc} numberOfLines={4}>
        We care about what goes on your skin, because of what's within. Our
        assortment is top-rated, curated & authenticated
      </Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Explore Our Product</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeCard;
