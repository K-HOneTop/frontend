import React,{useState} from "react";
import {Image, Pressable, StyleSheet, View} from "react-native";

type Props = {
    selected:boolean;
}

function StarIcon ({selected}:Props) {
    const [isSelected, setIsSelected] = useState<boolean>(selected);


    const onChange = () => {
        setIsSelected(!isSelected);
    }


    return (
        <View>
            <Pressable
                // style={customStyles.star}
                onPress={onChange}>
                {isSelected === true ? (
                    <Image source={require('../../../assets/images/star_on.png')}/>
                ) : (<Image source={require('../../../assets/images/star_off.png')}/>)
                }
            </Pressable>
        </View>
    );
};



export default StarIcon;


const customStyles = StyleSheet.create({

    star:{
        position: 'absolute',
        right:11.5,
        bottom:12,
    }

});
