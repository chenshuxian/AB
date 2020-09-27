import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import * as firebase from 'firebase';
// eslint-disable-next-line import/named
import firebaseConfig from './config';

firebase.initializeApp(firebaseConfig);

import useCachedResources from './hooks/useCachedResources';

import LinkingConfiguration from './navigation/LinkingConfiguration';
import EatScreen from './screens/EatScreen';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default function App(props) {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar barStyle='dark-content' />}
      <NavigationContainer linking={LinkingConfiguration}>
        <Stack.Navigator headerMode='none' initialRouteName='Loading'>
          <Stack.Screen name='Loading' component={LoadingScreen} />
          <Stack.Screen name='Login' component={LoginScreen} />
          <Stack.Screen name='Eat' component={EatScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
