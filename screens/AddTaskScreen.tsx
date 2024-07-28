import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AddTaskScreen = () => {
  return (
    <View style={styles.container}>
      <Text>AddTaskScreen</Text>
    </View>
  );
};

export default AddTaskScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#EEEFFF',
  },
});
