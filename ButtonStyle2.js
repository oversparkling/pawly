import React from 'react';
import { Pressable,StyleSheet,View,Text, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function LoginStyle(props) {
    const navigation = useNavigation()
    const goToLogin = () =>{
        navigation.navigate('LoginPage')
    }
    return (
        <View style = {styles.container}>
            <TouchableOpacity style = {styles.button} onPress = {()=>goToLogin()}>
                <Text>Login</Text>
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
        backgroundColor:'#4ECDC4',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        
    }


})

export default LoginStyle