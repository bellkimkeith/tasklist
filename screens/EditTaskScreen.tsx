import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useTaskStore} from '../store';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {HomeStackParamsList} from '../App';
import {faFloppyDisk, faTrash} from '@fortawesome/free-solid-svg-icons';
import CustomButtonWithIcon from '../components/CustomButtonWithIcon';

type AddTaskForm = {
  title: string;
  description: string;
};

type ProfileScreenRouteProp = RouteProp<HomeStackParamsList, 'EditTask'>;

type Props = {
  route: ProfileScreenRouteProp;
};

const EditTaskScreen = ({route}: Props) => {
  const {id} = route.params;
  const tasks = useTaskStore().tasks;
  const currentTask = tasks.find(task => task.id === id);
  const navigation = useNavigation();
  const updateTask = useTaskStore().updateTask;
  const deleteTask = useTaskStore().deleteTask;
  const [taskData, setTaskData] = useState<AddTaskForm>({
    title: '',
    description: '',
  });

  useEffect(() => {
    if (currentTask) {
      setTaskData({
        title: currentTask.title,
        description: currentTask.description,
      });
    } else {
      setTaskData({
        title: '',
        description: '',
      });
    }
  }, [currentTask]);

  if (!id || !currentTask) {
    return (
      <View style={styles.container}>
        <Text>Task not found.</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Title"
          onChangeText={text => setTaskData({...taskData, title: text})}
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect={false}
          value={taskData.title}
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
          value={taskData.description}
        />
        <CustomButtonWithIcon
          text="Update"
          onPress={() => {
            if (Object.values(taskData).every(item => !!item)) {
              updateTask({
                ...currentTask,
                title: taskData.title,
                description: taskData.description,
              });
              navigation.goBack();
            } else {
              Alert.alert('Incomplete', 'Please fill up all fields.', [
                {text: 'OK'},
              ]);
            }
          }}
          iconName={faFloppyDisk}
        />
        <CustomButtonWithIcon
          text="Delete"
          onPress={() => {
            Alert.alert(
              'Confirm Action',
              'Are you sure you want to delete task?',
              [
                {
                  text: 'Yes',
                  onPress: () => {
                    deleteTask(id);
                    navigation.goBack();
                  },
                },
                {text: 'Cancel'},
              ],
            );
          }}
          iconName={faTrash}
        />
      </View>
    );
  }
};

export default EditTaskScreen;

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
    borderRadius: 8,
  },
});
