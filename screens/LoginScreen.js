import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { signInWithGoogleAsync } from '../auths/GoogleAuth';
import { signInWithFacebookAsync } from '../auths/FacebookAuth';

import LoginBT from '../components/LoginBT';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      // eslint-disable-next-line no-use-before-define
      <View style={styles.container}>
        <Text style={styles.name}>
          <Text style={{ color: 'red', fontSize: 40 }}>A</Text>
          ctivity
          <Text style={{ color: 'blue', fontSize: 40 }}>B</Text>
          ox
        </Text>
        <View style={{}}>
          <LoginBT
            text='Sign In With Google'
            bgColor='#db3236'
            press={signInWithGoogleAsync}
          />
          <LoginBT
            text='Sign In With FB'
            bgColor='#4267B2'
            press={signInWithFacebookAsync}
          />
        </View>
      </View>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    alignItems: 'center',
    textShadowColor: 'grey',
    textShadowOffset: { width: 2, height: 1 },
    textShadowRadius: 3,
  },
});
