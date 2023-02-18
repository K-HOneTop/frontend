//react import
import React, {useState} from "react";
import {View, Text, StyleSheet} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import {Picker} from '@react-native-picker/picker';

//stack import
import { BookmarkStackParamList } from "../../types/stacks/BookmarkStackTypes";

export type BookmarkScreenProps = StackScreenProps<BookmarkStackParamList, "Main">;

//design 관련
import {styles} from './styles';


const Bookmark = ({ navigation }: BookmarkScreenProps) => {
    const [resultNum, setResultNum] = useState<number>(6);
    const [sort, setSort] = useState("접수마감순");

    const sortOptions = [
        {
            title: "접수마감순",
            value: "dueDate",
        },
        {
            title: "이름순",
            value: "name",
        }
    ];

    const [selectedLanguage, setSelectedLanguage] = useState();

    return (
        <View style={styles.container}>
            <View style={styles.containerStatus}/>
            <View style={styles.containerMain}>
                    <View style={styles.TitleArea}>
                        <Text style={customStyles.titleTxt}>{'즐겨찾기'}</Text>
                    </View>
                    <View style={styles.resultArea}>
                        <View style={{flex:1, alignItems: 'flex-start',backgroundColor:'white'}}>
                            <Text style={customStyles.resultTxt}>{'즐겨찾기 한 자격증 '}{resultNum}{'건'}</Text>
                        </View>
                        <View style={{flex:1, alignItems: 'flex-end',backgroundColor:'red'}}>
                            <Picker dropdownIconColor="red">
                                <Picker.Item label="hello" value="key0" />
                                <Picker.Item label="world" value="key1" />
                            </Picker>
                        </View>
                    </View>
                    <View style={styles.cardArea}></View>

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
    }

});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        borderBottomWidth: 1,
        borderColor: 'black',
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        width: '100%',
        // height: hp(6),
        paddingRight: 10,
        // fontSize: wp(4),
        marginBottom: 30,
    },

    inputAndroid: {
        borderBottomWidth: 1,
        borderColor: 'black',
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        width: '100%',
        // height: hp(6),
        paddingRight: 10,
        // fontSize: wp(4),
        marginBottom: 30,
    },
    iconContainer: {
        top: 10,
        right: 12,
    },
});


const items = [

    {
        id: 0,
        title : '토익(TOEIC)',
        institution : '한국진흥원',
        tag: '정기접수중',
        leftDay: 3,
    },
    {
        id: 1,
        title : '토익(TOEIC)',
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
    }

]
