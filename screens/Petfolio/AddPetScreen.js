import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Appearance, useColorScheme } from 'react-native-appearance';
import { Icon } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { addPet } from "../../actions/PetActions";
import { AuthContext } from "../../provider/AuthProvider";
import InfoCard from "../Tasks/InfoCard";
import InfoCardPet from "./Add Pets/InfoCardPet";
import { PreviewLayout } from "./Add Pets/InfoCardPetGender";

function AddPetScreen(props) {

  const { username} = useContext(AuthContext);
  const navigation = useNavigation();
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // New pet variables
  const [name,setName] = useState("")
  const [gender,setGender] = useState("")
  const [species,setSpecies] = useState("")
  const [breed,setBreed] = useState("")
  const [birthday,setBirthday] = useState(new Date())
  const [weight,setWeight] = useState("")
  const [neutered,setNeutered] = useState("")
  const [microchipped,setMicrochipped] = useState("")
  const [microchipNo,setMicrochipNo] = useState("")
  const [notes,setNotes] = useState("")
  const [date, setDate] = useState(new Date());

  // Function to call addPet
  const confirmAdd = () =>{
    addPet(name,gender,species,breed,birthday,weight,neutered,microchipped,microchipNo,notes,username)
  }
    
  function formatAMPM(date) {
    var strTime = date.getDate() + " " + monthNames[date.getMonth()] + " " + date.getFullYear();
    return strTime;
  }

  Appearance.getColorScheme();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const currentColorScheme = useColorScheme();
  const showDatePicker = () => {
    console.log(currentColorScheme)
    setDatePickerVisibility(true);
  };
  
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  
  const handleConfirm = (date) => {
    //   console.warn("A date has been picked: " + date.getDate() + " " + monthNames[date.getMonth()] + " " + formatAMPM(date));
    setBirthday(date)  
    hideDatePicker();
  };

  // Pop up to confirm adding pet
  const createButtonAlert = () =>
  Alert.alert(
  // Title
  "Add new pet", 
  // Subtitle
  "Click to confirm.",
  [{ text: "Cancel", onPress: () => console.log('Cancel new pet'), style: "cancel"},
   { text: "Confirm", onPress: () => { confirmAdd(); navigation.goBack(); }}]
);
    
  return (
    <View style = { styles.mainContainer }>
      <KeyboardAwareScrollView showsVerticalScrollIndicator = { false }> 

        {/* Header: Back arrow, Title, Add pet button */}
        <View style = { styles.header }>
          
          {/* Back Button with navigates back to MainPetPage*/}
          <TouchableOpacity style = {{position:'absolute',left: 0}} onPress = {() => navigation.goBack()}>
            <Icon name = "arrow-back-outline" type = "ionicon"color = "#000"/>
          </TouchableOpacity>
                
          <Text style = { styles.headerText }>Add Pet</Text>
                
          {/* Confirm button which triggers pop up */}
          <TouchableOpacity style = {{position:'absolute',right: 0}} onPress = {() => createButtonAlert()}>
            <Text style = {{fontFamily: "Sofia-Pro-Regular"}}>Confirm</Text>
          </TouchableOpacity>

        </View>
            
        {/* Pet Information */}
        <View style = {styles.infoContainer}>
          
          <InfoCardPet stateChange = {(text)=> setName(text)} title = "Name" input = "Enter name"/>
          
          {/* <InfoCardPet stateChange = {(text)=> setGender(text)} title = "Gender" input = {gender}/> */}
          <Text style = { styles.variableText }>Gender:</Text>
          <PreviewLayout values = {["Male", "Female"]} selectedValue = {gender} setSelectedValue = {setGender}/>
          
          <InfoCardPet stateChange = {(text)=> setSpecies(text)} title = "Species" input = "Select"/>
          
          <InfoCardPet stateChange = {(text)=> setBreed(text)} title = "Breed" input = "Select"/>
          
          <TouchableOpacity onPress = {()=>showDatePicker()}>
            <InfoCard title = "Birthday" input={formatAMPM(birthday)} />
          </TouchableOpacity>

          <InfoCardPet stateChange = {(text)=> setWeight(text)} title = "Weight" input = "Enter weight"/>
          
          <Text style = { styles.variableText }>Neutered:</Text>
          <PreviewLayout values = {["Yes", "No"]} selectedValue = {neutered} setSelectedValue = {setNeutered}/>
          {/* <InfoCardPet stateChange = {(text)=> setNeutered(text)} title = "Neutered" input = "No"/> */}
          
          <Text style = { styles.variableText }>Microchipped:</Text>
          <PreviewLayout values = {["Yes", "No"]} selectedValue = {microchipped} setSelectedValue = {setMicrochipped}/>
          {/* <InfoCardPet stateChange = {(text)=> setMicrochipped(text)} title = "Microchipped" input = "Yes"/> */}
                    
                    
        </View>
                
        {/* Notes */}
        <View style = {styles.notesContainer} >
          <Text style = {styles.noteText}>??? Notes</Text>
          <View style = {{borderBottomColor: "black", borderBottomWidth: 1,}}/>
          <TouchableOpacity>
            <TextInput
              style = { styles.text }
              placeholder = "Enter some notes about this task!"
              placeholderTextColor = {'#C4C4C4'}
              onChangeText={(text) => setNotes(text)}
            />
          </TouchableOpacity>
        </View>
        
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          display = 'spinner'
          isDarkModeEnabled = {currentColorScheme == 'dark'}
        />
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  
  mainContainer: {
      width:              "100%",
      backgroundColor:    "white",
      paddingLeft:        30,
      paddingRight:       30,
      paddingTop:         60,
    },

    infoContainer: {
        flexDirection:    "column",
        // alignItems:     "center",
        width:            "100%",
        justifyContent:   "space-between",
    },

    header: {
      width:              '100%',
      justifyContent:     'center',
      flexDirection:      'row',
      alignItems:         'center',
      marginBottom:       20
    },

    headerText: {
      fontSize:           36,
      fontFamily:         "Recoleta-Regular",
    },

    headingText: {
        fontSize:           15,
        fontFamily:         "Recoleta-Regular",
        paddingBottom:      5,
        paddingTop:         20,
    },

    scrollView: {
      backgroundColor:      "white",
      marginHorizontal:     20,
    },

    notesContainer: {
      width:                "100%",
      height:               "100%",
      backgroundColor:      "white",
      paddingTop:           5,
      marginBottom:         50,
    },

  noteText: {
    fontFamily:             "Recoleta-Regular",
    color:                  "black",
    fontSize:               15,
    justifyContent:         "flex-start",
    paddingBottom:          5,
  },

  text: {
    fontFamily:             "Sofia-Pro-Regular",
    color:                  "black",
    fontSize:               15,
    justifyContent:         "flex-start",
    paddingTop:             15,
  },

  variableText: {
    fontFamily:             "Sofia-Pro-Regular",
    color:                  "black",
    fontSize:               15,
    marginBottom:           20,
  }

});

export default AddPetScreen;
