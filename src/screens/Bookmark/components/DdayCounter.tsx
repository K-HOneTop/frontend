import React, {useEffect, useState} from "react";
import {Image, Pressable, StyleSheet, Text, View} from "react-native";

type Props = {
    day:number|string;
    type:string;
}

function DdayCounter ({day, type}:Props) {


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


    useEffect(() => {

        if(type === "정기접수중"){
            setBaseColor("#F56C3B");
        }else if(type==="추가접수중"){
            setBaseColor("#83BBF8");
        }else{
            setBaseColor("#74D351");
        }


    }, []); //최초 1회만 실행되는 경우 []



    return (
        <View>
                {day <= 31 ? (
                    <View style={[customStyles.box,{backgroundColor: `${baseColor}`, marginRight:5}]}>
                            {day === 0 ? (
                                <Text style={customStyles.boxTxt}>
                                    {"D-day"}
                                </Text>

                            ):(
                                <Text style={customStyles.boxTxt}>
                                    {"D-"}{day}
                                </Text>
                            ) }
                    </View>
                ) : (
                    <View style={[customStyles.box,{backgroundColor: `${baseColor}`, marginRight:5}]}>
                        <Text style={customStyles.boxTxt}>{day}{"일"}</Text>
                    </View>
                )
                }

        </View>
    );
};



export default DdayCounter;


const customStyles = StyleSheet.create({

    box:{
        borderRadius:6,
        paddingTop:3,
        paddingBottom:3,
        paddingLeft:9,
        paddingRight:9,
        justifyContent: 'center',
        alignItems: 'center',
        height:21,
    },
    boxTxt: {
        color: "#FFFFFF",
        fontWeight: "500",
        fontSize: 12,

    }

});
