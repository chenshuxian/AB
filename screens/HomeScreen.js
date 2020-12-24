import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';

import ActiveCard from '../components/ActiveCard';
import Section from '../components/Section';
import Header from '../components/Header';

const HomeScreen = (props) => {
  const img = [
    {
      imgUrl: require('../assets/images/food1.jpg'),
      title: '秋冬美食',
      date: '2020/12/31',
      loc: 'Taipei',
    },
    {
      imgUrl: require('../assets/images/food2.jpg'),
      title: '秋冬美食',
      date: '2020/12/31',
      loc: 'Taipei',
    },
    {
      imgUrl: require('../assets/images/food1.jpg'),
      title: '秋冬美食',
      date: '2020/12/31',
      loc: 'Taipei',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header props={props} />
      <ScrollView>
        <Section
          outStyle={styles.whiteSection}
          Title='近期活動'
          ACList={img}
          fontColor='black'
          nav={props.navigation.navigate}
        />
        <Section
          outStyle={styles.blackSection}
          Title='四季活動'
          smallTitle='依分類尋找自己喜愛活動'
          ACList={img}
          textStyle={styles.textWhite}
          fontColor='white'
        />
        <Section
          outStyle={styles.whiteSection}
          Title='分類活動'
          smallTitle='依分類尋找自己喜愛活動'
          ACList={img}
          fontColor='black'
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textWhite: {
    color: 'white',
    fontSize: 16,
  },
  whiteSection: {
    borderWidth: 15,
    borderColor: 'white',
  },
  blackSection: {
    backgroundColor: 'black',
    borderWidth: 15,
  },
});
