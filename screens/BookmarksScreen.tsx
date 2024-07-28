import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const BookmarksScreen = () => {
  return (
    <View style={styles.container}>
      <Text>BookmarksScreen</Text>
    </View>
  );
};

export default BookmarksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#EEEFFF',
  },
});
