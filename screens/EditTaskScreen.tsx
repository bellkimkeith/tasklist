import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useTaskStore} from '../store';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {HomeStackParamsList} from '../App';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

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
          onFocus={() => setTaskData({...taskData, title: currentTask.title})}
          defaultValue={currentTask.title}
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
          onFocus={() =>
            setTaskData({...taskData, description: currentTask.description})
          }
          defaultValue={currentTask.description}
        />
        <TouchableOpacity
          onPress={() => {
            if (Object.values(taskData).every(item => item === '')) {
              Alert.alert('No Changes', 'Please update a field.', [
                {text: 'OK'},
              ]);
            } else {
              if (Object.values(taskData).every(item => !!item)) {
                updateTask({
                  ...currentTask,
                  title: taskData.title,
                  description: taskData.description,
                });
                navigation.goBack();
              } else {
                console.log(taskData);
                Alert.alert('Incomplete', 'Please fill up all fields.', [
                  {text: 'OK'},
                ]);
              }
            }
          }}>
          <FontAwesomeIcon icon={faTrash} />
          <Text>Update</Text>
        </TouchableOpacity>
        {/* <Button
          title="Update"
          color="#18122B"
          onPress={() => {
            if (Object.values(taskData).every(item => item === '')) {
              Alert.alert('No Changes', 'Please update a field.', [
                {text: 'OK'},
              ]);
            } else {
              if (Object.values(taskData).every(item => !!item)) {
                updateTask({
                  ...currentTask,
                  title: taskData.title,
                  description: taskData.description,
                });
                navigation.goBack();
              } else {
                console.log(taskData);
                Alert.alert('Incomplete', 'Please fill up all fields.', [
                  {text: 'OK'},
                ]);
              }
            }
          }}
        /> */}
        <Button
          title="Delete"
          color="#18122B"
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
    borderRadius: 16,
  },
});
