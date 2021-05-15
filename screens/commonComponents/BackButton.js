import React from 'react';
import {Pressable} from 'react-native'
import {AntDesign} from '@expo/vector-icons'

function BackButton(props) {
    return (
        <Pressable style = {{justifyContent:'center',height:'100%',alignItems:'center',width:50}}>
            <AntDesign name="back" size={24} color="black" />
        </Pressable>
    );
}



export default BackButton;