import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Button, Divider } from 'react-native-elements';
import { AntDesign, Fontisto } from '@expo/vector-icons';
const { width, height } = Dimensions.get('window');

const DetailScreen = (props) => {
  const { params } = props.route;
  //console.log(`url ${params.url}`);
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, width }}>
        <Image
          source={params.url}
          style={{
            flex: 1,
            width: null,
            height: null,
          }}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator='false'
        style={{
          flex: 1,
          margin: 20,
          marginBottom: 0,
          width: width - 40,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            marginBottom: 10,
            fontWeight: 'bold',
          }}
        >
          金門馬拉松
        </Text>
        <Divider style={styles.divider} />
        <Text style={styles.context}>
          <AntDesign name='calendar' size={24} color='black' /> : 2021-01-16~17
        </Text>
        <Text style={styles.context}>
          <AntDesign name='clockcircleo' size={24} color='black' /> :
          05:00~15:00
        </Text>
        <Text style={styles.context}>
          <AntDesign name='pushpin' size={24} color='black' /> : 金門大學
        </Text>
        <Divider style={styles.divider} />
        <Text style={styles.context}>
          <AntDesign name='car' size={24} color='black' /> :{'\n'}
          可於於各鄉鎮公車站搭程接駁車前往會場{'\n'}
          接駁車每10分鐘一班{'\n'}時間 5:00 ~ 6:00
        </Text>
        <Divider style={styles.divider} />
        <Text style={styles.context}>
          <AntDesign name='infocirlceo' size={24} color='black' /> 簡介:
        </Text>
        <Text style={styles.context}>
          金門馬拉松報名時間12-01~31，{'\n'}
          主要分為42公里/21公里/10公里/5公里組，完賽選手將可獲得38度金門馬拉松紀念酒
        </Text>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          height: 80,
          borderTopWidth: 1,
          borderColor: 'grey',
          width,
        }}
      >
        <Button
          buttonStyle={{
            backgroundColor: 'green',
            margin: 10,
            width: 100,
            borderRadius: 10,
          }}
          icon={<AntDesign name='close' size={26} color='white' />}
          onPress={() => props.navigation.goBack()}
        />
        <Button
          buttonStyle={{
            backgroundColor: 'red',
            margin: 10,
            width: 100,
            borderRadius: 10,
          }}
          icon={<AntDesign name='hearto' size={26} color='white' />}
        />
      </View>
    </View>
  );
};
export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  context: {
    fontSize: 20,
    marginBottom: 5,
  },
  divider: {
    height: 0.5,
    marginVertical: 15,
    width,
  },
});
