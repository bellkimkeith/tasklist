import {Alert, Button, StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {useTaskStore} from '../store';
import {useNavigation} from '@react-navigation/native';

type AddTaskForm = {
  title: string;
  description: string;
};

const AddTaskScreen = () => {
  const [taskData, setTaskData] = useState<AddTaskForm>({
    title: '',
    description: '',
  });
  const navigation = useNavigation();
  const addTask = useTaskStore().addTask;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        onChangeText={text => setTaskData({...taskData, title: text})}
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
      />
      <TextInput
        multiline={true}
        style={styles.input}
        maxLength={100}
        placeholder="Description max 100 characters"
        onChangeText={text => setTaskData({...taskData, description: text})}
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
      />
      <Button
        title="Submit"
        color="#18122B"
        onPress={() => {
          if (Object.values(taskData).every(item => !!item)) {
            addTask({
              id: new Date().toISOString(),
              title: taskData.title,
              description: taskData.description,
              date: new Intl.DateTimeFormat('en-PH').format(new Date()),
              completed: false,
              bookmarked: false,
            });
            navigation.goBack();
          } else {
            Alert.alert('Incomplete', 'Please fill up all fields.', [
              {text: 'OK'},
            ]);
          }
        }}
      />
    </View>
  );
};

export default AddTaskScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#EEEFFF',
    gap: 12,
  },
  input: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 16,
  },
});
