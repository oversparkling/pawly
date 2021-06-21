import React, { useState } from 'react';
import { SafeAreaView } from 'react-navigation';
import { View,Text, StyleSheet, Pressable, ViewBase, Button, Touchable } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import {Auth} from 'aws-amplify';

function RegisterPage(props) {

    const [username, setUser] = useState('');
    const [password,setPass] = useState('');
    const [email,setEmail] = useState('');
    const navigation = useNavigation()
    const backHome = () =>{
        signUp()
    }
    async function signUp() {
        try {
            // console.log(username)
            // const { user } = await Auth.signUp({
            //     username,
            //     password,
            //     attributes:{
            //         email,
            //     }
            // });
            // console.log(user);
            navigation.navigate('RegisterConfirmation',{username:username});
        } catch (error) {
            console.log('error signing up:', error);
        }
    }




    return (
        <SafeAreaView> 
            <View style = {styles.backButtonContainer}>
                <Pressable style = {{justifyContent:'center',height:'100%',alignItems:'center',width:50}} onPress = {()=>backHome()}>
                    <AntDesign name="back" size={24} color="black" />
                </Pressable>
            </View>
            <View style = {styles.RegisterContainer}>
                <View style = {styles.RegisterHeading}>
                    <Text style = {{fontWeight:"normal",fontSize:36}}>Register</Text>
                </View>
                <View style = {styles.inputContainer} >
                    <TextInput autoCapitalize='none' placeholder='Email' style = {styles.inputFields} onChangeText = {(text)=>setEmail(text)}></TextInput>
                </View>
                <View style = {styles.inputContainer} >
                    <TextInput autoCapitalize='none' placeholder='Username' style = {styles.inputFields} onChangeText = {(text)=>setUser(text)}></TextInput>
                </View>
                <View style = {styles.inputContainer} >
                    <TextInput autoCapitalize='none' placeholder='Password' style = {styles.inputFields} onChangeText = {(text)=>setPass(text)}></TextInput>
                </View>
                

                <View style = {styles.RegisterButton} >
                    <TouchableOpacity style = {styles.RegisterTouchable} onPress= {()=>backHome()}>
                        <Text style = {{color: 'white'}} >Register</Text>
                    </TouchableOpacity>
                </View>


            </View>

        </SafeAreaView>
    );
}
//{ }

const styles = StyleSheet.create({
    backButtonContainer:{
        marginTop:30,
        height:50,
        width:'100%',
    },
    RegisterContainer:{
        flex:1,
        justifyContent: "space-between"
    },
    RegisterHeading:{
        marginLeft:20,
        padding:20,
        height:100,
        width:'100%',
        justifyContent:'center'

    },
    inputContainer:{
        alignItems:"center",
        height:52,
        width: '100%',
        marginBottom:10

    },
    inputFields:{
        justifyContent:"center",
        width:314,
        height:'100%',
        alignItems:"center",
        borderWidth:2

    },
    RegisterButton:{
        height:100,
        width:'100%',
        alignItems:"center",
        justifyContent:'center',
    },
    RegisterTouchable:{alignContent:"center",
        height: 53,
        width:171,
        backgroundColor:'black',
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center'}
    


})

export default RegisterPage;