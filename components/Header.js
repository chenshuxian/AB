import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Header = (props) => {
  const { params } = props.props.route;
  console.log(props.props.route);
  const SelectDate = () => {
    // eslint-disable-next-line react/prop-types
    if (params && params.startDate && params.endDate) {
      return (
        <Text
          style={{ fontWeight: 'bold' }}
        >{`${params.startDate} - ${params.endDate}`}</Text>
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
      <SelectDate />
      <TouchableOpacity
        onPress={() => props.props.navigation.navigate('Calendar')}
      >
        <Text
          style={{
            fontSize: 15,
            textDecorationLine: 'underline',
            fontWeight: 'bold',
            textAlign: 'right',
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
