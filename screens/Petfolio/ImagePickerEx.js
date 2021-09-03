import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';
import React, { useEffect, useState } from 'react';
import { Alert, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from "react-native-elements";
import { uploadPetImage } from '../../actions/PetActions.js';


export default function ImagePickerExample(props) {

  const [image, setImage] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handleUpload = () => {
    uploadPetImage(props.route.params.id,image)
  };

  // Pop up to confirm adding task
  const createButtonAlert = () =>
    Alert.alert(
    // Title
    "Upload Image", 
    // Subtitle
    "Click to confirm.",
    [{ text: "Cancel", onPress: () => navigation.navigate("MainPetPage"), style: "cancel"},
    { text: "Confirm", onPress: () => { handleUpload(); navigation.navigate("MainPetPage"); }}]
  );

  return (
    <View style = { styles.container}>

      {/* Upload image box */}
      <View style = { styles.box }>
        {image?  
          
          <TouchableOpacity  onPress = { pickImage }>
           <Image source={{ uri: image }} style={{ width: 287, height: 257 }} />
           </TouchableOpacity>
           :
           <TouchableOpacity style = { styles.plus } onPress = { pickImage } >
            <Icon name = "plus" type = "antdesign" color = "black" />
            <Text style = { styles.boxText } >Upload an image</Text>
            </TouchableOpacity>
        }
        {/* <TouchableOpacity style = { styles.plus } onPress = { pickImage } >
          <Icon name = "plus" type = "antdesign" color = "black" />
          <Text style = { styles.boxText } >Upload an image</Text>
          {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </TouchableOpacity> */}
      </View>

      {/* Upload button */}
      <TouchableOpacity onPress = { () => createButtonAlert() }>
        <View style = { styles.button }>
          <Text style = { styles.buttonText }>Upload</Text>
        </View>
      </TouchableOpacity>
      {/* <Button title = "Upload" style = {styles.button} onPress = {()=> handleUpload()}/> */}
    
    </View>

    // {/* Buttons: Submit */}
    // <TouchableOpacity onPress = { ()=>submitLogin() }>
    //                 <View style = { styles.button }>
    //                     <Text style = { styles.buttonText }>Login</Text>
    //                 </View>
    //             </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  container: {
    flex:           1, 
    alignItems:     'center', 
    justifyContent: 'center',
    backgroundColor:'white',
  },

  box: {
    width:          287,
    height:         257,
    borderWidth:    1,
    borderColor:    '#A6A1A1',
    borderStyle:    'dashed', 
    alignItems:     'center', 
    justifyContent: 'center',
    borderRadius:   1,
    backgroundColor:'#E8E8E8',
  },

  boxText: {
    fontFamily:     'Sofia-Pro-Regular',
    fontSize:       15,
    marginTop:      10,
  },

  button: {
    width:          216,
    height:         50,
    backgroundColor:'#E1AAAA',
    borderColor:    'white',
    borderWidth:    1,
    borderRadius:   25,
    alignItems:     'center',
    marginTop:      50,
    shadowColor:    "#000",
    shadowOffset: {
	    width: 0,
	    height: 3,
    },
    shadowOpacity:    0.25,
    shadowRadius:     3,
    elevation:        5, 
  }, 

  buttonText: {
    fontFamily:     'Sofia-Pro-Regular',
    fontSize:       15,
    marginTop:      10,
    color:          'white',
  }

})