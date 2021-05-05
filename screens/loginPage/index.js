import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { View,Text, StyleSheet, Pressable, ViewBase, Button, Touchable } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function LoginPage(props) {
    const navigation = useNavigation()
    const backHome = () =>{
        navigation.navigate('Home')
    }
    return (
        <SafeAreaView> 
            <View style = {styles.backButtonContainer}>
                <Pressable style = {{justifyContent:'left',height:'100%',padding:20,width:50,backgroundColor:'white'}} onPress = {()=>backHome()}>
                    <Text>back</Text>
                </Pressable>
            </View>
            <View style = {styles.registerContainer}>
                <View style = {styles.registerHeading}>
                    <Text style = {{fontWeight:"normal",fontSize:36}}>Register</Text>
                </View>
                <View style = {styles.inputContainer} >
                    <TextInput placeholder='Email' style = {styles.inputFields}></TextInput>
                </View>
                <View style = {styles.inputContainer} >
                    <TextInput placeholder='Password' style = {styles.inputFields}></TextInput>
                </View>

                <View style = {styles.registerButton} >
                    <TouchableOpacity style = {styles.registerTouchable}>
                        <Text style = {{color: 'white'}} >Login</Text>
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
    registerContainer:{
        backgroundColor:'red',
        flex:1,
        justifyContent: "space-between"
    },
    registerHeading:{
        padding:20,
        height:100,
        backgroundColor:'white',
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
    registerButton:{
        height:100,
        width:'100%',
        alignItems:"center",
        justifyContent:'center',
    },
    registerTouchable:{alignContent:"center",
        height: 53,
        width:171,
        backgroundColor:'black',
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center'}
    


})

export default LoginPage;