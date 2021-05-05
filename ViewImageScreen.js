import React from 'react';
import { View, ImageBackground,StyleSheet, Image,Text,Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function ViewImageScreen(props) {
    const navigation = useNavigation()
    const goBackHome = () =>{
        console.warn('Hello1')
        navigation.navigate('Home')
        
    }
    return (
      <View style = {styles.container}>
          <Pressable onPress = {()=>goBackHome()} style ={styles.closeIcon}>
        <Text>hello</Text>
          </Pressable>
          {/* <Pressable onPress = {goBackHome} style={styles.closeIcon} >
          </Pressable> */}
          <Pressable style={styles.openIcon} onPress = {() => goBackHome()}></Pressable>
          <Image style = {styles.image} source = {require("./assets/chair.jpg")}></Image>
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
        // flex:1,
        zIndex: 1,
        backgroundColor: "#000"
    },
    closeIcon:{
        width:50,
        height:50,
        top:50,
        left:20,
        position:"absolute",
        backgroundColor:"white"
    },
    openIcon:{
        width:50,
        height:50,
        top:50,
        right:20,
        position:"absolute",
        backgroundColor:"#4ECDC4"
    },
    navBar:{
        // flex:2,
        backgroundColor:"#f3f"
    },
    image:{
        width:'100%',
        height: '100%',
        resizeMode:'contain'
    }
})

export default ViewImageScreen;