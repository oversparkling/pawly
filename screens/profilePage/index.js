import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View,Text, StyleSheet, Pressable, ViewBase, Button, Touchable,Image } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { ceil } from 'react-native-reanimated';
import Tabs from '../tabs';
import { NavigationContainer } from '@react-navigation/native';

function ProfilePage(props) {
    const image1 = require('../../assets/petBackground.jpg')
    const image3 = require('../../assets/pet2.jpg')
    const image4 = require('../../assets/pet3.jpg')
    return (
        <SafeAreaView style = {styles.maincontainer}>
            <ScrollView>
            <View style = {styles.heading}>
                <Text style = {{fontSize:36}}>Petfolios</Text>
            </View>
            <View style = {styles.subheading}>
                <Text style = {{fontSize:13,fontWeight:"bold"}}>What's new with Hiro </Text>
            </View>
            <View style = {styles.container}>
                <ScrollView horizontal={true}>
                    <Image source={image1} style = {styles.imageContainer} />
                    {/* <Image source={image2} style = {styles.imageContainer} /> */}
                    <Image source={image3} style = {styles.imageContainer} />
                    <Image source={image4} style = {styles.imageContainer} />
                </ScrollView>
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    maincontainer:{
        height:'100%',
    },
    heading:{
        height:80,
        width:'100%',
        justifyContent:"center",
        paddingLeft:25,
    },
    subheading:{
        height:50,
        justifyContent:'center',
        paddingLeft:25,
    },
    container:{
        height:300,
        width:'100%',
    },
    imageContainer:{
        height:'100%',
        marginLeft:20,
        width: 200,
        resizeMode:'contain'
    },
    functionContainer:{
    }

})

export default ProfilePage;