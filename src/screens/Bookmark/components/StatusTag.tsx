import React, {useEffect, useState} from "react";
import {Image, Pressable, StyleSheet, Text, View} from "react-native";

type Props = {
    type:string;
}

function StatusTag ({type}:Props) {


    /*
    타입에 따라 버튼색 변경
    31일 넘으면 32일로 표시

    스타일 안넣었음


     */

    /*
    type: 버튼색 변경
    정기접수중 -> F56C3B
    추가접수중 -> 83BBF8
    직접추가 -> 74D351
     */

    const [baseColor, setBaseColor] = useState<String>("");
    const [textColor, setTextColor] = useState<String>("");
    const [borderColor, setBorderColor] = useState<String>("white");


    useEffect(() => {

        if(type === "정기접수중"){
            setBaseColor("#FEF0EB");
            setTextColor("#F56C3B");
        }else if(type==="추가접수중"){
            setBaseColor("#E9F3FF");
            setTextColor("#83BBF8");
        }else if(type === "접수마감"){
            setBaseColor("#E9E9E9");
            setTextColor("#8C8C8C");
        }else if(type === "직접추가"){
            setBaseColor("#FFFFFF");
            setTextColor("#8C8C8C");
            setBorderColor("#E9E9E9");
        }else if(type === "기간미입력"){
            setBaseColor("#ADE399");
            setTextColor("#FFFFFF");
        }else if(type === "접수예정"){
            setBaseColor("#8C8C8C");
            setTextColor("#FFFFFF");
        }


    }, []); //최초 1회만 실행되는 경우 []



    return (
        <View style={[customStyles.box,{backgroundColor: `${baseColor}`}, {borderColor: `${borderColor}`}]}>
            <Text style={[customStyles.boxTxt, {color:`${textColor}`}]}>{type}</Text>
        </View>
    );
};



export default StatusTag;


const customStyles = StyleSheet.create({

    box:{
        borderRadius:6,
        paddingTop:4.5,
        paddingBottom:4.5,
        paddingLeft:9,
        paddingRight:9,
        justifyContent: 'center',
        alignItems: 'center',
        height: 23,



        borderWidth:1,
    },
    boxTxt: {
        fontWeight: "400",
        fontSize: 12,

    }

});
