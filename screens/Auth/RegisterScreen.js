import React, { useState } from 'react';
import { View, Text,TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { createUser } from '../../actions/AuthAction';


function RegisterScreen(props) {
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const registerUser = () =>{
        createUser(username,email,password)
    }
    return (
        <View style = {styles.container}>
           <Text style = {{fontFamily:'Recoleta-Regular',fontSize:36,marginBottom:30}}>Register</Text>
           <TextInput autoCapitalize = {"none"} style = {{width:'100%',height:52,borderWidth:2,padding:15,fontSize:15,fontFamily:'Recoleta-Regular',marginBottom:20}} placeholder="Username" onChangeText = {(text)=>setUsername(text)}/>
           <TextInput autoCapitalize = {"none"} style = {{width:'100%',height:52,borderWidth:2,padding:15,fontSize:15,fontFamily:'Recoleta-Regular',marginBottom:20}} placeholder="Email" onChangeText = {(text)=>setEmail(text)}/>
           <TextInput secureTextEntry={true} autoCapitalize = {"none"} style = {{width:'100%',height:52,borderWidth:2,padding:15,fontSize:15,fontFamily:'Recoleta-Regular',marginBottom:20}} placeholder="Password" onChangeText = {(text)=>setPassword(text)}/>
           <View style = {{alignItems:'center'}}>
               <TouchableOpacity onPress = {()=>registerUser()}>
                    <View style = {{width:171,height:56,borderRadius:50,backgroundColor:'black',alignItems:'center',justifyContent:'center'}}>
                        <Text style = {{color:'white',fontFamily:'Recoleta-Regular',fontSize:13}}>Register</Text>
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

export default RegisterScreen;