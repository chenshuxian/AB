import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Header = (props) => {
  const { params } = props.props.route;
  const page = props.props.route.name;
  let startDate, endDate, days;
  console.log(`test ${page}`);

  const SelectDate = () => {
    // eslint-disable-next-line react/prop-types
    if (params && params.startDate && params.endDate) {
      startDate = params.startDate;
      endDate = params.endDate;
      days = params.days;
      // console.log(`days ${params.days}`);
      return (
        <Text
          style={{ fontWeight: 'bold' }}
        >{`${params.startDate} - ${params.endDate}`}</Text>
      );
    }
    return <Text></Text>;
  };
  const Back = () => {
    if (page !== 'Home') {
      return (
        <TouchableOpacity onPress={() => props.props.navigation.goBack()}>
          <AntDesign name='left' color='grey' size={20} />
        </TouchableOpacity>
      );
    }
    return <Text></Text>;
  };
  return (
    <View
      style={{
        borderColor: 'white',
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
      }}
    >
      <Back />
      <SelectDate />
      <TouchableOpacity
        onPress={() =>
          props.props.navigation.navigate('Calendar', {
            name: page,
            startDate,
            endDate,
            days,
          })
        }
      >
        <Text
          style={{
            fontSize: 15,
            textDecorationLine: 'underline',
            fontWeight: 'bold',
            textAlign: 'right',
            color: 'grey',
          }}
        >
          選擇日期
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
