import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {HomeStackParamsList} from '../App';
import {useTaskStore} from '../store';
import {faBookmark as faBookmarkReg} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBookmark} from '@fortawesome/free-solid-svg-icons';

type ProfileScreenRouteProp = RouteProp<HomeStackParamsList, 'Details'>;

type Props = {
  route: ProfileScreenRouteProp;
};

const DetailsScreen = ({route}: Props) => {
  const {id} = route.params;
  const tasks = useTaskStore().tasks;
  const toggleBookmark = useTaskStore().toggleBookmark;
  const currentTask = tasks.find(item => item.id === id);

  if (!currentTask) {
    return (
      <View style={styles.container}>
        <Text>Task not found</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.tag}>Title: {currentTask.title}</Text>
          <TouchableOpacity onPress={() => toggleBookmark(currentTask.id)}>
            <FontAwesomeIcon
              icon={currentTask.bookmarked ? faBookmark : faBookmarkReg}
              size={24}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.tag}>Description:</Text>
          <ScrollView style={styles.scrollContainer}>
            <Text style={styles.description}>{currentTask.description}</Text>
          </ScrollView>
        </View>

        <Text style={styles.tag}>Created on: {currentTask.date}</Text>
      </View>
    );
  }
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#EEEFFF',
    gap: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tag: {
    fontWeight: 'bold',
  },
  description: {
    fontWeight: 'semibold',
    padding: 10,
  },
  descriptionContainer: {
    flex: 1,
    gap: 4,
  },
  scrollContainer: {
    borderRadius: 12,
    backgroundColor: '#DDDEEE',
  },
  actionsContainer: {
    flexDirection: 'row',
    gap: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
