//react import
import React, {useState} from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Pressable} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import RNPickerSelect from 'react-native-picker-select'; //버전 낮아서 picker가 안먹는듯?

import StarIcon from './components/StarIcon';

//stack import
import { BookmarkStackParamList } from "../../types/stacks/BookmarkStackTypes";

export type BookmarkScreenProps = StackScreenProps<BookmarkStackParamList, "Main">;

//design 관련
import {styles} from './styles';

const Bookmark = ({ navigation }: BookmarkScreenProps) => {
    const [resultNum, setResultNum] = useState<number>(6);
    const [sort, setSort] = useState();


    const [selectedLanguage, setSelectedLanguage] = useState();

    return (
        <View style={styles.container}>
            <View style={styles.containerStatus}/>
            <View style={styles.containerMain}>
                    <View style={styles.TitleArea}>
                        <Text style={customStyles.titleTxt}>{'즐겨찾기'}</Text>
                    </View>
                    <View style={styles.resultArea}>
                        <View style={{flex:8, alignItems: 'flex-start',backgroundColor:'white'}}>
                            <Text style={customStyles.resultTxt}>{'즐겨찾기 한 자격증 '}{resultNum}{'건'}</Text>
                        </View>
                        <View style={{flex:2, alignItems: 'flex-end' ,backgroundColor:'red'}}>
                            <RNPickerSelect
                                useNativeAndroidPickerStyle={false}
                                style={pickerSelectStyles}
                                onValueChange={(sort) => setSort(sort)}
                                // https://stackoverflow.com/questions/62557019/react-native-picker-select-how-to-auto-select-an-item-but-still-be-able-to-sele
                                items={[
                                    {label: '접수마감순', value: 'dueDate'},
                                    {label: '이름순', value: 'name'},
                                ]}
                            />
                            <Image source={require('../../assets/images/down_triangle.png')}></Image>
                        </View>
                    </View>
                    <View style={styles.cardArea}>
                        {bookmarks.length === 0 ? (
                        //    결과가 0개일 때,
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                    <View>
                                        <Image source={require('../../assets/images/Emoji.png')}/>
                                    </View>
                                    <View style={{paddingTop:12, paddingBottom:12}}>
                                        <Text style={customStyles.largeTxt}>{'아직 즐겨찾기 한 자격증이 없어요'}</Text>
                                        <Text style={customStyles.smallTxt}>{'마음에 드는 자격증 정보를 찾아보세요'}</Text>
                                    </View>
                                    <View>
                                        <TouchableOpacity
                                            // onPress={() => ()}
                                            style={customStyles.btn}
                                        >
                                            <Text style={customStyles.btnTxt}>{'자격증 즐겨찾기 하러가기'}</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                        )
                            :
                            (
                                //결과 있을 때
                                <ScrollView>
                                <View style={customStyles.cardView}>
                                    {bookmarks.map(card => (
                                        <TouchableOpacity>
                                        <View style={customStyles.cards}>
                                            <Text style={customStyles.cardTitleTxt}>{card.title}</Text>
                                            <Text style={customStyles.institutionTxt}>{card.institution}</Text>
                                        </View>
                                        <View>
                                            <StarIcon selected={true}/>
                                        </View>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                                </ScrollView>
                            )
                        }
                        <View style={customStyles.btnContainer}>
                            <TouchableOpacity style={customStyles.addBtn}
                                              // onPress={pickImage}
                            >
                                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                    <Image source={require('../../assets/images/plus.png')}/>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

            </View>
            <View style={styles.containerBottom}/>
        </View>
    );
};

export default Bookmark;


const customStyles = StyleSheet.create({

    titleTxt: {
        fontSize: 20,
        fontWeight: "700",
        color: "#222222",

        paddingTop:16,
        paddingBottom:16,

        backgroundColor: 'pink',
    },

    resultTxt:{
        fontSize:12,
        fontWeight: "400",
        color: "#8C8C8C",

        paddingTop:5
    },

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
        width: '199px',
        height: '38px',
        backgroundColor: "#FEF0EB",
        borderColor: "#F56C3B",
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 6,
        paddingBottom : 8,
        paddingTop: 8,
        paddingRight: 20,
        paddingLeft: 20,
    },
    btnTxt: {
        fontSize: 16,
        fontWeight: "600",
        color: "#F56C3B",
    },


    //추가 버튼
    btnContainer: {
        //버튼 위치 조절
        position: 'absolute', //요소와 겹침 가능 (관계없이)
        right: 20,
        bottom: 20,

        backgroundColor: 'black',


    },
    addBtn: {
        width: 64,
        height: 64,
        borderRadius: 64/2,
        backgroundColor: "#F56C3B",

        padding: 10,

        //버튼 위치 조절
        // position: 'absolute', //요소와 겹침 가능 (관계없이)
        // right: 20,
        // bottom: 20,
    },

    //자격증 카드
    cardView: {
        flexDirection: 'row', //가로배치
        flexWrap: 'wrap', //컨테이너 끝에 닿으면 줄바꿈
        justifyContent: "space-between",

        paddingBottom:19,
        paddingTop:14,

    },
    cards: {
        width: 163.5,
        height: 178,
        borderRadius: 12,

        //패딩
        paddingTop:12,
        paddingBottom:12,
        paddingLeft:16,
        paddingRight:11.5,

        //색
        backgroundColor: "#FFFFFF",
        borderColor: "#E9E9E9",
        borderWidth: 1,


        margin:4
    },
    cardTitleTxt:{
        color: "#141414",
        fontSize: 16,
        fontWeight: "500"
    },
    institutionTxt:{
        color: "#141414",
        fontSize: 13,
        fontWeight: "400"
    },

});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize:12,
        fontWeight: "400",
        color: "#8C8C8C",
        paddingTop:5,
        backgroundColor: 'pink',

    },

    inputAndroid: {
        fontSize:12,
        fontWeight: "400",
        color: "#8C8C8C",
        paddingTop:5,

    },
    iconContainer: {
        top: 10,
        right: 12,
    },
});


const bookmarks = [

    {
        id: 0,
        title : '토익(TOEIC)',
        institution : '한국진흥원',
        tag: '정기접수중',
        leftDay: 3,
    },
    {
        id: 1,
        title : '정보처리기사',
        institution : '한국진흥원',
        tag: '정기접수중',
        leftDay: 0,
    },
    {
        id: 2,
        title : '토익(TOEIC)',
        institution : '한국진흥원',
        tag: '추가접수중',
        leftDay: 3,
    },
    {
        id: 3,
        title : '토익(TOEIC)',
        institution : '한국진흥원',
        tag: '접수예정',
        leftDay: -1,
    },
    {
        id: 4,
        title : '토익(TOEIC)',
        institution : '한국진흥원',
        tag: '접수예정',
        leftDay: -1,
    },
    {
        id: 5,
        title : '토익(TOEIC)',
        institution : '한국진흥원',
        tag: '접수마감',
        leftDay: -1,
    },
    {
        id: 4,
        title : '토익(TOEIC)',
        institution : '한국진흥원',
        tag: '접수예정',
        leftDay: -1,
    },


]
