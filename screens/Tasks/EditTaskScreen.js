import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, ScrollView, View, TouchableOpacity, TextInput, Button, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon, Divider } from "react-native-elements";
import { insertTaskByUser } from "../../actions/TaskActions";
import { AuthContext } from "../../provider/AuthProvider";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import InfoCard from "./InfoCard";


function EditTaskScreen(props) {

    const navigation = useNavigation();

    // const [type, setType] = useState("")
//     const [date, setDate] = useState("")
//     const [time, setTime] = useState("")
//     const { username } = useContext(AuthContext)
//     useEffect(()=>{
//         console.log(props)
//     },[])
//     return (
//         <View style = { styles.mainContainer }>
//             <ScrollView showsVerticalScrollIndicator = { false }> 
//                 <View style = { styles.header }>
//                   <TouchableOpacity>
//                     <Icon
//                         name = "arrow-back-outline"
//                         type = "ionicon"
//                         color = "#000"
//                     />
//                   </TouchableOpacity>
//                 {/* <Text style = { styles.headerText }> Edit Task </Text> */}
//                 </View>
//                 <View style = {styles.infoContainer}>
//                     {/* <Text style = { styles.headingText }> Task Type </Text>  
//                     <TextInput placeholder = {props.route.params.type} style = { styles.input } onChangeText = {(text)=>setType(text)}/> */}

// <                   Text style = { styles.headingText }> Date </Text>  
//                     <TextInput placeholder = "Date" style = { styles.input } onChangeText = {(text)=>setDate(text)}/>

//                     <Text style = { styles.headingText }> Time </Text>  
//                     <TextInput placeholder = "Time" style = { styles.input } onChangeText = {(text)=>setTime(text)}/>

//                     <TouchableOpacity onPress ={()=>insertTaskByUser(date,time,username)}>
//                         <View style = {{backgroundColor:'grey',height:40,marginTop:30}} >
//                             <Text>Submit</Text>
//                         </View>
//                     </TouchableOpacity>
                    
//                 </View>
//             </ScrollView>
//         </View>
//     );
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
        <View style = {styles.primaryContainer}>
            <TouchableOpacity
                style = { styles.arrow }
                onPress = {() => navigation.goBack()}>
                <Icon name = "arrow-back-outline" type = "ionicon" color = "#000" />
            </TouchableOpacity>
            {/* <Image
                source = {require('./shower.jpg')}
                style = {{ width: "100%", height: 500, position: "absolute" }}
            /> */}
            <InfoCard title = 'Date' input = "Oct 4, 4:30 PM"></InfoCard>
            <Button title="Show Date Picker" onPress = { showDatePicker } />
            <DateTimePickerModal
                isVisible = { isDatePickerVisible }
                mode = "datetime"
                onConfirm = { handleConfirm }
                onCancel = { hideDatePicker }/>
        </View>
    );
}

const styles = StyleSheet.create({

    primaryContainer: {
      width:              "100%",
      backgroundColor:    "white",
      paddingLeft:        30,
      paddingRight:       30,
      paddingTop:         60,
    },

    secondaryContainer: {
        flexDirection:  "column",
        width:          "100%",
        justifyContent: "space-between",
    },

    header: {
        width:            '100%',
        alignItems:       'center',
        flexDirection:    'row',
    },

    headerText: {
      fontSize:         40,
      fontFamily:       "Recoleta-Regular",
      paddingLeft:      60,
    },

    title: {
        fontSize:           20,
        fontFamily:         "Recoleta-Regular",
        paddingBottom:      5,
        paddingTop:         20,
    },

    inputText: {
        fontFamily:         "Recoleta-Regular",
        color:              "grey",
        paddingLeft:        5,
    },

    input: {    
        borderColor:        "#E1AAAA",
        borderRadius:       15,
        borderWidth:     2,
        width:              "80%",
        fontSize:           20,
        paddingVertical:    10,
        fontFamily:         "Recoleta-Regular",
        color:              "grey",
        paddingLeft:        10,
    },

    scrollView: {
      backgroundColor:  "white",
      marginHorizontal:  20,
    },

    arrow: {
        position: "absolute",
        top: 40,
        left: 20,
    },
});
export default EditTaskScreen;
