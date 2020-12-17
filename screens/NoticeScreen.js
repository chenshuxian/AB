import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NoticeScreen = (props) => (
  <View style={styles.container}>
    <Text>NoticeScreen</Text>
  </View>
);
export default NoticeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
