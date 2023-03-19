import React,{useState} from "react";
import {Image, Pressable, StyleSheet, View,Text} from "react-native";
import {white} from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import {useNavigation} from "@react-navigation/native";

type Props = {
    title:string,
}

function CustomHeader ({title}:Props) {
    const navigation = useNavigation();


    return (
        <View style={customStyles.container}>
            <View style={{flex:1}}>
                <Pressable onPress={ () => navigation.goBack()}>
                    <Image source={require('../../../assets/images/back_tail.png')}/>
                </Pressable>
            </View>
            <View style={{flex:10, alignItems: 'center'}}>
                <Text style={customStyles.titleTxt}>{title}</Text>
            </View>
            <View style={{flex:1}}>
                <Image source={require('../../../assets/images/next_invisible.png')}/>
            </View>
        </View>
    );
};



export default CustomHeader;


const customStyles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        paddingTop:52,
        paddingBottom: 8,
        paddingRight:20,
        paddingLeft:20,
        width: '100%',
        flexDirection:"row",
        justifyContent:'center',
        alignItems: 'center'
    },
    titleTxt:{
        justifyContent:'center',
        alignItems:'center',
        color: '#141414',
        fontWeight: "600",
        fontSize: 20,
        lineHeight: 28,
    }

});
