import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEdit, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import {faSquare, faSquareCheck} from '@fortawesome/free-regular-svg-icons';
import {useTaskStore} from '../store';

const TaskItem = ({id, title, description, date, completed}) => {
  const navigation = useNavigation();
  const disabledIconColor = '#CCCCCC';
  const toggleComplete = useTaskStore().toggleComplete;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={[styles.header, completed && styles.completedText]}>
          {title}
        </Text>
        <TouchableOpacity onPress={() => toggleComplete(id)}>
          <FontAwesomeIcon
            icon={completed ? faSquareCheck : faSquare}
            size={20}
          />
        </TouchableOpacity>
      </View>
      <Text style={[styles.description, completed && styles.completedText]}>
        {description}
      </Text>
      <Text style={completed && styles.completedText}>{date}</Text>
      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={styles.action}
          disabled={completed}
          onPress={() => navigation.navigate('Details', {id: id})}>
          <FontAwesomeIcon
            icon={faInfoCircle}
            color={completed && disabledIconColor}
          />
          <Text style={completed && styles.disabled}>Details</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.action}
          disabled={completed}
          onPress={() => console.log('pressed')}>
          <FontAwesomeIcon
            icon={faEdit}
            color={completed && disabledIconColor}
          />
          <Text style={completed && styles.disabled}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9290C3',
    borderRadius: Platform.OS === 'android' ? 8 : 20,
    shadowRadius: 2,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    borderWidth: 0.2,
    elevation: Platform.OS === 'android' ? 4 : 0,
    padding: 16,
    gap: 8,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionsContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    gap: 12,
  },
  action: {
    flexDirection: 'row',
  },
  header: {
    fontWeight: 'bold',
  },
  description: {
    fontWeight: 'semibold',
  },
  disabled: {
    color: '#CCCCCC',
  },
  completedText: {
    textDecorationLine: 'line-through',
  },
});
