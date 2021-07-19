import React, { useState,useContext } from 'react';
import { View, Text,TextInput,Button, StyleSheet } from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { createUser, loginUser } from '../../actions/AuthAction';
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigation } from '@react-navigation/native';


function LoginScreen(props) {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const { setIsLoggedIn } = useContext(AuthContext);
    const navigation = useNavigation();
    const submitLogin = () =>{
        loginUser(email,password).then(response =>{
            setIsLoggedIn(true)
        });
    }
    return (
        <View style = {styles.container}>
           <Text style = {{fontFamily:'Recoleta-Regular',fontSize:36,marginBottom:30}}>Login</Text>
           <TextInput autoCapitalize = {"none"} style = {{width:'100%',height:52,borderWidth:2,padding:15,fontSize:15,fontFamily:'Recoleta-Regular',marginBottom:20}} placeholder="Email" onChangeText = {(text)=>setEmail(text)}/>
           <TextInput secureTextEntry={true} autoCapitalize = {"none"} style = {{width:'100%',height:52,borderWidth:2,padding:15,fontSize:15,fontFamily:'Recoleta-Regular',marginBottom:20}} placeholder="Password" onChangeText = {(text)=>setPassword(text)}/>
           <View style = {{alignItems:'center'}}>
               <TouchableOpacity onPress = {()=>submitLogin()}>
                    <View style = {{width:171,height:56,borderRadius:50,backgroundColor:'black',alignItems:'center',justifyContent:'center'}}>
                        <Text style = {{color:'white',fontFamily:'Recoleta-Regular',fontSize:13}}>Login</Text>
                    </View>
               </TouchableOpacity>

               <TouchableOpacity onPress = {()=>navigation.navigate('Register')} style = {{marginTop:20}}>
                    <View style = {{width:171,height:56,borderRadius:50,backgroundColor:'black',alignItems:'center',justifyContent:'center'}}>
                        <Text style = {{color:'white',fontFamily:'Recoleta-Regular',fontSize:13}}>Register Instead!</Text>
                    </View>
               </TouchableOpacity>
           </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:32,
        marginTop:80,

    }
})



export default LoginScreen;