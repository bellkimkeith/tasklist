import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEdit, faInfoCircle} from '@fortawesome/free-solid-svg-icons';

const TaskItem = ({title, description, date}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text>{date}</Text>
      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={styles.action}
          onPress={() => console.log('pressed')}>
          <FontAwesomeIcon icon={faInfoCircle} />
          <Text>Details</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.action}
          onPress={() => console.log('pressed')}>
          <FontAwesomeIcon icon={faEdit} />
          <Text>Edit</Text>
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
});
