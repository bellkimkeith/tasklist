import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = () => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      description: 'sample description',
      date: '07/28/2024',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      description: 'sample description',
      date: '07/28/2024',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      description: 'sample description',
      date: '07/28/2024',
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <TaskItem
            key={item.id}
            title={item.title}
            description={item.description}
            date={item.date}
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
