import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet } from 'react-native';
import { ThemeProvider, Text } from 'react-native-elements';

import * as firebase from 'firebase';
import firebaseConfig from './config';

import useCachedResources from './hooks/useCachedResources';

import LinkingConfiguration from './navigation/LinkingConfiguration';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import CalendarScreen from './screens/CalendarScreen';
import TabBottom from './components/TabBottom';
import DetailScreen from './screens/DetailScreen';
// const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

firebase.initializeApp(firebaseConfig);

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
          <Stack.Screen name='Buttom' component={TabBottom} />
          <Stack.Screen name='Login' component={LoginScreen} />
          <Stack.Screen name='Calendar' component={CalendarScreen} />
          <Stack.Screen name='Detail' component={DetailScreen} />
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
