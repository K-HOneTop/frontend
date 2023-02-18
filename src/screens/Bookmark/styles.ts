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
        backgroundColor: 'blue',

        //정렬
        justifyContent: "center",
        alignItems: 'flex-start',
    },
    resultArea:{
        flex:36,//60-> 10 -> 1
        backgroundColor: 'green',

        //2가지 가로배치
        flexDirection: 'row',
    },
    cardArea:{
        flex:582,//618 -> 103 -> 10
        backgroundColor: 'orange',
    },


});
