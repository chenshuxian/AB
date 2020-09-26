import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

function IconContainer({ text, icon }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      <SimpleLineIcons name={icon} size={24} color='white' />
      <Text style={styles.fontColor}>{text}</Text>
    </View>
  );
}

class StoreInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <Text style={[styles.fontColor, styles.text]}>
          {this.props.store.name}
        </Text>
        <View style={{ marginTop: 20 }}>
          <IconContainer icon='location-pin' text={this.props.store.location} />
          <IconContainer icon='phone' text={this.props.store.tel} />
          <IconContainer icon='clock' text={this.props.store.time} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    paddingLeft: 10,
  },
});

export default StoreInfo;
