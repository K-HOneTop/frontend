import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',

        paddingLeft:20,
        paddingRight:20,
        // backgroundColor: '#fc913a',
    },
    containerStatus:{
        flex:44
    },
    containerMain:{
        flex:678
    },
    containerBottom:{
        flex:90
    },

    //containerMain내부
    TitleArea:{
        //크기 비율로
        flex:60,//60-> 10 -> 1

        //임시
        // backgroundColor: 'blue',

        //정렬
        justifyContent: "center",
        alignItems: 'flex-start',
    },
    resultArea:{
        flex:36,//60-> 10 -> 1
        // backgroundColor: 'green',

        //2가지 가로배치
        flexDirection: 'row',
    },
    cardArea:{
        flex:582,//618 -> 103 -> 10
        // backgroundColor: 'orange',

    },


    //modal
    modalTop:{
        flex: 3.5,
        // backgroundColor: 'blue',
        paddingTop:8,
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:24,
    },
    modalBottom:{
        flex: 11,
        // backgroundColor: 'green',
    },
    modalXbox:{
        flex:1,
        // backgroundColor:'red',
        justifyContent: 'center',

    },
    modalSearchBox:{
        flex:2,
        // backgroundColor:'orange'
    },
    modalTitleText:{
        fontSize: 20,
        fontWeight: "600",
        lineHeight: 28,
        letterSpacing: -0.01,
    },
    modalSearch:{
        paddingRight:12,
        paddingLeft:16,
        paddingTop:10,
        paddingBottom:10,

        borderWidth:1,
        borderRadius:6,
        borderColor:"#E9E9E9"
    },
    modalResult: {
        justifyContent: "center",
        paddingTop: 8,
        paddingBottom: 8,
        height: 40,
        borderBottomColor: "#F1F1F1",
        borderTopColor: "#FFFFFF",
        borderRightColor: "#FFFFFF",
        borderLeftColor: "#FFFFFF",
        borderWidth: 1,
        paddingLeft:20,
        paddingRight:20,
    },
    modalResultTxt:{
        color:"#8C8C8C", fontWeight:"400", fontSize:13, lineHeight:18.2,
    },


});
