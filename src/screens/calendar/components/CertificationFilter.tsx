import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import certifications from "../../../types/calendars/CertificationTypes";
import styles from '../style';
import {widthPercentageToDP as wp} from "react-native-responsive-screen";

type Props = {
    items: certifications[];
}

const CertificationFilter = ({items}:Props) => {
    return (
        <View style={customStyles.container}>
            <View style={customStyles.containerTop}>
                <View style={customStyles.topArea}>
                    <TouchableOpacity
                        style={customStyles.topButton}
                        onPress={() => {
                            // @ts-ignore
                            this.RBSheet.close()
                        }}/>
                </View>
            </View>
            <View style={customStyles.containerMain}>
                <View style={styles.mainArea}>
                {items.map(item => (
                    <View>
                        <Text>{item.name}</Text>
                        <Text>{item.normalStartDate}</Text>
                        <Text>{item.normalEndDate}</Text>
                    </View>
                ))}
                </View>
            </View>
            <View style={customStyles.containerBottom}>

            </View>
        </View>
    );
};

export default CertificationFilter;

const customStyles = StyleSheet.create({
    //전체
    container:{
        flex:760,
        paddingRight:20,
        paddingLeft:20,
    },
    containerTop:{
        flex:70,
        backgroundColor: 'red'
    },
    containerMain:{
        flex:490,
        backgroundColor: 'green'
    },
    containerBottom:{
        flex:200,
        backgroundColor: 'blue'
    },

    //탑부분
    topArea: {
        flex: 100,
        flexDirection: 'row',
        //요소 중앙정렬
        justifyContent: 'flex-start',

        //요소 첫 시작점에 배치
        alignItems: 'center',

        //design에서 정의된 padding
        paddingBottom:8,
        paddingTop:16,

        // backgroundColor: 'orange',
    },
    topButton:{ //x button location
        flex:0.13,
        padding:10,
        backgroundColor: 'black',
        height: '100%',
    },

    //mid area



});
