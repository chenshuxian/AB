import React, { useEffect, useState }  from 'react';
import { Dimensions, StyleSheet, SafeAreaView, ScrollView,Animated, Easing, Image, View } from 'react-native';
import Section from '../components/Section';
import Header from '../components/Header';
import { SocialIcon } from 'react-native-elements';

const { width, height } = Dimensions.get('window');
const Header_Height = height /9;
const Header_Height_Init = height -(height/4);

const HomeScreen = (props) => {

  const scorllY = new Animated.Value(0);
  const startHeaderHeight = height - (height/3);
  const endHeaderHeight = 0; 
  const animatedHeaderHeight = scorllY.interpolate({
    inputRange:[0,50],
    outputRange:[startHeaderHeight,endHeaderHeight],
    extrapolate:'clamp'
  });

  const animatedOpacity = animatedHeaderHeight.interpolate({
    inputRange:[endHeaderHeight,startHeaderHeight],
    outputRange:[0,1],
    extrapolate:'clamp'
  })

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
  ]


  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex:1}}>
      <Header props={props} />
      {/* <Animated.View
        style={{
          height:animatedHeaderHeight,
          opacity:animatedOpacity
          }}
      >
        <Image
          source={require('../assets/images/Home/login3.jpg')}
          style={{flex:1,height:null, width: null }}
        />
      </Animated.View> */}
      <ScrollView 
      scrollEventThrottle={16}>
        <Section
          outStyle={styles.whiteSection}
          Title='近期活動'
          smallTitle='周期性及近一個月活動'
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
      </View>
    </SafeAreaView>
  )};
  
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
