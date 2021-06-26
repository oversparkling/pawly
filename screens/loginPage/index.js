import React, { useState } from 'react';
import { SafeAreaView } from 'react-navigation';
import { View,Text, StyleSheet, Pressable, ViewBase, Button, Touchable } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Auth } from 'aws-amplify';
import { Ionicons } from '@expo/vector-icons';

function LoginPage(props) {
    const [username, setUser] = useState('');
    const [password,setPass] = useState('');
    const [errorMessage,setError] = useState('');
    const [isVisible,setVisibility] = useState(true);
    const toggleEye = () =>{
        setVisibility(!isVisible);
    }
    const navigation = useNavigation()
    const backHome = () =>{
        navigation.navigate('Home')
    };
    const loggedIn = () =>{
        if (username == ''){
            setError('Username cannot be empty')
            return
        }
        if (password == ''){
            setError('Password cannot be empty')
            return
        }
        signIn(username,password)
    };
    

async function signIn(username,password) {
    try {
        const user = await Auth.signIn(username, password);
        if (user){
            navigation.navigate('TabsHomePage')
        }
    } catch (error) {
        setError(error.message)
        console.log(errorMessage)
    }
}

    return (
        <SafeAreaView> 

            <View style = {styles.backButtonContainer}>
                <Pressable style = {{justifyContent:'center',height:'100%',alignItems:'center',width:50}} onPress = {()=>backHome()}>
                    <AntDesign name="back" size={24} color="black" />
                </Pressable>
            </View>
            <View style = {styles.LoginContainer}>
                <View style = {styles.LoginHeading}>
                    <Text style = {{fontWeight:"normal",fontSize:36}}>Login</Text>
                </View>
                <View style = {styles.inputContainer} >
                    <TextInput  autoCapitalize='none' placeholder='Username' style = {styles.inputFields} onChangeText = {text => setUser(text)}></TextInput>
                </View>
                <View style = {styles.inputContainer} >
                    <TextInput secureTextEntry={isVisible} autoCapitalize='none' placeholder='Password' style = {styles.inputFields} onChangeText = {text => setPass(text)}></TextInput>
                    <Ionicons name="eye-off-outline" size={24} color="black" style = {styles.eyeIcon} onPress = {()=>toggleEye()}/>
                </View>

                <View style = {styles.LoginButton} >
                    <TouchableOpacity style = {styles.LoginTouchable} onPress = {()=> loggedIn()}>
                        <Text style = {{color: 'white'}} >Login</Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.errorMessage}>
                    <Text style = {{color: 'black',height:'100%',width:'100%',textAlign:'center'}}>{errorMessage}</Text>
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
    LoginContainer:{
        justifyContent: "space-between",
        alignItems:'center'
        
    },
    LoginHeading:{
        marginLeft:20,
        padding:20,
        height:100,
        width:'100%',
        justifyContent:'center',
    },
    eyeIcon:{
        justifyContent: 'flex-end',
        marginLeft:55
    },
    inputContainer:{
        height:52,
        width: '80%',
        marginBottom:10,
        flexDirection:'row',
        alignItems:'center',
        borderWidth:2,
        justifyContent:'flex-start'
        
        

    },
    inputFields:{
        width:'70%',
        height:'100%',

    },
    LoginButton:{
        height:100,
        width:'100%',
        alignItems:"center",
        justifyContent:'center',
    },
    LoginTouchable:{alignContent:"center",
        height: 53,
        width:171,
        backgroundColor:'black',
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center'},
    errorMessage:{
        marginTop:5,
        width:'100%',
        height:30,
        alignItems:'center'
    }
    


})

export default LoginPage;