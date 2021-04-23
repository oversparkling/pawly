import React,{useState} from 'react';
import { View, ImageBackground,StyleSheet, Image,Text,Button, Alert,Touchable, TouchableOpacity } from 'react-native';

import RegisterStyle from './ButtonStyle';
import LoginStyle from './ButtonStyle2';
import ViewImageScreen from './ViewImageScreen';




function WelcomeScreenfinal(props) {
    const navigator = ()=>{
        props.navigation.navigate('SecondScreen')
    }
    return (
            <ImageBackground style = {styles.container} source = {require("./assets/petBackground.jpg") }>
                <View style = {styles.logoContainer}>
                    <Image source = {require("./assets/Logo.png")} style = {styles.logoIcon}></Image>
                    <Text> Pawly </Text>
                </View>

                <Button title = 'Navigate' onPress = {navigator} style = {{height: 40, width: 40}}></Button>
                
                <View style = {styles.registerButton}>
                    <RegisterStyle/>
                </View>
                <View style = {styles.loginButton}>
                    {/* <Button onPress = {()=>Alert.alert("Hello")} title = "Login" color = "#000" ></Button> */}
                    <LoginStyle/>
                </View>
            </ImageBackground>
    );
}

const styles = StyleSheet.create({
    logoContainer:{
        position: 'absolute',
        top: 100,
        alignItems: 'center'
    },
    logoIcon:{

        height:100,
        width:100,
    },
    container:{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center'
    },
    registerButton:{
        top:-20,
        width:'100%',
        height:50,
        alignItems:'center'
    },
    loginButton:{
        width:'100%',
        borderRadius:100,
        height:50,
        alignItems:'center',
        top: -20
    }
})

export default WelcomeScreenfinal;