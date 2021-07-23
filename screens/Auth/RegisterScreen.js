import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createUser } from '../../actions/AuthAction';
import { useNavigation } from '@react-navigation/native';
import { Icon, Divider } from "react-native-elements";


function RegisterScreen(props) {

    const navigation = useNavigation();

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const registerUser = () =>{
        createUser(username, email, password)
    }

    return (
        <View style = {styles.container}>

            {/* Arrow */}
            <TouchableOpacity
                style = { styles.arrow }
                onPress = { () => navigation.goBack() }>
                <Icon name = "arrow-back-outline" type = "ionicon" color = "black" />
            </TouchableOpacity>

            {/* Header */}
           <Text style = { styles.title }>Register</Text>

           {/* Input boxes: Username, Email, Password */}
           <TextInput autoCapitalize = {"none"} style = { styles.input } placeholder = "Username" onChangeText = { (text)=>setUsername(text) }/>
           <TextInput autoCapitalize = {"none"} style = { styles.input } placeholder = "Email" onChangeText = { (text)=>setEmail(text) }/>
           <TextInput secureTextEntry = { true } autoCapitalize = {"none"} style = { styles.input } placeholder = "Password" onChangeText = { (text)=>setPassword(text) }/>
           
           {/* Buttons: Submit */}
           <View style = { {alignItems:'center'} }>
               <TouchableOpacity onPress = {()=>registerUser()}>
                    <View style = { styles.button }>
                        <Text style = { styles.buttonText }>Register</Text>
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
        height:             56,
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

export default RegisterScreen;