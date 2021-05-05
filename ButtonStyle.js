import React from 'react';
import { Pressable,StyleSheet,View,Text, Alert, TouchableOpacity } from 'react-native';
import ViewImageScreen from "./ViewImageScreen"
import { useNavigation } from '@react-navigation/native';

function RegisterStyle(props) {
    const navigation = useNavigation()
    const goToLogin = () =>{
        console.warn('hello')
        navigation.navigate('LoginPage')
    }
    return (
        <View style = {styles.container}>
            <TouchableOpacity style = {styles.button} onPress = {()=> goToLogin()}>
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
    text:{
        
    }


})

export default RegisterStyle;
