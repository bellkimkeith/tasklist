/* eslint-disable react/no-unstable-nested-components */
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BookmarksScreen from './screens/BookmarksScreen';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBookmark, faHome} from '@fortawesome/free-solid-svg-icons';

function App(): React.JSX.Element {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarIcon: ({size, color}) => (
              <FontAwesomeIcon icon={faHome} size={size} color={color} />
            ),
            headerStyle: {backgroundColor: '#9290C3'},
            headerTintColor: '#18122B',
            tabBarStyle: {backgroundColor: '#9290C3'},
            tabBarActiveTintColor: '#27005D',
            tabBarInactiveTintColor: '#EEEFFF',
          }}
          name="Home"
          component={HomeScreen}
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
          }}
          name="Bookmarks"
          component={BookmarksScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
