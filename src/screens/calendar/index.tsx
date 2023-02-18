import React, {useEffect, useRef, useState} from "react";
import {Pressable, View, Text, StyleSheet, TouchableNativeFeedback, TouchableOpacity} from "react-native";

//calendars
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';


import { StackScreenProps } from "@react-navigation/stack";
import {CalendarStackParamList} from "../../types/stacks/CalendarStackTypes";
import RNPickerSelect from 'react-native-picker-select';


//모달
import RBSheet from "react-native-raw-bottom-sheet";


//data type
import certifications from "../../types/calendars/CertificationTypes";


//design 관련
import styles from './style';
import {disabledArrowColor, textDayStyle} from "react-native-calendars/src/style";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {getDefaultLocale} from "react-native-calendars/src/services";
import {isToday} from "react-native-calendars/src/dateutils";
import {black} from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import CertificationFilter from "./components/CertificationFilter";



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

type Props = {
    currentYear: number;
    currentMonth: number;
}


const CalendarHeader = ({currentYear, currentMonth}:Props) => {
    const [date, setDate] = useState(new Date())
    const year = 2023;
    const month = 1;
    const [userYear, setUserYear] = useState();
    const [userMonth, setUserMonth] = useState();


    return (
        <View style = {{flexDirection: 'row'}}>
            <RNPickerSelect
                useNativeAndroidPickerStyle={false}
                style={pickerSelectStyles}
                onValueChange={(userYear) => setUserYear(userYear)}
                placeholder={{
                    label: currentYear,
                    value: year,
                    color: 'black',
                }}
                items={[
                    {label: '2021년', value: 2021},
                    {label: '2022년', value: 2022},
                    {label: '2023년', value: 2023},
                ]
            }
            />
            <RNPickerSelect
                useNativeAndroidPickerStyle={false}
                style={pickerSelectStyles}
                onValueChange={(userMonth) => setUserMonth(userMonth)}
                placeholder={{
                    label: currentMonth,
                    value: month,
                    color: 'black',
                }}
                items={[
                    {label: '1월', value: 2021},
                    {label: '2월', value: 2022},
                    {label: '3월', value: 2023},
                ]
                }
            />
        </View>
    );
};


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

                        renderHeader={date => {


                            //date :
                            const dateStr = date.toISOString();
                            const endIndex = dateStr.indexOf("T");
                            const yearIndex = dateStr.indexOf("-");
                            const currentYear = dateStr.slice(0, yearIndex);

                            const monthStr = dateStr.slice(yearIndex+1,endIndex);
                            const monthIndex = monthStr.indexOf("-");
                            const currentMonth = monthStr.slice(0, monthIndex);


                            const [year, setYear] = useState(currentYear);
                            const [month, setMonth] = useState(currentMonth);


                            // @ts-ignore
                            // @ts-ignore
                            return (
                                <View style={{flex:1, flexDirection: 'row'}}>
                                    <View style = {{flex:0.5, flexDirection: 'row', alignItems: 'flex-start'}}>
                                        <RNPickerSelect
                                            useNativeAndroidPickerStyle={false}
                                            style={pickerSelectStyles}
                                            onValueChange={(year) => setYear(year)}
                                            placeholder={{
                                                label: year+'년',
                                                value: year,
                                                color: 'black',
                                            }}
                                            items={[
                                                {label: '2021년', value: 2021},
                                                {label: '2022년', value: 2022},
                                                {label: '2023년', value: 2023},
                                            ]
                                            }
                                        />
                                        <RNPickerSelect
                                            useNativeAndroidPickerStyle={false}
                                            style={pickerSelectStyles}
                                            onValueChange={(month) => setMonth(month)}
                                            placeholder={{
                                                label: month+'월',
                                                value: month,
                                                color: 'black',
                                            }}
                                            items={[
                                                {label: '1월', value: 1},
                                                {label: '2월', value: 2},
                                                {label: '3월', value: 3},
                                            ]
                                            }
                                        />
                                </View>
                                    <View style = {{flex : 0.5, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
                                        <TouchableOpacity
                                            style={styles.DesignButton}
                                            onPress={() => {
                                            // @ts-ignore
                                                this.RBSheet.open()
                                        }}>
                                            <Text style={customStyles.btnText}>
                                                {'필터링 버튼'}
                                            </Text>
                                        </TouchableOpacity>
                                            <RBSheet
                                                ref={ref => {
                                                    // @ts-ignore
                                                    this.RBSheet = ref;
                                                }}
                                                closeOnDragDown={true} //false인지 true인지 물어보기
                                                // closeOnPressMask={true}
                                                height={hp(95)}
                                                openDuration={100}
                                                closeDuration={100}
                                                customStyles={{
                                                    wrapper: {
                                                        backgroundColor: 'rgba(41, 41, 41, 0.5)',
                                                    },
                                                    container: {
                                                        backgroundColor: 'white',
                                                        borderTopLeftRadius: 30,
                                                        borderTopRightRadius: 30,
                                                    },
                                                }}>
                                            <CertificationFilter items={items}/>
                                        </RBSheet>
                                    </View>
                                </View>
                            );
                        }}
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
    btnText: {
        color: 'white',
        fontSize: wp(3),
        justifyContent: 'center',
        alignItems: 'center',
    }

});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        // height: hp(4),
        paddingRight: 3,
        fontSize: wp(4.5),
        fontWeight: 'normal',
        marginBottom: 0,
    },

    inputAndroid: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        // height: hp(6),
        paddingRight: 3,
        fontSize: wp(4.5),
        fontWeight: 'normal',
        marginBottom: 0,
    },

});



// 모달에 필요한 것들
const items: certifications[] = [
    {
        name: '토익(TOEIC)',
        normalStartDate: '2023-02-05',
        normalEndDate: '2023-02-12',
        extraStartDate: '2023-02-13',
        extraEndDate: '2023-02-17',
        examDate: '2023-02-19',
        resultDate: '2023-02-26',
    },
    {
        name: '3D프린터개발산업기사',
        normalStartDate: '2023-03-28',
        normalEndDate: '2023-04-03',
        extraStartDate: '2023-04-07',
        extraEndDate: '2023-04-12',
        examDate: '2023-04-20',
        resultDate: '2023-04-22',
    },
    {
        name: '가스기능사',
        normalStartDate: '2023-02-09',
        normalEndDate: '2023-02-13',
        extraStartDate: '2023-04-07',
        extraEndDate: '2023-04-12',
        examDate: '2023-04-20',
        resultDate: '2023-04-22',
    },
    {
        name: '토플(TOPLE)',
        normalStartDate: '2023-02-10',
        normalEndDate: '2023-02-16',
        extraStartDate: '2023-02-22',
        extraEndDate: '2023-02-26',
        examDate: '2023-02-30',
        resultDate: '2023-03-22',
    },
]
