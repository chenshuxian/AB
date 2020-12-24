import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import HabitScreen from '../screens/HabitScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NoticeScreen from '../screens/NoticeScreen';
import ListScreen from '../screens/ListScreen';

const Tab = createBottomTabNavigator();

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
        // console.log(options);
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

function TabBottom() {
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
export default TabBottom;
