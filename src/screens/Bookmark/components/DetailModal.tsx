import React,{useState} from "react";
import {Image, Modal, Pressable, StyleSheet, Text, View} from "react-native";
import {BookmarkScreenProps} from "../CertificationUpdateScreen";
import { useNavigation } from '@react-navigation/native';

type Props = {
    certificationId:number,
    setModalStatus: (check: boolean) => void;
}

function DetailModal ({certificationId, setModalStatus}:Props ) {
    const [check, setCheck] = useState<boolean>(true);
    const navigation = useNavigation();

    const onClickBtn = () => {
        navigation.navigate('CertificationUpdate');
        setModalStatus(!check);
    }



    return (

        <View style={customStyle.centeredView}>
                <View style={{justifyContent: 'center', alignItems:'center'}}>
                    <View style={customStyle.modalView}>
                        <View style={customStyle.modalViewTitleArea}>
                            <Text style={[customStyle.modalTitleTxt,{flex:1}]}>{detailInfo.title}{"("}{detailInfo.number}{")회차"}</Text>
                            <Pressable
                                onPress={() => setModalStatus(!check)}
                            >
                                <Image style={{justifyContent: 'flex-end', resizeMode: 'contain'}} source={require('../../../assets/images/close.png')}/>
                            </Pressable>
                        </View>
                        <View style={customStyle.modalViewMainArea}>
                            <View style={customStyle.textArea}>
                                <Text style={customStyle.mainTitleTxt}>{"시험일자"}</Text>
                                <Text style={customStyle.mainDetailTxt}>{detailInfo.examDate}</Text>
                            </View>
                            <View style={customStyle.textArea}>
                                <Text style={customStyle.mainTitleTxt}>{"정기접수"}</Text>
                                <Text style={customStyle.mainDetailTxt}>{detailInfo.regularDate}</Text>
                            </View>
                            <View style={customStyle.textArea}>
                                <Text style={customStyle.mainTitleTxt}>{"추가접수"}</Text>
                                <Text style={customStyle.mainDetailTxt}>{detailInfo.extraDate}</Text>
                            </View>
                            <View style={customStyle.textArea}>
                                <Text style={customStyle.mainTitleTxt}>{"성적발표"}</Text>
                                <Text style={customStyle.mainDetailTxt}>{detailInfo.resultDate}</Text>
                            </View>
                            <View style={customStyle.textArea}>
                                <Text style={customStyle.mainTitleTxt}>{"발급기관"}</Text>
                                <Text style={customStyle.mainDetailTxt}>{detailInfo.institution}</Text>
                            </View>
                        </View>
                        <View style={customStyle.modalViewButtonArea}>
                            <Pressable style={customStyle.alertButton}>
                                <Image style={{marginRight:4}} source={require('../../../assets/images/alarm.png')}></Image>
                                <Text style={customStyle.alertBtnTxt}>{"알람받기"}</Text>
                            </Pressable>
                            {detailInfo.homepage === "-" ? (
                                    <Pressable style={[customStyle.homepageButton,{backgroundColor: '#E9E9E9'}]}>
                                        <Text style={customStyle.homepageBtnTxt}>{"홈페이지 바로가기"}</Text>
                                    </Pressable>
                                )
                                :
                                (
                                    <Pressable style={[customStyle.homepageButton,{backgroundColor: '#F56C3B'}]}>
                                        <Text style={customStyle.homepageBtnTxt}>{"홈페이지 바로가기"}</Text>
                                    </Pressable>
                                )
                            }

                        </View>
                    </View>
                    {detailInfo.isSelfRegister === true ? (
                            <View style={{justifyContent: 'center'}}>
                                <Pressable style={customStyle.modifyBtn}
                                            onPress={() => onClickBtn()}
                                >
                                    <Image style={{resizeMode: 'contain'}} source={require('../../../assets/images/calendar.png')}/>
                                    <Text style={customStyle.homepageBtnTxt}>{"수정하기"}</Text>
                                </Pressable>
                            </View>)
                        :
                        (<View/>)}
                </View>
        </View>
    )
};



export default DetailModal;


const customStyle = StyleSheet.create({
    container: {
        flex: 1,
        // paddingRight:20,
        // paddingLeft:20,
        // paddingTop:12,

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


const detailInfo = {
    title: '토익',
    number: 1299,
    examDate: '2023년 01월 03일 09:00',
    regularDate: '2023년 01월 03일 09:00 \n- 2023년 01월 03일 09:00',
    extraDate: '2023년 01월 03일 09:00 \n- 2023년 01월 03일 09:00',
    resultDate: '2023년 01월 03일 12:00',
    institution: '한국생산성본부',
    homepage: 'https://www.toeic.co.kr',
    isSelfRegister: true,
}
