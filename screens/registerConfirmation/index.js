import React,{useState} from 'react';
import { Auth } from 'aws-amplify';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet,TextInput, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function RegistrationConfirmation(props) {
    const [confirmCode, setCode] = useState('');
    const username = props.route.params.username;
    const navigation = useNavigation()

    async function confirmSignUp() {
        try {
            console.log(username)
            await Auth.confirmSignUp(username, confirmCode);
            navigation.navigate('Home')
        } catch (error) {
            console.log('error confirming sign up', error);
        }
    }


    return (
        <SafeAreaView style = {styles.mainContainer}>
            <View style = {styles.inputContainer} >
                <TextInput autoCapitalize='none' placeholder='Confirmation Code' style = {styles.inputFields} onChangeText = {(text)=>setCode(text)}></TextInput>
            </View>
            <View style = {styles.RegisterButton} >
                <TouchableOpacity style = {styles.RegisterTouchable} onPress= {()=>confirmSignUp()}>
                    <Text style = {{color: 'white'}} >Confirm</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    mainContainer:{
        height:'100%',
        width:'100%',
    },
    inputContainer:{
        alignItems:"center",
        height:52,
        width: '100%',
        marginBottom:10,
        borderColor:'black',
        borderWidth:1

    },
    RegisterButton:{
        height:100,
        width:'100%',
        alignItems:"center",
        justifyContent:'center',
    },

})

export default RegistrationConfirmation;