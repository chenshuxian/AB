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
    backgroundColor: 'white',
  },
  card: {
    width: width - 40,
    marginBottom: 10,
    alignSelf: 'center',
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
        onClick={() =>
          props.navigation.navigate('Detail', {
            url: require('../assets/images/food1.jpg'),
          })
        }
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
  </SafeAreaView>
);
export default ListScreen;
