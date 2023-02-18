import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from "react-native-responsive-screen";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // backgroundColor: '#fc913a',
    },
    statusArea:{
        flex:44,
        backgroundColor: 'red',
    },
    topArea:{
        flex:60,
        backgroundColor: 'blue',
    },
    mainArea:{
        flex:618,
        backgroundColor: 'pink',
    },
    bottomArea:{
        flex:90,
        backgroundColor: 'orange',
    },
    DesignButton: {
        backgroundColor: '#F56C3B',
        borderRadius : 6,
        justifyContent: 'center',
        alignItems: 'center',
        padding:7,
        paddingLeft:10,
        paddingRight:10,
    },
});

export default styles;
