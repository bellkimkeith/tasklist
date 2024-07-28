import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon={faMagnifyingGlass} size={24} color="#18122B" />
      <View style={styles.search}>
        <TextInput
          placeholder="Search"
          autoCorrect={false}
          autoCapitalize="none"
          clearButtonMode="always"
        />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#9290C3',
    borderRadius: 20,
    padding: 12,
    borderWidth: 0.2,
  },
  search: {
    flex: 1,
  },
});
