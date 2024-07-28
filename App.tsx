/* eslint-disable react/no-unstable-nested-components */
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BookmarksScreen from './screens/BookmarksScreen';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAdd, faBookmark, faHome} from '@fortawesome/free-solid-svg-icons';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddTaskScreen from './screens/AddTaskScreen';
import DetailsScreen from './screens/DetailsScreen';

type DetailsScreenParams = {
  id: string;
};

export type HomeStackParamsList = {
  Home: undefined;
  Details: DetailsScreenParams;
  AddTask: undefined;
};

function App(): React.JSX.Element {
  const Tab = createBottomTabNavigator();
  const HomeStack = createNativeStackNavigator<HomeStackParamsList>();
  const BookmarkStack = createNativeStackNavigator();

  function HomeStackScreen() {
    const navigation = useNavigation();
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: {backgroundColor: '#9290C3'},
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('AddTask' as never)}>
                <FontAwesomeIcon
                  icon={faAdd}
                  style={styles.headerIcon}
                  size={24}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <HomeStack.Screen
          name="AddTask"
          component={AddTaskScreen}
          options={{
            headerStyle: {backgroundColor: '#9290C3'},
            headerTintColor: '#18122B',
            title: 'Add Task',
          }}
        />
        <HomeStack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            headerStyle: {backgroundColor: '#9290C3'},
            headerTintColor: '#18122B',
            title: 'Task Details',
          }}
          initialParams={{id: ''}}
        />
      </HomeStack.Navigator>
    );
  }

  function BookmarkStackScreen() {
    return (
      <BookmarkStack.Navigator>
        <BookmarkStack.Screen
          name="Bookmark"
          component={BookmarksScreen}
          options={{
            headerStyle: {backgroundColor: '#9290C3'},
          }}
        />
      </BookmarkStack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          options={{
            tabBarIcon: ({size, color}) => (
              <FontAwesomeIcon icon={faHome} size={size} color={color} />
            ),
            headerTintColor: '#18122B',
            tabBarStyle: {backgroundColor: '#9290C3'},
            tabBarActiveTintColor: '#27005D',
            tabBarInactiveTintColor: '#EEEFFF',
            title: 'Home',
          }}
          name="HomeStackScreen"
          component={HomeStackScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({size, color}) => (
              <FontAwesomeIcon icon={faBookmark} size={size} color={color} />
            ),
            headerStyle: {backgroundColor: '#9290C3'},
            headerTintColor: '#18122B',
            tabBarStyle: {backgroundColor: '#9290C3'},
            tabBarActiveTintColor: '#27005D',
            tabBarInactiveTintColor: '#EEEFFF',
            title: 'Bookmark',
          }}
          name="BookmarkStackScreen"
          component={BookmarkStackScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIcon: {
    marginRight: 12,
  },
});

export default App;
