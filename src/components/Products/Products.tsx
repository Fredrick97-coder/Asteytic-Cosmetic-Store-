import { View, Text, FlatList, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Card } from './Cards';
import { Header } from '../welcome';
import { SearchComponent } from '../Search';
import { Categories } from '../Categories';
import { LinearGradientComponent } from '../LinearGradient';
import { colors } from '../colors';
import { modulo, multiply } from 'react-native-reanimated';

const products = [
  {
    id: 1,
    name: 'Fondation',
    price: 29,
    rating: 4.5,
    image: require('../../../assets/img/products/kindpng_935378.png'),
  },
  {
    id: 2,
    name: 'Fondation',
    price: 29,
    rating: 4.5,
    image: require('../../../assets/img/products/kindpng_935378.png'),
  },
  {
    id: 3,
    name: 'Fondation',
    price: 29,
    rating: 4.5,
    image: require('../../../assets/img/products/kindpng_935378.png'),
  },
  {
    id: 4,
    name: 'Fondation',
    price: 29,
    rating: 4.5,
    image: require('../../../assets/img/products/kindpng_935378.png'),
  },
  {
    id: 5,
    name: 'Fondation',
    price: 29,
    rating: 4.5,
    image: require('../../../assets/img/products/kindpng_935378.png'),
  },
  {
    id: 6,
    name: 'Fondation',
    price: 29,
    rating: 4.5,
    image: require('../../../assets/img/products/kindpng_935378.png'),
  },
];

const Products = () => {
  const ListHeaderComponent = () => {
    return (
      <View style={{ overflow: 'hidden' }}>
        {/* header */}
        <Header isHome={true} />
        {/* search */}
        <SearchComponent />
        {/* categories */}
        <Categories />
        <LinearGradientComponent />
        <View style={{ flex: 1 }} />
      </View>
    );
  };
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => `${item.id}`}
      numColumns={2}
      ListHeaderComponent={<ListHeaderComponent />}
      showsVerticalScrollIndicator={false}
      ListHeaderComponentStyle={{
        backgroundColor: colors.primary,
        height: 350,
      }}
      renderItem={({ item, index }) => (
        <Card
          name={item.name}
          price={item.price}
          rating={item.rating}
          image={item.image}
          index={index % 2}
        />
      )}
      columnWrapperStyle={{
        position: 'relative',
        justifyContent: 'space-between',
        top: -70,
        left: 0,
        right: 0,
        flex: 1,
      }}
    />
  );
};

export default Products;
