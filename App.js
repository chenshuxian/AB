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
import CalendarScreen from './screens/CalendarScreen';
import ListScreen from './screens/ListScreen';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

firebase.initializeApp(firebaseConfig);

import { View, TouchableOpacity } from 'react-native';

function MyTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  // console.log(state.routes);
  // console.log(state.routes[state.index].key);

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        marginHorizontal: 30,
        marginBottom: 20,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        // console.log(route.key);
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        // console.log(label);
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        if (label !== 'List') {
          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole='button'
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ alignItems: 'center' }}
            >
              <AntDesign name={options.tabBarIcon} color='grey' size={20} />
              <Text
                style={{ color: isFocused ? 'black' : 'grey', fontSize: 12 }}
              >
                {label}
              </Text>
            </TouchableOpacity>
          );
        }
      })}
    </View>
  );
}

function ButtomTabs() {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarLabel: '活動',
          tabBarIcon: 'search1',
        }}
      />
      <Tab.Screen
        name='Habit'
        component={HabitScreen}
        options={{
          tabBarLabel: '我的最愛',
          tabBarIcon: 'hearto',
        }}
      />
      <Tab.Screen
        name='Notice'
        component={NoticeScreen}
        options={{
          tabBarLabel: '提醒',
          tabBarIcon: 'bells',
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarLabel: '設定',
          tabBarIcon: 'setting',
        }}
      />
      <Tab.Screen
        name='List'
        component={ListScreen}
        options={{
          tabBarLabel: 'List',
          tabBarIcon: 'setting',
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
          <Stack.Screen name='Calendar' component={CalendarScreen} />
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
