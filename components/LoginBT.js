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
    height: 70,
    marginHorizontal: (width - 70) / 2,
    width: 70,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.8,
    marginVertical: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
