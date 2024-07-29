import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import SearchBar from '../components/SearchBar';
import TaskList from '../components/TaskList';
import {useTaskStore} from '../store';

const HomeScreen = () => {
  const tasks = useTaskStore().tasks;
  const [searchText, setSearchText] = useState('');
  const [sortToggle, setSortToggle] = useState(true);
  const filteredTasks = tasks.filter(task => task.title.includes(searchText));

  const updateSearchInput = (text: string) => {
    setSearchText(text);
  };

  const updateSort = () => {
    setSortToggle(!sortToggle);
  };

  const sortFilteredTasks = (sort: boolean) => {
    return sort
      ? filteredTasks.sort((a, b) => a.title.localeCompare(b.title))
      : filteredTasks.sort((a, b) => b.title.localeCompare(a.title));
  };

  return (
    <View style={styles.container}>
      <SearchBar
        setSearchText={updateSearchInput}
        sortToggle={sortToggle}
        setSortToggle={updateSort}
      />
      <TaskList tasks={sortFilteredTasks(sortToggle)} />
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
