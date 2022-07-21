import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../colors';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  itemWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 100,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: colors.secondary,
    marginHorizontal: 10,
  },
  name: {
    color: '#fff',
  },
});

const Items = [
  {
    id: 1,
    name: 'Skin Care',
  },
  {
    id: 2,
    name: 'Facial Wash',
  },
  {
    id: 3,
    name: 'Body Wash',
  },
  {
    id: 4,
    name: 'Mouth Wash',
  },
];

interface IItem {
  id: number;
  name: string;
}

const CategoriesComponent = () => {
  const [categories, setCategories] = useState<IItem[]>(Items);

  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
    >
      {categories?.map(({ id, name }) => (
        <TouchableOpacity key={id} style={styles.itemWrapper}>
          <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default CategoriesComponent;
