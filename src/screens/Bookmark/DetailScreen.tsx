import React from "react";
import {View, Text, StyleSheet, ScrollView, Image} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";


import {BookmarkStackParamList} from "../../types/stacks/BookmarkStackTypes";
import StatusTag from "./components/StatusTag";
import DdayCounter from "./components/DdayCounter";

export type BookmarkScreenProps = StackScreenProps<BookmarkStackParamList, "Detail">;


//즐겨찾기에서 회차별 디테일이 있는 경우의 페이지
const DetailScreen = ({ navigation }: BookmarkScreenProps) => {
    return (
        <View style={customStyle.container}>
            <ScrollView>
                {details.map(card => (
                    <View style={customStyle.card}>
                        <View style={{flexDirection: "row", marginBottom: 8}}>
                            <View>
                                {card.leftDay >= 0 ? (<DdayCounter day={card.leftDay} type={card.tag}/>):(<View/>)}
                            </View>
                            <View>
                                <StatusTag type={card.tag}/>
                            </View>
                        </View>
                        <View style={{flexDirection:"row", alignItems: "center"}}>
                            <View style={{flex:9, flexDirection:"row"}}>
                                <Text style={customStyle.titleTxt}>
                                    {card.number}{"회차"}
                                </Text>
                                <Text style={customStyle.titleDateTxt}>
                                    {card.examDate}{" "}{card.examTime}
                                </Text>
                            </View>
                            <View style={{flex:1}}>
                                {card.isDetail === true ? (<Image source={require('../../assets/images/next.png')}/>) : (<View/>) }
                            </View>
                        </View>
                        <View>
                            <Text style={customStyle.extraTxt}>
                                {card.extraInfo}{" | "}{card.extraInfoDate}
                            </Text>
                        </View>
                    </View>

                ))}
            </ScrollView>
        </View>
    );
};

export default DetailScreen;

const customStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingRight:20,
        paddingLeft:20,
        paddingTop:12,

        justifyContent: "center",
        alignItems: 'center'
    },

    //card
    card:{
        height:126.86,
        width:335,
        marginBottom:8,
        backgroundColor: '#FFFFFF',
        paddingTop:16,
        paddingBottom:16,
        paddingRight:16,
        paddingLeft:20,
        borderRadius:12,
    },

    //회차문구
    titleTxt:{
        color: "#141414",
        fontSize:16,
        fontWeight: "600",
        lineHeight: 22.4,

        marginRight: 10,
    },
    titleDateTxt:{
        color: "#8C8C8C",
        fontSize:15,
        fontWeight: "400",
        lineHeight: 21,
        marginBottom:22,
    },

    //extra정보 문구
    extraTxt:{
        color: "#8C8C8C",
        fontWeight:"400",
        fontSize:13,
        lineHeight:18.2,


    }

});


const details = [

    {
        id: 0,
        number : 1299,
        tag: '접수마감',
        leftDay: -1,
        examDate: '23.01.02(목)',
        examTime: '12:00',
        extraInfo: '성적발표',
        extraInfoDate: '23.2.21',
        isDetail:true,

    },
    {
        id: 1,
        number : 1300,
        tag: '추가접수중',
        leftDay: 3,
        examDate: '23.01.02(목)',
        examTime: '12:00',
        extraInfo: '정기접수',
        extraInfoDate: '23.2.21~23.2.28',
        isDetail:true,
    },
    {
        id: 2,
        number : 1301,
        tag: '정기접수중',
        leftDay: 12,
        examDate: '23.01.02(목)',
        examTime: '12:00',
        extraInfo: '정기접수',
        extraInfoDate: '23.2.21~23.2.28',
        isDetail:false,
    },
    {
        id: 3,
        number : 1302,
        tag: '정기접수중',
        leftDay: 32,
        examDate: '23.01.02(목)',
        examTime: '12:00',
        extraInfo: '정기접수',
        extraInfoDate: '23.2.21~23.2.28',
        isDetail:true,
    },
    {
        id: 4,
        number : 1303,
        tag: '접수예정',
        leftDay: -1,
        examDate: '23.01.02(목)',
        examTime: '12:00',
        extraInfo: '정기접수',
        extraInfoDate: '23.2.21~23.2.28',
        isDetail:false,
    },
    {
        id: 5,
        number : 1304,
        tag: '추가접수중',
        leftDay: 3,
        examDate: '23.01.02(목)',
        examTime: '12:00',
        extraInfo: '정기접수',
        extraInfoDate: '23.2.21~23.2.28',
        isDetail:false,
    },


]
