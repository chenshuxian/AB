import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  Animated,
  Button,
} from 'react-native';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';

import LoginBT from '../components/LoginBT';
import StoreInfo from '../components/StoreInfo';
import Seachbar from '../components/Seachbar';

import firebase from 'firebase';

let store = [
  {
    name: '樂華',
    location: '金城北鎮廟',
    tel: '082-333111',
    bg: require('../assets/images/food1.jpg'),
    time: '08:00 ~ 14:00',
  },
  {
    name: '岡山羊肉',
    location: '金城東門菜市場',
    tel: '082-333111',
    bg: require('../assets/images/food2.jpg'),
    time: '08:00 ~ 14:00',
  },
  {
    name: '福記',
    location: '金城東門菜市場',
    tel: '082-333111',
    bg: require('../assets/images/food1.jpg'),
    time: '08:00 ~ 15:00',
  },
];

let bg = [require('../assets/images/food2.jpg')];
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
    this.timeID = setInterval(() => this.rand(), 200);
    this.timeID2 = setInterval(() => {
      clearInterval(this.timeID);
      clearInterval(this.timeID2);
    }, 5000);
  }

  rand() {
    const num = Math.floor(Math.random() * 3);
    const bgNum = Math.floor(Math.random() * 2);
    this.setState({ store: store[num] });
  }

  render() {
    return (
      <View style={{ ...styles.container }}>
        <View style={{ ...StyleSheet.absoluteFill }}>
          <Image style={{ width, height }} source={this.state.store.bg} />
        </View>
        <Seachbar />
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
