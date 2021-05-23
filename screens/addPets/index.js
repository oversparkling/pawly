import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView, StyleSheet,Text, Button } from 'react-native';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { createPet } from '../../src/graphql/mutations';


function AddPets(props) {
    const [name,setName] = useState('');
    const [birthday,setBirthday] = useState('');
    const submitPet = async ()=>{
        const userID = await Auth.currentAuthenticatedUser({bypassCache:true});
        console.log(userID);
        const pet = {
            name: name,
            birthdate: birthday,
            ownerID: userID.attributes.sub,
        }
        console.log(pet)
        await API.graphql(graphqlOperation(createPet,{input:pet}));
    }

    return (
       <SafeAreaView style = {styles.container}>
           <TextInput style = {styles.input} placeholder='Name' value = {name} onChangeText={(newValue)=>setName(newValue)}>
               
           </TextInput>
           <TextInput style = {styles.input} placeholder = 'Birthday' value = {birthday} onChangeText={(newValue)=>setBirthday(newValue)}>
               
           </TextInput>

           <Button title = 'Submit' onPress = {()=>submitPet()} ></Button>
           
       </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        alignItems:'center'
    },
    input:{
        marginBottom:10,
        width:'70%',
        borderWidth:1,
        height:40,
        
    }
})

export default AddPets;