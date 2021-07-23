import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import InfoCard from "./InfoCard";
import { ScrollView } from "react-native";
import { TextInput } from "react-native";


function EditTaskScreen(props) {

    const navigation = useNavigation();

    const [type, setType] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [notes, setNotes] = useState("")
//     const { username } = useContext(AuthContext)
//     useEffect(()=>{
//         console.log(props)
//     },[])

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };

    return (
        <ScrollView showsVerticalScrollIndicator = { false }>
        <View style = { styles.primaryContainer }>
            <TouchableOpacity
                style = { styles.arrow }
                onPress = {() => navigation.goBack()}>
                <Icon name = "arrow-back-outline" type = "ionicon" color = "white" />
            </TouchableOpacity>
            <Image
                source = {require('./shower.jpg')}
                style = {{ width: "100%", height: 500, position: "absolute" }}
            />
            <View style = { styles.secondaryContainer }>  
                {/* Header */}
                <Text style = { styles.headerText }> Shower </Text>

            <TouchableOpacity>
                <InfoCard title = '🗓  Date' input = "Oct 4, 4:30 PM"></InfoCard>
            </TouchableOpacity>

            <TouchableOpacity>
                <InfoCard title = '🔁  Repeat' input = "Daily"></InfoCard>
            </TouchableOpacity>

            <TouchableOpacity>
                <InfoCard title = '🐾  Who' input = "Hiro"></InfoCard>
            </TouchableOpacity>

            {/* Notes */}
            <View style = { styles.notesContainer }>
                <Text style = { styles.noteText }>✏ Notes</Text>
                <View style = {{ borderBottomColor: 'black', borderBottomWidth: 1 }} />
                <TouchableOpacity>
                    <TextInput style = { styles.text } placeholder = "Enter some notes about this task!" onChangeText = {(text)=>setNotes(text)}/>  
                </TouchableOpacity>           
            </View>

            <Button title="Show Date Picker" onPress = { showDatePicker } />
            <DateTimePickerModal
                isVisible = { isDatePickerVisible }
                mode = "datetime"
                onConfirm = { handleConfirm }
                onCancel = { hideDatePicker }/>
            </View>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    primaryContainer: {
        width:              "100%",
        backgroundColor:    "white",
        paddingTop:         380,
    },

    secondaryContainer: {
        width:              "100%",
        height:             "100%",
        borderRadius:       50,
        alignItems:         "center",
        backgroundColor:    "white",
        padding:            30,
    },

    notesContainer: {
        width:              "100%",
        height:             "100%",
        backgroundColor:    "white",
        paddingTop:         5,
    },

    headerText: {
        fontSize:           40,
        fontFamily:         "Recoleta-Regular",
        paddingTop:         5,
        paddingBottom:      25,
    },

    noteText: {
        fontFamily:         "Recoleta-Regular",
        color:              "black",
        fontSize:           18,
        justifyContent:     "flex-start",
        paddingBottom:      5,
    },

    input: {    
        borderColor:        "#E1AAAA",
        borderRadius:       15,
        borderWidth:        2,
        width:              "80%",
        fontSize:           20,
        paddingVertical:    10,
        fontFamily:         "Recoleta-Regular",
        color:              "grey",
        paddingLeft:        10,
    },

    text: {
        fontFamily:         "Sofia-Pro-Regular",
        color:              "black",
        fontSize:           15,
        justifyContent:     "flex-start",
        paddingTop:         15,
    },

    arrow: {
        position:       "absolute",
        top:            60,
        left:           30,
        zIndex:         1,
    },
});
export default EditTaskScreen;
