import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

let width = Dimensions.get('window').width;

export default class LoginBT extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => this.props.press()}
      >
        <View style={{ ...styles.button, backgroundColor: this.props.bgColor }}>
          <Text style={styles.text}> {this.props.text} </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 60,
    marginHorizontal: (width - 70) / 2,
    width: 240,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
