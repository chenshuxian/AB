/* eslint-disable global-require */
import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  Button,
} from 'react-native';

import firebase from 'firebase';
import { Ionicons } from '@expo/vector-icons';
import LoginBT from '../components/LoginBT';
import StoreInfo from '../components/StoreInfo';

import store from '../constants/Data';
// import Seachbar from '../components/Seachbar';

const LEN = store.length;
const SEC = 5000;

const { height, width } = Dimensions.get('window');

class EatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: store[0],
    };
  }

  componentDidMount() {}

  eatPress() {
    this.timeID = setInterval(() => this.rand(), 100);
    this.timeID2 = setInterval(() => {
      clearInterval(this.timeID);
      clearInterval(this.timeID2);
    }, SEC);
  }

  rand() {
    // console.log(`store len : ${store.length}`);
    const num = Math.floor(Math.random() * LEN);
    this.setState({ store: store[num] });
  }

  render() {
    return (
      <View style={{ ...styles.container }}>
        <View style={{ ...StyleSheet.absoluteFill }}>
          <Image style={{ width, height }} source={this.state.store.bg} />
        </View>
        <View
          style={{
            flexDirection: 'row-reverse',
            marginTop: 40,
          }}
        >
          <Ionicons
            style={{ marginRight: 10 }}
            name='ios-settings'
            size={35}
            color='white'
          />
        </View>
        <View
          style={{
            flex: 2,
            justifyContent: 'flex-end',
            paddingBottom: height / 3 / 2,
          }}
        >
          <StoreInfo store={this.state.store} />
          <Button title='SignOut' onPress={() => firebase.auth().signOut()} />
        </View>
        <View
          style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 20 }}
        >
          <LoginBT
            text='Eat'
            bgColor='white'
            press={this.eatPress.bind(this)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: 60,
  },
  fontColor: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    shadowOffset: { width: 5, height: 0 },
    shadowColor: 'black',
    shadowOpacity: 0.8,
  },
});

export default EatScreen;
