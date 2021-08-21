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

    const { username } = useContext(AuthContext);
    const navigation = useNavigation();
    const [pets, setPets] = useState([]);
    const [date, setDate] = useState(new Date());
    const [notes, setNotes] = useState("");
    const [isLoading,setisLoading] = useState(true)
    const [isPressed, setIsPressed] = useState(false)
    const [selectedPets, setSelectedPets] =  useState([])
    const [repeat, setrepeat] = useState("Single")
    const [imageUrl, setImageUrl] = useState("https://images.unsplash.com/photo-1607434472257-d9f8e57a643d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80")
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

    Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
    }

    Appearance.getColorScheme();
    useEffect(() => {
        getPets(username).then((response) => {
            setPets(response)
            setisLoading(false)
            
        });
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
        for (let i = 0; i < 1; i++){
            insertTaskByUser(props.route.params.type,date.addDays(i),username,notes,selectedPets)
        }
        
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
        isLoading? <Text>isLoading</Text>:
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
                        color = "black"/>
                </TouchableOpacity>

                {/* Add Task Icon */}
                <TouchableOpacity style = {styles.addButton} onPress={()=>createButtonAlert()} >
                    <Text style = {{color:'black', fontFamily: 'Sofia-Pro-Regular', fontSize: 15 }}>Add</Text>
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

                    
                    {/* <TouchableOpacity>
                        <InfoCard title='🐾  Who' input = {selectedPet}></InfoCard>
                    </TouchableOpacity> */}

                    <View style = {styles.petsContainer}>
                        <Text style = {{fontFamily:'Sofia-Pro-Regular',fontSize:15,marginBottom:10}}>
                        🐾 Pets
                        </Text>
                        <View style = {{flexDirection:'row',width:'100%',justifyContent:'space-between',paddingHorizontal:15}}>
                        {/* <View style = {{alignItems:'center'}}>
                            <View style = {styles.petCard}></View>
                        </View> */}
                                                {/* {todayTasks.map((item,index) =>{
                            console.log(item)
                            return(<TaskCard taskName = { item.description }  cardImageUrl = { item.cardImageUrl } time = { item.TaskTime.toDate() }key = {index} image = {item.profilePics} isToday = {true}/>)})} */}
                        <View>
                        {pets.map((item,index) => {
                            if (index%2==0){
                                return(
                                <TouchableOpacity style = {selectedPets.includes(item.data().name)?styles.petCardPressed : styles.petCard} key  = {item.id} onPress = {()=>{
                                    console.log(selectedPets.includes(item.data().name))
                                    var idx = selectedPets.indexOf(item.data().name);
                                    let array = [...selectedPets]
                                    if (idx !== -1) {
                                        array.splice(idx, 1);
                                    }
                                    else{
                                        array.push(item.data().name)
                                    }
                                    setSelectedPets(array)

                                }}>
                                    <Image style = {{height:35,width:35,borderRadius:17.5}} source ={{uri:item.data().photos[0]}} />
                                    <View style = {{flex:1,alignItems:'center'}}>
                                        <Text style = {{fontSize:15, fontFamily:"Sofia-Pro-Regular"}}>
                                            {item.data().name}
                                        </Text>
                                    </View>
                                    
                                </TouchableOpacity>

                                )
                            }
                        })

                        }
                        </View>
                        
                        <View style = {{alignItems:'center'}}>
                        {pets.map((item,index) => {
                            if (index%2!=0){
                                return(
                                    <TouchableOpacity style = {selectedPets.includes(item.data().name)?styles.petCardPressed : styles.petCard} key  = {item.id} onPress = {()=>{
                                        console.log(selectedPets.includes(item.data().name))
                                        var idx = selectedPets.indexOf(item.data().name);
                                        let array = [...selectedPets]
                                        if (idx !== -1) {
                                            array.splice(idx, 1);
                                        }
                                        else{
                                            array.push(item.data().name)
                                        }
                                        setSelectedPets(array)
    
                                    }}>
                                        <Image style = {{height:35,width:35,borderRadius:17.5}} source ={{uri:item.data().photos[0]}} />
                                        <View style = {{flex:1,alignItems:'center'}}>
                                            <Text style = {{fontSize:15, fontFamily:"Sofia-Pro-Regular"}}>
                                                {item.data().name}
                                            </Text>
                                        </View>
                                        
                                    </TouchableOpacity>
                                )
                            }
                        })

                        }
                        </View>

                        </View>
                        
                        
                    </View>

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
    petsContainer:{
        width:              '100%',
        paddingHorizontal:  30,
    },
    petCard:{
        borderRadius:       15,
        borderWidth:        1,
        borderColor:        "#E1AAAA",
        width:              136,
        height:             60,
        alignItems:         'center',
        flexDirection:      'row',
        paddingHorizontal:  10,
        justifyContent:     'space-between',
        marginBottom:       20
    },
    petCardPressed:{
        borderRadius:       15,
        borderWidth:        1,
        borderColor:        "white",
        width:              136,
        height:             60,
        alignItems:         'center',
        flexDirection:      'row',
        paddingHorizontal:  10,
        justifyContent:     'space-between',
        marginBottom:       20,
        backgroundColor:    '#E1AAAA'
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
