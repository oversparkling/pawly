import React from 'react';
import { View, ImageBackground,StyleSheet, Image,Text } from 'react-native';

function WelcomeScreenfinal(props) {
    return (
            <ImageBackground style = {styles.container} source = {require("./assets/background.jpg") }>
                <View style = {styles.logoContainer}>
                    <Image source = {require("./assets/logo-red.png")} style = {styles.logoIcon}></Image>
                    <Text> Sell What You Don't Need</Text>
                </View>
                <View style = {styles.registerButton}></View>
                <View style = {styles.loginButton}></View>
            </ImageBackground>
    );
}

const styles = StyleSheet.create({
    logoContainer:{
        position: 'absolute',
        top: 70,
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
        width:'100%',
        height:80,
        backgroundColor: "#fc5c65"
    },
    loginButton:{
        width:'100%',
        height:80,
        backgroundColor: "#4ECDC4"
    }
})

export default WelcomeScreenfinal;