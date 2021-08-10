import React, { useState, useEffect, useContext,useRef } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Button,
    Image,
    KeyboardAvoidingView,
    Alert
} from "react-native";
import { useNavigation, useScrollToTop } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import InfoCard from "./InfoCard";
import { ScrollView } from "react-native";
import { TextInput } from "react-native";
import { getPets } from "../../actions/PetActions";
import { Picker } from "@react-native-picker/picker";
import DropdownMenu from 'react-native-dropdown-menu';
import { getTaskByType, insertTaskByUser } from "../../actions/TaskActions";
import { AuthContext } from "../../provider/AuthProvider";
import DateTimePicker from '@react-native-community/datetimepicker'
import { onChange } from "react-native-reanimated";
import { Platform } from "react-native";
import { Appearance, useColorScheme } from 'react-native-appearance';

function EditTaskScreen(props) {

    const { setIsLoggedIn, isLoggedIn, username } = useContext(AuthContext);
    const navigation = useNavigation();
    const [pets, setPets] = useState([]);
    const [selectedPet, setSelectedPet] = useState("");
    const [value, setValue] = useState(null);
    const [type, setType] = useState("");
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState("");
    const [notes, setNotes] = useState("");
    const [show,setShow] = useState(false)
    const [imageUrl, setImageUrl] = useState("")
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = date.getDate() + " " + monthNames[date.getMonth()] + " "  + hours + ':' + minutes + ' ' + ampm;
    
    return strTime;
  }

    Appearance.getColorScheme();
    useEffect(() => {
        getPets().then((response) => setPets(response));
        console.log(pets);
        getTaskByType(props.route.params.type).then((response) => setImageUrl(response[1]))
    }, []);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const currentColorScheme = useColorScheme();
    const showDatePicker = () => {
        // colorScheme = useColorScheme();
        console.log(currentColorScheme)
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
    //   console.warn("A date has been picked: " + date.getDate() + " " + monthNames[date.getMonth()] + " " + formatAMPM(date));
    setDate(date)  
    hideDatePicker();
    };

    const confirmAddTask = () =>{
        insertTaskByUser(props.route.params.type,date,username,notes,["Kai","Hiro","Nicholas","Chiara"])
    }

    // Pop up to confirm adding task
    const createButtonAlert = () =>
        Alert.alert(
        // Title
        "Add new task", 
        // Subtitle
        "Click to confirm.",
        [{ text: "Cancel", onPress: () => navigation.goBack(), style: "cancel"},
         { text: "Confirm", onPress: () => { confirmAddTask(); navigation.navigate('Home'); }}]
    );

    return (
        
        <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: 'center',backgroundColor:'white'}} behavior="padding" enabled  keyboardVerticalOffset={20} >
        <ScrollView showsVerticalScrollIndicator = {false} contentContainerStyle={{ flexGrow: 1 }}>
            <View style = {styles.primaryContainer}>
                {/* Back Arrow Icon */}
                <TouchableOpacity
                    style = {styles.arrow}
                    onPress ={() => navigation.goBack()}>
                    <Icon
                        name = "arrow-back-outline"
                        type = "ionicon"
                        color = "white"/>
                </TouchableOpacity>

                {/* Add Task Icon */}
                <TouchableOpacity style = {styles.addButton} onPress={()=>createButtonAlert()} >
                    <Text style = {{color:'white'}}>Add</Text>
                </TouchableOpacity>

                {/* Task Image */}
                <Image source={{uri:imageUrl }} style={{ width: "100%", height: 500, position: "absolute" }}/>
                
                <View style={styles.secondaryContainer}>
                    {/* Header */}
                    <Text style = {styles.headerText}>{props.route.params.type}{" "}</Text>

                    {/* Task Description */}

                    <View style = {{zIndex:5}}>
                    <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        display = 'spinner'
        isDarkModeEnabled = {currentColorScheme == 'dark'}
      />
      
                </View>

                    <TouchableOpacity onPress = {()=>showDatePicker()}>
                        <InfoCard
                            title="🗓  Date"
                            input={formatAMPM(date)}
                        ></InfoCard>
                    </TouchableOpacity>
                   
                    <TouchableOpacity >
                        <InfoCard title="🔁  Repeat" input="Daily"></InfoCard>
                    </TouchableOpacity>

                    
                    <TouchableOpacity>
                        <InfoCard title='🐾  Who' input = {selectedPet}></InfoCard>
                    </TouchableOpacity>

                    {/* Notes */}
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
                    
                </View>
                
            </View>
            
        </ScrollView>
        </KeyboardAvoidingView>
        
    );
}

const styles = StyleSheet.create({

    primaryContainer: {
        width:                  "100%",
        backgroundColor:        "white",
        paddingTop:             380,
    },

    secondaryContainer: {
        width:                  "100%",
        height:                 "100%",
        borderRadius:           50,
        alignItems:             "center",
        backgroundColor:        "white",
        paddingTop:             15,
    },

    notesContainer: {
        width:                  "100%",
        height:                 "100%",
        backgroundColor:        "white",
        paddingTop:             5,
        padding:                30
    },

    headerText: {
        fontSize:               34,
        fontFamily:             "Recoleta-Regular",
        paddingTop:             8,
        paddingBottom:          25,
    },

    noteText: {
        fontFamily:             "Recoleta-Regular",
        color:                  "black",
        fontSize:               18,
        justifyContent:         "flex-start",
        paddingBottom:          5,
    },

    input: {
        borderColor:        "#E1AAAA",
        borderRadius:       15,
        borderWidth:        2,
        width:              "80%",
        fontSize:           15,
        paddingVertical:    10,
        fontFamily:         "Recoleta-Regular",
        color:              "grey",
        paddingLeft:        10,
    },

    text: {
        fontFamily:             "Sofia-Pro-Regular",
        color:                  "black",
        fontSize:               15,
        justifyContent:         "flex-start",
        paddingTop:             15,
    },

    arrow: {
        position:           "absolute",
        top:                60,
        left:               30,
        zIndex:             1,
    },

    addButton:{
        position:           "absolute",
        top:                60,
        right:              30,
        zIndex:             1,
        fontFamily:         "Sofia-Pro-Regular",
    }
});
export default EditTaskScreen;
