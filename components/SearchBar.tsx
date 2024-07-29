import {
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faArrowDownAZ,
  faArrowUpZA,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

type SearchBarProps = {
  setSearchText: (text: string) => void;
  sortToggle: boolean;
  setSortToggle: () => void;
};

const SearchBar = ({
  setSearchText,
  sortToggle,
  setSortToggle,
}: SearchBarProps) => {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon={faMagnifyingGlass} size={24} color="#18122B" />
      <View style={styles.search}>
        <TextInput
          placeholder="Search"
          autoCorrect={false}
          autoCapitalize="none"
          clearButtonMode="always"
          onChangeText={setSearchText}
        />
      </View>
      <TouchableOpacity onPress={setSortToggle}>
        <FontAwesomeIcon
          icon={sortToggle ? faArrowDownAZ : faArrowUpZA}
          size={24}
        />
      </TouchableOpacity>
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
    backgroundColor: '#D2DAFF',
    borderRadius: Platform.OS === 'ios' ? 20 : 8,
    padding: 12,
    borderWidth: 0.2,
  },
  search: {
    flex: 1,
  },
});
