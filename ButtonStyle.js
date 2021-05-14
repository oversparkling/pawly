import React from 'react';
import { Pressable,StyleSheet,View,Text, Alert, TouchableOpacity } from 'react-native';
import ViewImageScreen from "./ViewImageScreen"
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font';

function RegisterStyle(props) {
    const navigation = useNavigation()
    const goToRegister = () =>{
        navigation.navigate('RegisterPage')
    }
    return (
        <View style = {styles.container}>
            <TouchableOpacity style = {styles.button} onPress = {()=> goToRegister()}>
                <Text>Register</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        padding: 10,
        
    },
    
    button:{
        height:40,
        borderRadius:20,
        backgroundColor:'#fc5c65',
        justifyContent:'center',
        alignItems:'center'
    },


})

export default RegisterStyle;
