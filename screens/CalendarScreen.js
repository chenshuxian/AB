import React, { useState, useEffect } from 'react';
import { CalendarList } from 'react-native-calendars';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Button, Icon } from 'react-native-elements';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

const lineColor = 'grey';
const calendarHeight = height - 200;

const CalendarScreen = (props) => {
  const params = props.route.params;

  const [mark, setMark] = useState();
  const [count, setCount] = useState(0);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [days, setDays] = useState();
  const oneDay = 86400000;
  const fatherPage = props.route.params.name;
  const sd = {};

  console.log(
    `start ${params.startDate} end ${params.endDate} days ${params.days}`
  );
  const combindMark = (start, mid, end) => {
    const upd = {
      ...start,
      ...mid,
      ...{
        [end]: {
          endingDay: true,
          color: '#50cebb',
          textColor: 'white',
        },
      },
    };

    setMark(upd);
  };

  // 中間日期計算
  // return Arr = Object
  // params days = 起始日-結束日
  const midDays = (startDay, days) => {
    const dayArr = {};
    for (let i = 1; i < days; i++) {
      dayArr[new Date(startDay).addDays(i).format('yyyy-MM-dd').toString()] = {
        color: '#70d7c7',
        textColor: 'white',
      };
    }
    return dayArr;
  };

  // 如果存在起始及結束日期進行以下設定;
  if (params.startDate && params.endDate) {
    setStartDate(params.startDate);
    setEndDate(params.endDate);
    setDays(params.days);

    console.log('rerender');
    // 起始點設罝
    sd[params.startDate] = {
      startingDay: true,
      color: '#50cebb',
      textColor: 'white',
    };
    const mid = midDays(params.startDate, params.days);
    params.startDate = null;
    // setMark(upd);
    combindMark(sd, mid, params.endDate);
  }

  const reset = () => {
    setMark({});
    setCount(0);
    setStartDate();
    setEndDate();
    setDays();
  };

  const CleanButton = () => {
    if (count === 0) {
      return <Text></Text>;
    }
    return (
      <Text
        style={{ fontSize: 16 }}
        onPress={() => {
          reset();
        }}
      >
        清除
      </Text>
    );
  };

  const onDaySelect = (day) => {
    // 選擇起始日
    if (count === 0) {
      // 避免已知開始時間及結束時間帶入時產生的bug，所以先把reset state
      reset();
      setStartDate(day.dateString);
      setCount(count + 1);
      sd[day.dateString] = {
        startingDay: true,
        color: '#50cebb',
        textColor: 'white',
      };
      setMark(sd);
    } else if (count === 1) {
      // 選擇結束日期
      const startD = Date.parse(Object.keys(mark));
      const endD = day.timestamp;
      setEndDate(day.dateString);

      // 結束時間 > 起始時間
      if (endD > startD) {
        // 計算中間總天數
        let d = (endD - startD) / oneDay;
        setDays(d);
        let midArr;
        // console.log(`days ${days}`);
        if (d > 1) {
          midArr = midDays(Object.keys(mark), d);
          // eslint-disable-next-line no-shadow
        }
        combindMark(mark, midArr, day.dateString);
        setCount(count + 1);
      } else {
        reset();
      }
    } else {
      reset();
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Icon
          iconStyle={{
            marginTop: 40,
            marginBottom: 10,
            marginLeft: 20,
            alignSelf: 'flex-start',
            width: 20,
          }}
          name='close'
          onPress={() => props.navigation.goBack()}
        />
        <View />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          borderBottomWidth: 0.5,
          paddingVertical: 15,
          marginHorizontal: 15,
          borderBottomColor: lineColor,
        }}
      >
        <Text>日</Text>
        <Text>一</Text>
        <Text>二</Text>
        <Text>三</Text>
        <Text>四</Text>
        <Text>五</Text>
        <Text>六</Text>
      </View>
      <CalendarList
        style={{
          height: calendarHeight,
          borderBottomWidth: 2,
        }}
        hideDayNames
        // Callback which gets executed when visible months change in scroll view. Default = undefined
        onVisibleMonthsChange={(months) => {
          // console.log('now these months are visible', months);
        }}
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={0}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={12}
        // Enable or disable scrolling of calendar list
        scrollEnabled
        // Enable or disable vertical scroll indicator. Default = false
        showScrollIndicator
        markingType={'period'}
        markedDates={mark}
        onDayPress={onDaySelect}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderTopWidth: 0.5,
          borderColor: lineColor,
          padding: 10,
          marginHorizontal: 15,
          alignItems: 'center',
        }}
      >
        <CleanButton />
        <Button
          icon={{
            name: 'search',
            size: 25,
            color: 'white',
          }}
          buttonStyle={{
            width: 100,
            borderRadius: 8,
            alignSelf: 'center',
            backgroundColor: '#ef5350',
          }}
          title='搜尋'
          onPress={() =>
            props.navigation.navigate('Buttom', {
              screen: fatherPage,
              params: { startDate, endDate, days },
            })
          }
        />
      </View>
    </View>
  );
};
export default CalendarScreen;
