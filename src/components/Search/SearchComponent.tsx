import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { AntDesign, EvilIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 30,
  },
  inputWrapper: {
    flex: 1,
  },
  input: {
    padding: 10,
    paddingHorizontal: 50,
    height: 50,
    backgroundColor: 'rgba(228, 224, 224, 0.676)',
    borderRadius: 30,
  },
  barWrapper: {
    height: 50,
    width: 50,
    backgroundColor: '#e8dfdf7a',
    borderRadius: 50,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface SearchComponentProps {}

const SearchComponent = (props: SearchComponentProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput placeholder="Search" style={styles.input} />
        <EvilIcons
          name="search"
          size={30}
          color="black"
          style={{
            ...StyleSheet.absoluteFillObject,
            top: 15,
            left: 10,
            height: 30,
            width: 30,
          }}
        />
      </View>
      <TouchableOpacity style={styles.barWrapper}>
        <AntDesign name="bars" size={24} color={'white'} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchComponent;
