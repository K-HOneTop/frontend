import React,{useState} from "react";
import {Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import {heightPercentageToDP as hp} from "react-native-responsive-screen";
import {styles} from "../styles";
import DdayCounter from "./DdayCounter";
import StatusTag from "./StatusTag";
import StarIcon from "./StarIcon";
import searchListType from "../../../types/bookmarks/bookmarkTypes";
import { useNavigation } from '@react-navigation/native';

type Props = {
    selected:boolean;
}

function SearchModal () {
    const navigation = useNavigation();

    //자격증 모달검색
    const [title, onChangeTitle] = useState(''); //자격증이름
    const [titleResultNum, setTitleResultNum] = useState<number>(0);



    const onRegisterBtn = () => {
        this.RBSheet.close();
        navigation.navigate('CertificationUpdate')
    }


    return (
        <RBSheet
            ref={ref => {
                // @ts-ignore
                this.RBSheet = ref;
            }}
            closeOnDragDown={false} //false인지 true인지 물어보기
            // closeOnPressMask={true}
            height={hp(93)}
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
            <View style={styles.modalTop}>
                <View style={styles.modalXbox}>
                    <Pressable onPress={() => this.RBSheet.close()}>
                        <Image style={{justifyContent: 'flex-end'}} source={require('../../../assets/images/close.png')}/>
                    </Pressable>
                </View>
                <View style={styles.modalSearchBox}>
                    <View style={{paddingTop:16,paddingBottom:16}}>
                        <Text style={styles.modalTitleText}>{"자격증 즐겨찾기"}</Text>
                    </View>
                    <View style={[customStyles.inputBox,{flexDirection:"row"}]}>
                        <TextInput
                            style={customStyles.inputTxt}
                            onChangeText={onChangeTitle}
                            placeholder={"자격증을 검색해보세요."}
                            placeholderTextColor="#8C8C8C"
                            value={title}
                        />
                        <Pressable>
                            <Image style={{flex:1, resizeMode: "contain"}} source={require("../../../assets/images/search.png")}/>
                        </Pressable>
                    </View>
                </View>
            </View>
            <View style={{backgroundColor:"#F1F1F1", height:8}}/>
            <View style={styles.modalBottom}>
                <View style={styles.modalResult}>
                    <Text style={styles.modalResultTxt}>{"총 "}{titleResultNum}{"건"}</Text>
                </View>
                <View style={{flex:1}}>
                    {list.length === 0 ?
                        (
                            //    결과가 0개일 때,
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom:40,}}>
                                <View>
                                    <Image source={require('../../../assets/images/Emoji.png')}/>
                                </View>
                                <View style={{paddingTop:12, paddingBottom:12, alignItems:"center"}}>
                                    <Text style={customStyles.largeTxt}>{'데이터가 존재하지 않습니다'}</Text>
                                    <Text style={customStyles.smallTxt}>{'자격증을 직접 추가해보세요!'}</Text>
                                </View>
                                <View>
                                    <TouchableOpacity
                                        onPress={() => (
                                            onRegisterBtn()
                                        )}
                                        style={customStyles.btn}
                                    >
                                        <Text style={customStyles.btnTxt}>
                                            {'자격증 직접 추가하기'}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                        :
                        (
                            <ScrollView>
                                {list.map(item =>(
                                    <View style={customStyles.listView}>
                                        <View style={{flex:9, flexDirection:"row"}}>
                                            <Text style={{paddingRight: 12,}}>{item.title}</Text>
                                            {item.leftDay >= 0 ? (<DdayCounter day={item.leftDay} type={item.tag}/>):(<View/>)}
                                            <StatusTag type={item.tag}/>
                                        </View>
                                        <View style={{flex:1, justifyContent:"flex-end"}}>
                                            <StarIcon selected={item.isStar}/>
                                        </View>
                                    </View>
                                ))}

                            </ScrollView>
                        )}
                </View>
            </View>
        </RBSheet>
    );
};



export default SearchModal;


const customStyles = StyleSheet.create({


    //즐겨찾기 없을 경우 텍스트
    largeTxt : {
        fontWeight: "600",
        fontSize: 16,
        color: "#8C8C8C",
    },
    smallTxt : {
        fontWeight: "400",
        fontSize: 13,
        color: "#8C8C8C",
    },

    //자격증 즐겨찾기 하러가기 버튼
    btn : {
        width:199,
        height: 38,
        backgroundColor: "#FEF0EB",
        borderColor: "#F56C3B",
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 6,
        paddingBottom : 8,
        paddingTop: 8,
        paddingRight: 20,
        paddingLeft: 20,

        justifyContent:'center',
        alignItems:'center',
    },
    btnTxt: {
        fontSize: 16,
        fontWeight: "600",
        color: "#F56C3B",

    },

    inputBox: {
        // flex:1,

        height: 50,
        width: '100%',


        paddingBottom:10,
        paddingTop:10,
        paddingLeft:16,
        paddingRight:12,

        borderWidth: 1,
        borderRadius:6,
        borderColor: "#E9E9E9",

        // color: "#8C8C8C",
        // fontWeight: "400",
        // fontSize:16,

        alignItems:"center",
        // justifyContent: "flex-end"


    },
    inputTxt:{
        color: "#141414",
        fontWeight: "400",
        fontSize:16,
        flex: 9
    },


    listView:{
        flexDirection:"row",
        alignItems:"center",
        padding:20,
        borderBottomColor: "#E9E9E9",
        borderTopColor: "#FFFFFF",
        borderRightColor: "#FFFFFF",
        borderLeftColor: "#FFFFFF",
        borderWidth: 1,
    }

});


const list:searchListType[] = [

    // {
    //     id: 0,
    //     title : '토익(TOEIC)',
    //     tag: '정기접수중',
    //     leftDay: 3,
    //     isStar:false,
    // },
    // {
    //     id: 0,
    //     title : '토플',
    //     tag: '추가접수중',
    //     leftDay: 12,
    //     isStar:true,
    // },
    // {
    //     id: 0,
    //     title : '토익(TOEIC)',
    //     tag: '직접추가',
    //     leftDay: -1,
    //     isStar:false,
    // },
    // {
    //     id: 0,
    //     title : '토익(TOEIC)',
    //     tag: '기간미입력',
    //     leftDay: -1,
    //     isStar:true,
    // },


]
