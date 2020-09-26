import React, { Component } from 'react';
import { View, Text } from 'react-native';

class LoginScree extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> LoginScreen </Text>
      </View>
    );
  }
}

export default LoginScree;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
