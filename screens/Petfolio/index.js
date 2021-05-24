import React from 'react';
import { View, StyleSheet, Pressable,Image,Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

function Petfolio(props) {
    const navigation = useNavigation();
    const backButton = () =>{
        navigation.goBack()
    }
    return (
        <SafeAreaView style = {styles.container}>
        <ScrollView>
            <View style = {styles.backButtonContainer}>
                <Pressable style={{justifyContent:'center',height:'100%',alignItems:'center',width:50}} onPress = {()=>backButton()}>
                    <AntDesign name="back" size={24} color="black" />
                </Pressable>
            </View>

            <View style = {styles.imageContainer}>
                <Image style = {styles.roundImage}  source = {require('../../assets/pet1.jpg')}></Image>
            </View>

            <View style = {styles.descriptionContainer}>
                <Text style = {styles.name}>
                    {props.route.params.pet.name}
                </Text>
                <Text style = {styles.description}>
                    {props.route.params.pet.birthdate}
                </Text>
            </View>
            <View style = {styles.itemRow}>
                <View style = {styles.individualItem}>
                    <Text>Hi</Text>
                </View>
                <View style = {styles.individualItem}>
                    <Text>Hi</Text>
                </View>
                <View style = {styles.individualItem}>
                    <Text>Hi</Text>
                </View>
            </View>

            <View style = {styles.itemRow}>
                <View style = {styles.individualItem}>
                    <Text>Hi</Text>
                </View>
                <View style = {styles.individualItem}>
                    <Text>Hi</Text>
                </View>
                <View style = {styles.individualItem}>
                    <Text>Hi</Text>
                </View>
            </View>
           
           

        </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    backButtonContainer:{
        marginTop:30,
        height:50,
        width:'100%',
    },
    imageContainer:{
        height:180,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    roundImage:{
        height:155,
        width:155,
        borderRadius:77.5
    },
    descriptionContainer:{
        height:90,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    name:{
        fontSize:36
    },
    description:{
        fontSize:15
    },
    itemRow:{
        height:70,
        padding:30,
        width:'100%',
        justifyContent: 'space-between',
        flexDirection:"row"
    },
    individualItem:{
        height:55,
        width:97,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15,
        borderWidth:1
    }


})

export default Petfolio;