import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';

import ActiveCard from '../components/ActiveCard';

const HomeScreen = (props) => (
  <SafeAreaView style={styles.container}>
    <View
      style={{
        borderColor: 'white',
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
      }}
    >
      <Text
        style={{
          textAlign: 'right',
          fontSize: 15,
          textDecorationLine: 'underline',
          fontWeight: 'bold',
          marginBottom: 10,
          marginHorizontal: 10,
        }}
      >
        選擇日期
      </Text>
    </View>
    <View
      style={{
        borderWidth: '15',
        borderColor: 'white',
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>近期活動</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator='false'>
        <ActiveCard
          imgUrl={require('../assets/images/food1.jpg')}
          title='秋冬美食'
          date='2020/12/31'
          loc='山外車站'
        />
        <ActiveCard
          imgUrl={require('../assets/images/food2.jpg')}
          title='秋冬美食'
          date='2020/12/31'
          loc='山外車站'
        />
        <ActiveCard
          imgUrl={require('../assets/images/food1.jpg')}
          title='秋冬美食'
          date='2020/12/31'
          loc='山外車站'
        />
      </ScrollView>
    </View>
    <View style={{ backgroundColor: 'black', borderWidth: `15` }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
        分類活動
      </Text>
      <Text style={{ fontSize: 15, color: 'white', marginTop: 5 }}>
        依分類尋找自己喜愛活動
      </Text>
      <ScrollView horizontal>
        <ActiveCard
          imgUrl={require('../assets/images/food1.jpg')}
          title='運動'
          textStyle={styles.textWhite}
        />
        <ActiveCard
          imgUrl={require('../assets/images/food2.jpg')}
          title='美食'
          textStyle={styles.textWhite}
        />
        <ActiveCard
          imgUrl={require('../assets/images/food1.jpg')}
          title='文化'
          textStyle={styles.textWhite}
        />
      </ScrollView>
    </View>
  </SafeAreaView>
);
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  textWhite: {
    color: 'white',
    fontSize: 16,
  },
});
