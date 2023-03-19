import React, {useState} from "react";
import {View, Text, StyleSheet, ScrollView, Image, Modal, Pressable, Alert} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import {WebView} from 'react-native-webview';


import {BookmarkStackParamList} from "../../types/stacks/BookmarkStackTypes";
import StatusTag from "./components/StatusTag";
import DdayCounter from "./components/DdayCounter";
import window from "@react-navigation/native/lib/typescript/src/__mocks__/window";
import DetailModal from "./components/DetailModal";
import CustomHeader from "./components/CustomHeader";


export type BookmarkScreenProps = StackScreenProps<BookmarkStackParamList, "Detail">;


//즐겨찾기에서 회차별 디테일이 있는 경우의 페이지
const DetailScreen = ({ navigation }: BookmarkScreenProps) => {
    const [modalVisible, setModalVisible] = useState(false);

    //Modal visible 변수를 Props로 넘겨서 작동시키기위해
    const setModalStatus = (check: boolean): void => {

        if(check){
            setModalVisible(true);
        }else{
            setModalVisible(false);
        }


    }



    return (
        <>
            <View >
                <CustomHeader title={"토익(TOEIC)"}/>
            </View>
            <View style={customStyle.container}>
            <ScrollView >
                {details.map(card => (
                    <Pressable onPress={() => setModalVisible(true)}>

                        <Modal
                            animationType="fade"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                setModalVisible(!modalVisible);
                            }}>
                            <DetailModal setModalStatus={setModalStatus} certificationId={card.id}/>
                        </Modal>

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
                                <Image source={require('../../assets/images/next.png')}/>
                            </View>
                        </View>
                        <View>
                            <Text style={customStyle.extraTxt}>
                                {card.extraInfo}{" | "}{card.extraInfoDate}
                            </Text>
                        </View>
                    </View>
                    </Pressable>

                ))}
            </ScrollView>
        </View>
        </>
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
        alignItems: 'center',


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


    },

    //modal
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        //모달이 올라오면 배경색을 어둡게 깔아주기
        backgroundColor: 'rgba(173,173,173,0.4)',

    },
    modalView: {

        paddingTop:10,
        paddingBottom:20,
        paddingLeft:20,
        paddingRight:20,

        backgroundColor: 'white',
        borderRadius: 12,

        alignItems: 'center',

        height: 366,
        width: 335,


    },
    modalViewTitleArea:{
        alignItems: 'center',
        flex:46,
        flexDirection: "row",
        // backgroundColor: 'pink',
    },
    modalViewMainArea:{
        alignItems: 'center',
        flex:195,
        marginTop:10,
        marginBottom:30,
        // backgroundColor: 'red',

        paddingRight:40,
        paddingLeft:10,
    },
    modalViewButtonArea:{
        alignItems: 'center',
        flex:55,
        // backgroundColor: 'yellow',
        flexDirection: "row",
    },

    //main area
    mainTitleTxt:{
        color: "#141414",
        fontWeight: "400",
        fontSize: 15,
        marginRight:24,
    },
    mainDetailTxt:{
        color: "#8C8C8C",
        fontWeight: "400",
        fontSize: 15,
        flexWrap: 'wrap', //컨테이너 끝에 닿으면 줄바꿈
    },
    textArea:{
        width: 264,
        marginTop:6,
        marginBottom:6,
        flexDirection:"row",
    },

    //text
    modalTitleTxt:{
        fontSize:20,
        fontWeight: "600",
        color: "#141414",
    },

    //Button
    alertButton: {
        backgroundColor: '#FFFFFF',
        borderRadius:6,
        paddingTop: 18,
        paddingLeft: 16,
        paddingRight:20,
        paddingBottom:18,

        alignItems: 'center',
        justifyContent: "center",

        borderColor: "#E9E9E9",
        borderWidth:1,
        borderStyle: 'solid',

        flexDirection:"row",
        marginRight:4,
    },
    alertBtnTxt:{
        color: "#8C8C8C",
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 19,

        marginLeft:4,
    },

    //홈페이지 바로가기 버튼
    homepageButton: {
        // backgroundColor: '#F56C3B',

        borderRadius:6,
        paddingTop: 18,
        paddingLeft: 27.5,
        paddingRight:27.5,
        paddingBottom:18,

        alignItems: 'center',
        justifyContent: "center",


        marginLeft:4,

    },
    homepageBtnTxt:{
        color: "#FFFFFF",
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 19,

    },
    homepageButtonOn: {
        backgroundColor: '#F56C3B',

        borderRadius:6,
        paddingTop: 18,
        paddingLeft: 27.5,
        paddingRight:27.5,
        paddingBottom:18,

        alignItems: 'center',
        justifyContent: "center",


        marginLeft:4,

    },
    homepageOnBtnTxt:{
        color: "#FFFFFF",
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 19,

    },

    //수정하기
    modifyBtn:{
        backgroundColor: "#F56C3B",
        borderRadius: 50,
        width:126,
        height:48,
        flexDirection: "row",
        justifyContent:'center',
        alignItems: 'center',
        marginTop:12,
    },




    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },

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


