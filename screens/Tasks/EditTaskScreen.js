import React, { useState, useEffect, useContext,useRef } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Button,
    Image,

    KeyboardAvoidingView
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

function EditTaskScreen(props) {
    const { setIsLoggedIn, isLoggedIn, username } = useContext(AuthContext);
    const navigation = useNavigation();
    const [pets, setPets] = useState([]);
    const [selectedPet, setSelectedPet] = useState("");
    const [value, setValue] = useState(null);
    const [type, setType] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [notes, setNotes] = useState("");
    const [imageUrl, setImageUrl] = useState("")

    //     const { username } = useContext(AuthContext)
    //     useEffect(()=>{
    //         console.log(props)
    //     },[])
    useEffect(() => {
        getPets().then((response) => setPets(response));
        console.log(pets);
        getTaskByType(props.route.params.type).then((response) => setImageUrl(response[1]))
    }, []);
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
    
    const confirmAddTask = () =>{
        insertTaskByUser(props.route.params.type,"4:30",username)
    }

    return (
        
        <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: 'center',backgroundColor:'white'}} behavior="padding" enabled  keyboardVerticalOffset={20} >


        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
             
            <View style={styles.primaryContainer}>
                
                <TouchableOpacity
                    style={styles.arrow}
                    onPress={() => navigation.goBack()}
                >
                    <Icon
                        name="arrow-back-outline"
                        type="ionicon"
                        color="white"
                    />
                </TouchableOpacity>
                <TouchableOpacity style = {styles.addButton} onPress = {()=>confirmAddTask()}>
                    <Text style = {{color:'blue'}}>Add</Text>
                </TouchableOpacity>
                <Image
                    source={{uri:imageUrl }}
                    style={{ width: "100%", height: 500, position: "absolute" }}
                />
                <View style={styles.secondaryContainer}>
                    {/* Header */}
                    <View style = {{zIndex:5}}>
                    <Button title="Show Date Picker" onPress={showDatePicker} />
                    <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      
                </View>
    
                    <Text style={styles.headerText}>
                        {props.route.params.type}{" "}
                    </Text>

                    <TouchableOpacity >
                        <InfoCard
                            title="🗓  Date"
                            input="Oct 4, 4:30 PM"
                        ></InfoCard>
                    </TouchableOpacity>
                   
                    <TouchableOpacity>
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
        width: "100%",
        backgroundColor: "white",
        paddingTop: 380,
    },

    secondaryContainer: {
        width: "100%",
        height: "100%",
        borderRadius: 50,
        alignItems: "center",
        backgroundColor: "white",
        // padding: 30,
    },

    notesContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        paddingTop: 5,
        padding:30
    },

    headerText: {
        fontSize: 40,
        fontFamily: "Recoleta-Regular",
        paddingTop: 5,
        paddingBottom: 25,
    },

    noteText: {
        fontFamily: "Recoleta-Regular",
        color: "black",
        fontSize: 18,
        justifyContent: "flex-start",
        paddingBottom: 5,
    },

    input: {
        borderColor: "#E1AAAA",
        borderRadius: 15,
        borderWidth: 2,
        width: "80%",
        fontSize: 20,
        paddingVertical: 10,
        fontFamily: "Recoleta-Regular",
        color: "grey",
        paddingLeft: 10,
    },

    text: {
        fontFamily: "Sofia-Pro-Regular",
        color: "black",
        fontSize: 15,
        justifyContent: "flex-start",
        paddingTop: 15,
    },

    arrow: {
        position: "absolute",
        top: 60,
        left: 30,
        zIndex: 1,
    },

    addButton:{
        position: "absolute",
        top: 60,
        right: 30,
        zIndex: 1,
    }
});
export default EditTaskScreen;
