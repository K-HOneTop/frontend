import React from "react";
import { View, Text, StyleSheet } from "react-native";

//calendars
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';


import { StackScreenProps } from "@react-navigation/stack";
import {CalendarStackParamList} from "../../types/stacks/CalendarStackTypes";



//design 관련
import styles from './style';
import {disabledArrowColor, textDayStyle} from "react-native-calendars/src/style";

export type MainScreenProps = StackScreenProps<CalendarStackParamList, "Calendar">;

LocaleConfig.locales['fr'] = {
    monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
    monthNamesShort: ['jan','feb','mar','apr','may','jun','jul.','aug','sep','oct','nov','dec'],
    dayNames: ['일요일','월요일', '화요일','수요일','목요일','금요일','토요일'],
    dayNamesShort: ['일', '월','화','수','목','금','토'],
    today: 'Aujourd\'hui'
};
LocaleConfig.defaultLocale = 'fr';

/*
 https://github.com/wix/react-native-calendars
 day : https://github.com/wix/react-native-calendars/blob/master/src/calendar/day/basic/style.ts
 header : https://github.com/wix/react-native-calendars/blob/master/src/calendar/header/style.ts


 */



const Calendars = ({ navigation }: MainScreenProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.statusArea}></View>
            <View style={styles.topArea}>
                <View style={customStyles.topArea}>
                    <Text style={customStyles.topAreaText}>캘린더</Text>
                </View>
            </View>
            <View style={styles.mainArea}>
                <View style={customStyles.mainArea}>
                    <Calendar
                        theme={{
                            // @ts-expect-error
                            'stylesheet.calendar.header': {
                                dayTextAtIndex0: {
                                    color : 'red'
                                },
                                dayHeader: { //월 화 수 목..
                                    fontSize: 11,
                                    color : '#ADADAD',

                                },
                                monthText: { //YYYY - MM 텍스트
                                    fontSize: 15,
                                },
                                header: {
                                    alignItems: 'flex-start', //월 년도 (앞쪽으로)
                                    marginRight:20,
                                    marginLeft:20,
                                    marginTop:12,
                                    marginBottom:12,
                                },
                            },
                            'stylesheet.day.basic': {
                                base: {
                                    width: 32,
                                    height: 32,
                                    alignItems: 'center',
                                    marginBottom:50, //각 자리 길이
                                },
                                today: {
                                    backgroundColor: 'black',
                                    borderRadius:16/2,
                                    width:16,
                                    height:16,
                                    marginTop:4,
                                },
                                todayText: {
                                    color: 'white',
                                    marginTop:2.5,
                                    fontSize:10,
                                },
                                dayTextAtIndex0: {
                                    color : 'red'
                                },
                            },
                            dayTextColor: '#ADADAD',
                            textDayFontSize: 10,
                            todayBackgroundColor: 'black',
                            todayTextColor: 'white',
                            // weekVerticalMargin: 30,

                        }}
                        hideArrows={true}
                        monthFormat={'yyyy년 M월'}

                    />
                </View>
            </View>
            <View style={styles.bottomArea}></View>
        </View>
    );
};

export default Calendars;


const customStyles = StyleSheet.create({
    topArea: {
        flex: 1,
        //요소 중앙정렬
        justifyContent: 'center',

        //요소 첫 시작점에 배치
        alignItems: 'flex-start',

        //design에서 정의된 padding
        paddingBottom:8,
        paddingTop:8,
        paddingRight:20,
        paddingLeft:20,
    },
    topAreaText: {
        fontSize: 25,
        fontWeight: 'bold', //semi bold로 설정하는 방법..?
    },
    mainArea:{
        flex: 1,
        //요소 중앙정렬
        justifyContent: 'center',

        //요소 중앙배치
        // alignItems: 'center',
    },
    calendar:{
    }
});
