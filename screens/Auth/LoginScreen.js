import React, { useState,useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createUser, loginUser } from '../../actions/AuthAction';
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigation } from '@react-navigation/native';
import { Icon, Divider } from "react-native-elements";


function LoginScreen(props) {

    const navigation = useNavigation();
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { setIsLoggedIn, setUsername } = useContext(AuthContext);

    const submitLogin = () =>{
        loginUser(email, password).then(response =>{
            console.log("hi" + response)
            setUsername(response)
            setIsLoggedIn(true)
        });
    }

    return (
        <View style = { styles.container }>

            {/* Arrow */}
            <TouchableOpacity
                style = { styles.arrow }
                onPress = { () => navigation.goBack() }>
                <Icon name = "arrow-back-outline" type = "ionicon" color = "black" />
            </TouchableOpacity>

            {/* Header: Login */}
            <Text style = { styles.title }>Login</Text>

            {/* Input Boxes: Email, Password */}
            <TextInput autoCapitalize = { "none" } style = { styles.input } placeholder = "Email" onChangeText = {(text)=>setEmail(text)} placeholderTextColor = "#d3d3d3"/>
            <TextInput secureTextEntry = { true } autoCapitalize = {"none"} style = { styles.input } placeholder = "Password" onChangeText = {(text)=>setPassword(text)}  placeholderTextColor = "#d3d3d3"/>
            
            {/* Buttons: Submit */}
            <View style = {{alignItems:'center'}}>
                <TouchableOpacity onPress = { ()=>submitLogin() }>
                    <View style = { styles.button }>
                        <Text style = { styles.buttonText }>Login</Text>
                    </View>
                </TouchableOpacity>

           </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        height:             "100%",
        width:              "100%",
        backgroundColor:    "white",
        padding:            50,
    },
    
    title: {
        fontFamily:         'Recoleta-Regular',
        fontSize:           36,
        paddingTop:         150,
        paddingBottom:      20,
    },

    input: {
        width:              '100%', 
        height:             52, 
        borderWidth:        2,
        padding:            10,
        fontSize:           18,
        fontFamily:         'Sofia-Pro-Regular',
        marginBottom:       20
    },

    button: {
        width:              190,
        height:             60,
        borderRadius:       50,
        backgroundColor:    'black',
        alignItems:         'center',
        justifyContent:     'center',
    },

    buttonText: {
        color:              'white',
        fontFamily:         'Sofia-Pro-Regular',
        fontSize:           18,
    },

    inputText: {
        color:              'grey',
        fontFamily:         'Sofia-Pro-Regular',
        fontSize:           18,
    },

    arrow: {
        top:                40,
        position:           "absolute",
    },
})

export default LoginScreen;