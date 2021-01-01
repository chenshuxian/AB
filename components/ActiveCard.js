import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements';

const { width, height } = Dimensions.get('window');

const Heart = () => {
  const [habit, setHabit] = useState(0);
  if (habit) {
    return (
      <Icon
        name='heart'
        type='antdesign'
        color='red'
        onPress={() => {
          setHabit(!habit);
        }}
      />
    );
  }
  return (
    <Icon
      name='hearto'
      type='antdesign'
      color='white'
      onPress={() => {
        setHabit(!habit);
      }}
    />
  );
};

const ActiveCard = (props) => {
  return (
    <View style={{ ...styles.card, ...props.listStyle }}>
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={{ flex: 1 }} onPress={() => props.onClick()}>
          <Image
            source={props.imgUrl}
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: 'cover',
              borderRadius: 10,
            }}
          />
        </TouchableOpacity>
        <View style={{ position: 'absolute', right: 10, top: 10 }}>
          <Heart />
        </View>
      </View>
      <View>
        <Text style={[styles.cardtext, props.textStyle]}>{props.title}</Text>
        <Text style={[styles.cardtext, props.textStyle]}>{props.date}</Text>
        <Text style={[styles.cardtext, props.textStyle]}>{props.loc}</Text>
      </View>
    </View>
  );
};
export default ActiveCard;

const styles = StyleSheet.create({
  card: {
    width: (width * 2) / 3,
    height: height / 3,
    marginHorizontal: 5,
    marginTop: 20,
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 3 },
    shadowRadius: 3,
    shadowOpacity: 0.4,
  },
  cardtext: {
    marginTop: 5,
  },
});
