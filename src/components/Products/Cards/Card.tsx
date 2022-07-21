import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { colors } from '../../colors';
import { useNavigation } from '@react-navigation/core';
import { MainStackScreenProp } from '../../../navigation/RootNavigator';

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    height: 220,
    width: 160,
    backgroundColor: colors.card,
    borderRadius: 20,
    margin: 10,
    shadowColor: colors.red,
    shadowOffset: { width: -5, height: 30 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 15,
  },
  image: {
    height: 100,
    width: 100,
    alignSelf: 'center',
    marginTop: 60,
  },
  heartWrapper: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
    backgroundColor: colors.love,
    borderRadius: 50,
    top: 10,
    right: 15,
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 15,
  },
  bottom: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  name: {
    color: '#fff',
    fontFamily: 'PoppinsMedium',
  },
  rating: {
    color: colors.btn,
  },
  price: {
    color: colors.btn,
    fontFamily: 'PoppinsBold',
  },
});

interface CardProps {
  index?: number | boolean;
  multiple3?: number | boolean;
  name: string;
  price: number;
  rating: number;
  image: string;
}

const Card = ({ name, price, rating, image, index }: CardProps) => {
  const navigation = useNavigation<MainStackScreenProp>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Product')}
      style={{
        ...styles.card,
        width: index ? 200 : 170,
        height: index ? 260 : 220,
        backgroundColor: index ? colors.secondary : colors.card,
      }}
    >
      <Image
        source={image}
        style={[styles.image, { height: index ? 150 : 100 }]}
        resizeMode="cover"
      />
      <TouchableOpacity style={styles.heartWrapper}>
        <AntDesign name="heart" size={24} color={colors.red} />
      </TouchableOpacity>
      <View style={styles.bottom}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.rating}>
            <FontAwesome name="star" size={15} color={colors.btn} /> {''}
            {rating}
          </Text>
        </View>
        <Text style={styles.price}>
          ${''} {price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
