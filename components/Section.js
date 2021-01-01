import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ActiveCard from './ActiveCard';
const Ac = (props) => {
  const obj = props.ACList.map((obj, index) => {
    // console.log(index);
    return (
      <ActiveCard
        key={index}
        imgUrl={obj.imgUrl}
        title={obj.title}
        date={obj.date}
        loc={obj.loc}
        onClick={() => props.nav('List')}
        textStyle={props.textStyle}
      />
    );
  });
  return obj;
};

const Section = (props) => (
  <View style={props.outStyle}>
    <Text style={{ fontSize: 20, fontWeight: 'bold', color: props.fontColor }}>
      {props.Title}
    </Text>
    <Text style={{ fontSize: 15, color: props.fontColor, marginTop: 5 }}>
      {props.smallTitle}
    </Text>
    <ScrollView horizontal>
      <Ac ACList={props.ACList} textStyle={props.textStyle} nav={props.nav} />
    </ScrollView>
  </View>
);
export default Section;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
