import React, { useState } from 'react';
import { SafeAreaView } from 'react-navigation';
import { View,Text, StyleSheet, Pressable, ViewBase, Button, Touchable } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import * as Font from 'expo-font'

function LoginPage(props) {
    const[fontLoad,setFondLoad] = useState(false)
    const navigation = useNavigation()
    const backHome = () =>{
        navigation.navigate('Home')
    };
    
    // useEffect( () => async loadFonts(){
    //     await Font.loadAsync({
    //       'Montserrat': require('../../assets/fonts/Montserrat.ttf'),
    //     });
    //     this.setState({ fontsLoaded: true });
    //     console.warn('Hello')
    // },[]);

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
                    <TextInput placeholder='Email' style = {styles.inputFields}></TextInput>
                </View>
                <View style = {styles.inputContainer} >
                    <TextInput placeholder='Password' style = {styles.inputFields}></TextInput>
                </View>

                <View style = {styles.LoginButton} >
                    <TouchableOpacity style = {styles.LoginTouchable}>
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
    LoginContainer:{
        flex:1,
        justifyContent: "space-between"
    },
    LoginHeading:{
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
        justifyContent:'center'}
    


})

export default LoginPage;