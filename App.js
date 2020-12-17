import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider, Text } from 'react-native-elements';

import * as firebase from 'firebase';
// eslint-disable-next-line import/named
import { AntDesign } from '@expo/vector-icons';
import firebaseConfig from './config';

import useCachedResources from './hooks/useCachedResources';

import LinkingConfiguration from './navigation/LinkingConfiguration';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import HabitScreen from './screens/HabitScreen';
import ProfileScreen from './screens/ProfileScreen';
import NoticeScreen from './screens/NoticeScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

firebase.initializeApp(firebaseConfig);

function ButtomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarLabel: () => (
            <Text style={{ fontSize: 12, color: 'grey' }}>活動</Text>
          ),
          tabBarIcon: () => <AntDesign name='search1' color='grey' size={20} />,
        }}
      />
      <Tab.Screen
        name='Habit'
        component={HabitScreen}
        options={{
          tabBarLabel: () => (
            <Text style={{ fontSize: 12, color: 'grey' }}>我的最愛</Text>
          ),
          tabBarIcon: () => <AntDesign name='hearto' color='grey' size={20} />,
        }}
      />
      <Tab.Screen
        name='Notice'
        component={NoticeScreen}
        options={{
          tabBarLabel: () => (
            <Text style={{ fontSize: 12, color: 'grey' }}>提醒</Text>
          ),
          tabBarIcon: () => <AntDesign name='bells' color='grey' size={20} />,
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarLabel: () => (
            <Text style={{ fontSize: 12, color: 'grey' }}>設定</Text>
          ),
          tabBarIcon: () => <AntDesign name='setting' color='grey' size={20} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App(props) {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <ThemeProvider>
      {Platform.OS === 'ios' && <StatusBar barStyle='dark-content' />}
      <NavigationContainer linking={LinkingConfiguration}>
        <Stack.Navigator headerMode='none' initialRouteName='Loading'>
          <Stack.Screen name='Loading' component={LoadingScreen} />
          <Stack.Screen name='Buttom' component={ButtomTabs} />
          <Stack.Screen name='Login' component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
