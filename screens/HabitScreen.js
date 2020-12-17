import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HabitScreen = (props) => (
  <View style={styles.container}>
    <Text>HabitScreen</Text>
  </View>
);
export default HabitScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
