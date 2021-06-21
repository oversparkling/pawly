import React from "react";
import { Text,View,StyleSheet,ScrollView,Image, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Tweet(props) {
  const navigation = useNavigation();
    const tempPage= (pet) =>{
      
      navigation.navigate('Petfolio',{pet:pet})
    };
    const image1 = require('../../../assets/petBackground.jpg')
    const image3 = require('../../../assets/pet2.jpg')
    const image4 = require('../../../assets/pet3.jpg')
  return (
    <View style = {styles.maincontainer}>
      <View style={styles.subheading}>
        <Text style={{ fontSize: 13, fontWeight: "bold" }}>
          What's new with <Text onPress = {()=>tempPage(props.data)} style = {{color:'blue'}}>{props.data.name}</Text>
        </Text>
      </View>
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <Image source={image1} style={styles.imageContainer} />
          {/* <Image source={image2} style = {styles.imageContainer} /> */}
          <Image source={image3} style={styles.imageContainer} />
          <Image source={image4} style={styles.imageContainer} />
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    maincontainer:{
        marginBottom:20
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
    }
})

export default Tweet;
