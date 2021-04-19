import React from 'react';
import { View, ImageBackground,StyleSheet, Image,Text } from 'react-native';

function ViewImageScreen(props) {
    return (
      <View style = {styles.container}>
          <View style={styles.closeIcon}></View>
          <View style={styles.openIcon}></View>
          <Image style = {styles.image} source = {require("./assets/chair.jpg")}></Image>
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
        // flex:1,
        backgroundColor: "#000"
    },
    closeIcon:{
        width:50,
        height:50,
        top:50,
        left:20,
        position:"absolute",
        backgroundColor:"#fc5c65"
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