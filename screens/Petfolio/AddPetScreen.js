import React, { useState,useContext,useEffect } from "react";
import { StyleSheet, Text, ScrollView, View, TouchableOpacity, TextInput, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon, Divider } from "react-native-elements";
import AttributeCard from "../../components/AttributeCard";
import InfoCard from "../Tasks/InfoCard";
import InfoCardPet from "./Add Pets/InfoCardPet";
import InfoCardPetGender, { PreviewLayout } from "./Add Pets/InfoCardPetGender";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { addPet } from "../../actions/PetActions";
import { AuthContext } from "../../provider/AuthProvider";
import { Appearance, useColorScheme } from 'react-native-appearance';
import DateTimePickerModal from "react-native-modal-datetime-picker";

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
            <Text>Confirm</Text>
          </TouchableOpacity>

        </View>
            
        {/* Pet Information */}
        <View style = {styles.infoContainer}>
          <InfoCardPet stateChange = {(text)=> setName(text)} title = "Name" input = "Hiro"/>
          <InfoCardPet stateChange = {(text)=> setGender(text)} title = "Gender" input = {gender}/>
          <PreviewLayout
            values = {["Male", "Female"]}
            selectedValue = {gender}
            setSelectedValue = {setGender}
        />
          <InfoCardPet stateChange = {(text)=> setSpecies(text)} title = "Species" input = "Dog"/>
          <InfoCardPet stateChange = {(text)=> setBreed(text)} title = "Breed" input = "Shiba Inu"/>
          <TouchableOpacity onPress = {()=>showDatePicker()}>
            <InfoCard title = "Birthday" input={formatAMPM(birthday)} />
          </TouchableOpacity>
          <InfoCardPet stateChange = {(text)=> setWeight(text)} title = "Weight" input = "9.8"/>
          <InfoCardPet stateChange = {(text)=> setNeutered(text)} title = "Neutered" input = "No"/>
          <InfoCardPet stateChange = {(text)=> setMicrochipped(text)} title = "Microchipped" input = "Yes"/>
                    
                    
                </View>
                <View style={styles.notesContainer} >
                        <Text style={styles.noteText}>✏ Notes</Text>
                        <View
                            style={{
                                borderBottomColor: "black",
                                borderBottomWidth: 1,
                            }}
                        />
                        <TouchableOpacity>
                            <TextInput
                                style={styles.text}
                                placeholder="Enter some notes about this task!"
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

});

export default AddPetScreen;
