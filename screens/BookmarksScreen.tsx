import {StyleSheet, View} from 'react-native';
import React from 'react';
import TaskList from '../components/TaskList';
import {useTaskStore} from '../store';

const BookmarksScreen = () => {
  const tasks = useTaskStore().tasks;
  const bookmarkedTasks = tasks.filter(task => task.bookmarked);
  return (
    <View style={styles.container}>
      <TaskList tasks={bookmarkedTasks} />
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
