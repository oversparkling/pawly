import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RegisterScreen from "./RegisterScreen";
import LoginScreen from "./LoginScreen";

function WelcomeScreen(props) {

    const navigation = useNavigation();

    return (
    
        <View style = { styles.container }>
            <Image
                source = {require('./logo.png')}
                style = {{ width: 75, height: 75 }}
            />
            <Text style = { styles.title }>Pawly</Text>
            <TouchableOpacity onPress = { () => navigation.navigate('Login') }>
                <View style = { styles.button }>
                    <Text style = { styles.buttonText }>Login</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress = { () => navigation.navigate('Register') }>
                <View style = { styles.button }>
                    <Text style = { styles.buttonText }>Register</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        height:             "100%",
        width:              "100%",
        backgroundColor:    "white",
        alignItems:         "center",
        justifyContent:     "center",
    },

    title: {
        fontFamily:         "Recoleta-Regular",
        fontSize:           45,
        paddingBottom:      30,
        paddingTop:         20,
    },

    button: {
        width:              190,
        height:             56,
        borderRadius:       50,
        backgroundColor:    'black',
        alignItems:         'center',
        justifyContent:     'center',
        marginBottom:       15,
    },

    buttonText: {
        fontFamily:         "Sofia-Pro-Regular",
        fontSize:           15,
        color:              'white',
    }
});

export default WelcomeScreen;