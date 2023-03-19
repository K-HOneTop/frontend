import React, {useState} from "react";
import {View, Text, StyleSheet, ScrollView, TextInput, Image, Pressable, Button, TouchableOpacity} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";


import {BookmarkStackParamList} from "../../types/stacks/BookmarkStackTypes";
import DatePicker from "react-native-date-picker";
import SearchModal from "./components/SearchModal";
import CustomHeader from "./components/CustomHeader";

export type BookmarkScreenProps = StackScreenProps<BookmarkStackParamList, "CertificationUpdate">;




type Props = {
    type: string;
    setFunction: (date:Date) => void;
}

const DateTimePicker = ({type,setFunction}: Props) => {
    // @ts-ignore
    const [date, setDate] = useState(new Date(null)); //19700101 이 null임
    const [open, setOpen] = useState(false);


    return (
        <View>
            <Pressable style={customStyle.box} onPress={() => setOpen(true)}>
                {date.getFullYear() === 1970 ?
                    (<Text style={[customStyle.dateTxt,{flex:9, color: "#8C8C8C"}]}>{type}</Text>)
                    : (<Text style={[customStyle.dateTxt,{flex:9, color : "#141414"}]}>{date.getFullYear()}{"."}{date.getMonth()+1}{"."}{date.getDate()}</Text>)
                }

                <Image style={{flex:1}} source={require("../../assets/images/down_triangle.png")}/>
            </Pressable>
            <DatePicker
                modal
                open={open}
                date={date}
                mode="date"
                onConfirm={(date) => {
                    setOpen(false)
                    setFunction(date)
                    setDate(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
        </View>
    )
};




//즐겨찾기에서 회차별 디테일이 있는 경우의 페이지
const CertificationUpdateScreen = ({ navigation }: BookmarkScreenProps) => {
    const [title, onChangeTitle] = useState('');
    const [institution, onChangeInstitution] = useState('');
    const [homeUrl, onChangeHomeUrl] = useState('');


    //접수일자
    const [regStartDate, setRegStartDate] = useState(new Date());
    const [regEndDate, setRegEndDate] = useState(new Date());


    //추가접수일자
    const [extraStartDate, setExtraStartDate] = useState(new Date());
    const [extraEndDate, setExtraEndDate] = useState(new Date());

    //시험일자
    const [testDate, setTestDate] = useState(new Date());

    //성적발표일자
    const [resultDate, setResultDate] = useState(new Date());




    return (
        <>
        <View >
            <CustomHeader title={"t"}/>
        </View>
        <View style={customStyle.container}>
            <ScrollView>
                <View style={customStyle.titleContainer}>
                    <Text style={customStyle.titleTxt}>{"자격증 직접 추가"}</Text>
                </View>
                <View style={customStyle.mainContainer}>
                    <View style={{marginBottom:6}}>
                        <View style={{paddingTop:8, paddingBottom:8}}>
                            <Text style={customStyle.subTitleTxt}>{"자격증 정보"}</Text>
                        </View>
                        <View style={[customStyle.inputBox,{flexDirection:"row", marginBottom:8}]}>
                            <TextInput
                                style={customStyle.inputTxt}
                                onChangeText={onChangeTitle}
                                placeholder={"자격증명*"}
                                placeholderTextColor="#8C8C8C"
                                value={title}
                            />

                            <Pressable
                                onPress={() => {
                                    this.RBSheet.open()
                                }}
                            >
                                <Image style={{flex:1}} source={require("../../assets/images/search.png")}/>
                            </Pressable>
                            <SearchModal />
                        </View>
                        <TextInput
                            style={[customStyle.input,{marginBottom:8}]}
                            onChangeText={onChangeInstitution}
                            value={institution}
                            placeholder={"발급기관"}
                            placeholderTextColor="#8C8C8C"
                        />
                        <TextInput
                            style={customStyle.input}
                            onChangeText={onChangeHomeUrl}
                            value={homeUrl}
                            placeholder={"홈페이지 주소"}
                            placeholderTextColor="#8C8C8C"
                        />
                    </View>
                    <View style={{marginBottom:6, marginTop:6}}>
                        <Text style={[customStyle.subTitleTxt,{paddingTop:8, paddingBottom:8}]}>{"접수일자"}</Text>
                        <View style={{flexDirection:"row", flex:11, alignItems: "center"}}>
                            <View style={{flex:5}}>
                                <DateTimePicker type={"시작일"} setFunction={setRegStartDate}/>
                            </View>
                            <Text style={[customStyle.periodTxt,{alignItems: "center", paddingRight:8, paddingLeft:8}]}>{"-"}</Text>
                            <View style={{flex:5}}>
                                <DateTimePicker type={"마감일"} setFunction={setRegEndDate}/>
                            </View>
                        </View>
                    </View>
                    <View style={{marginBottom:6, marginTop:6}}>
                        <Text style={[customStyle.subTitleTxt,{paddingTop:8, paddingBottom:8}]}>{"추가접수일자"}</Text>
                        <View style={{flexDirection:"row", flex:11, alignItems: "center"}}>
                            <View style={{flex:5}}>
                                <DateTimePicker type={"시작일"} setFunction={setExtraStartDate}/>
                            </View>
                            <Text style={[customStyle.periodTxt,{alignItems: "center", paddingRight:8, paddingLeft:8}]}>{"-"}</Text>
                            <View style={{flex:5}}>
                                <DateTimePicker type={"마감일"} setFunction={setExtraEndDate}/>
                            </View>
                        </View>
                    </View>
                    <View style={{marginBottom:6, marginTop:6}}>
                        <Text style={[customStyle.subTitleTxt,{paddingTop:8, paddingBottom:8}]}>{"시험일자"}</Text>
                        <DateTimePicker type={"시험일"} setFunction={setTestDate}/>
                    </View>
                    <View style={{marginBottom:6, marginTop:6}}>
                        <Text style={[customStyle.subTitleTxt,{paddingTop:8, paddingBottom:8}]}>{"성적발표일자"}</Text>
                        <DateTimePicker type={"발표일"} setFunction={setResultDate}/>
                    </View>
                </View>
                <View style={customStyle.buttonContainer}>
                    <TouchableOpacity style={customStyle.btn}>
                        <Text style={customStyle.btnTxt}>{"추가하기"}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
            </>
    );
};

export default CertificationUpdateScreen;

const details = [

    {
        id: 0, //자격증 아이디
        title : '토익(TOEIC)',
        institution: 'ETS',
        homepage: 'https://~~~',
        examDate: '23.01.02(목)',
        examTime: '12:00',
        extraInfo: '성적발표',
        extraInfoDate: '23.2.21',

    },


]

const customStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 12,
        backgroundColor: "#FFFFFF",
    },
    titleContainer: {
        flex: 44,
        paddingTop:8,
        paddingBottom:8,
    },
    mainContainer: {
        flex: 592,
        marginTop:8,
    },
    buttonContainer: {
        flex: 55,
        marginTop: 8,
        marginBottom: 45,
    },


    titleTxt: {
        fontSize: 20,
        fontWeight: "600",
        color: "#222222",

        // backgroundColor: 'pink',
    },
    subTitleTxt:{
        fontSize:16,
        fontWeight: "400",
        lineHeight: 22.4,
        fontStyle: "normal",
        color: "#434343",
    },
    inputBox: {
        flex:1,

        height: 52,
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
    input: {
        height: 52,
        width: '100%', //pixel값 따르면 오른쪽만 달라짐


        paddingBottom:10,
        paddingTop:10,
        paddingLeft:16,
        paddingRight:12,

        borderWidth: 1,
        borderRadius:6,
        borderColor: "#E9E9E9",


        color: "#141414",
        fontWeight: "400",
        fontSize:16,

    },
    inputTxt:{
        color: "#141414",
        fontWeight: "400",
        fontSize:16,
        flex: 9
    },


    //dateTimePicker
    box:{
        borderRadius:6,
        borderWidth:1,
        borderColor: "#E9E9E9",
        height: 44,
        borderStyle: "solid",


        alignItems: "center",
        flexDirection: "row",

        paddingBottom:8,
        paddingTop: 8,
        paddingRight:12,
        paddingLeft:16,
    },
    dateTxt: {
        fontStyle: "normal",
        fontSize: 16,
        fontWeight: "400"
    },
    periodTxt:{
        fontSize:20,
        lineHeight:28,
        fontWeight:"400",
        color: "#E9E9E9"
    },

    //추가버튼
    btn: {
        backgroundColor: "#f56c3b",
        paddingTop: 18,
        paddingBottom: 18,
        paddingRight: 20,
        paddingLeft:20,
        height: 55,
        width: '100%',

        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
    },
    btnTxt: {
        color: "#FFFFFF",
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 19.09,

    }

})
