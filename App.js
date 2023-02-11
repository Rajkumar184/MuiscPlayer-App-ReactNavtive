import * as React from 'react';
import HomeScreen from './src/pages/HomeScreen';
import PlayerScreen from './src/pages/PlayerScreen';
import PlayListScreen from './src/pages/PlayListScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="PlayerScreen" component={PlayerScreen} options={{
          tabBarLabel: 'Player',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="musical-notes-outline" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="PlayListScreen" component={PlayListScreen} options={{
          tabBarLabel: 'Playlist',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="music-box-multiple-outline" color={color} size={size} />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;