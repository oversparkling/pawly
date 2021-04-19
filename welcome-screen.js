import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, ImageBackground,Image } 
from 'react-native';

function welcomescreen(props){
    return (
        <View style={styles.container}>
        <ImageBackground source = {require("./assets/background.jpg")} style = {styles.imageBackground}>
        <View style = {styles.icon}>
          <View style= {{flex:1}}>
  
          </View>
        <Image source = {require("./assets/logo-red.png")} style = {styles.icon}/>
        <View style= {{flex:1}}>
  
          </View>
        </View>
  
        <View style ={{flex:8, alignItems: 'center'}}>
        <Text>Sell what you don't need</Text>
        </View>
  
        <View style ={{backgroundColor:"#fc5c65", flex:1}}>
  
        </View>
        <View style ={{backgroundColor:"#4ECDC4", flex:1}}>
  
        </View>
        
        {/* <Button
        title="Learn More"
        color="#841584"
        onPress = {()=>Alert.alert("My title","Message",[{text:"yes"},{text:"no"}])}
        accessibilityLabel="Learn more about this purple button"/> */}
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        </ImageBackground>
      </View>
      
    );
    
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        // backgroundColor: '#fff',
          alignItems: 'center',
        // justifyContent: 'center',
      },
      imageBackground:{
        flex: 1,
        resizeMode: "cover"
      },
      icon: {
        
        flex: 2,
        // top: 50,
        // backgroundColor:"#f4f",
        // width: 80,
        // height: 80,
      }
});

    

export default welcome-screen;