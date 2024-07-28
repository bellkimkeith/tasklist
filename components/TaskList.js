import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import TaskItem from './TaskItem';
import {useTaskStore} from '../store';

const TaskList = () => {
  const tasks = useTaskStore().tasks;

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({item}) => (
          <TaskItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            date={item.date}
            completed={item.completed}
          />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    rowGap: 12,
  },
});
