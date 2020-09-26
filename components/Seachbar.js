import React, { Component } from 'react';
import { View, Text, SafeAreaView, TextInput, Animated } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

class Seachbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              backgroundColor: 'white',
              marginHorizontal: 20,
              shadowOffset: { width: 0, height: 0 },
              shadowColor: 'black',
              shadowOpacity: 0.2,
              elevation: 1,
            }}
          >
            <Ionicons name='ios-search' size={20} />
            <TextInput
              underlineColorAndroid='transparent'
              placeholder='小吃、甜點'
              placeholderTextColor='grey'
              style={{
                flex: 1,
                fontWeight: '700',
                marginLeft: 5,
                backgroundColor: 'white',
              }}
            />
          </View>
          <Animated.View
            style={{ marginHorizontal: 20, position: 'relative', top: 10 }}
          >
            <View
              style={{
                minHeight: 20,
                width: 50,
                padding: 5,
                backgroundColor: 'white',
                borderColor: '#dddddd',
                borderWidth: 1,
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 16,
                  textAlign: 'center',
                }}
              >
                設定
              </Text>
            </View>
          </Animated.View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Seachbar;
