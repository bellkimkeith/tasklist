import {StyleSheet, View} from 'react-native';
import React from 'react';
import SearchBar from '../components/SearchBar';
import TaskList from '../components/TaskList';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <TaskList />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#EEEFFF',
  },
});
