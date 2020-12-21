import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import ActiveCard from '../components/ActiveCard';
import Header from '../components/Header';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: width - 40,
    marginBottom: 10,
  },
});

const ListScreen = (props) => (
  <SafeAreaView style={styles.container}>
    <Header props={props} />
    <ScrollView showsVerticalScrollIndicator='false'>
      <ActiveCard
        imgUrl={require('../assets/images/food1.jpg')}
        title='秋冬美食'
        date='2020/12/31'
        loc='山外車站'
        listStyle={styles.card}
        onClick={() => console.log('detail')}
      />
      <ActiveCard
        imgUrl={require('../assets/images/food2.jpg')}
        title='秋冬美食'
        date='2020/12/31'
        loc='山外車站'
        listStyle={styles.card}
        onClick={() => console.log('detail')}
      />
      <ActiveCard
        imgUrl={require('../assets/images/food1.jpg')}
        title='秋冬美食'
        date='2020/12/31'
        loc='山外車站'
        listStyle={styles.card}
        onClick={() => console.log('detail')}
      />
    </ScrollView>
    <Text onPress={() => props.navigation.navigate('Home')}>
      ListScreen, goBack
    </Text>
  </SafeAreaView>
);
export default ListScreen;
