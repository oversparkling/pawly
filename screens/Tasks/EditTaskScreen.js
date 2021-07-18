import React, { useState, useEffect } from "react";
import { StyleSheet, Text, ScrollView, View, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon, Divider } from "react-native-elements";
import { insertTaskByUser } from "../../actions/TaskActions";

function EditTaskScreen(props) {
    const [type,setType] = useState("")
    const [time,setTime] = useState("")
    useEffect(()=>{
        console.log(props)
    },[])
    return (
        <View style = { styles.mainContainer }>
            <ScrollView showsVerticalScrollIndicator = { false }> 
                <View style = { styles.header }>
                  <TouchableOpacity>
                    <Icon
                        name = "arrow-back-outline"
                        type = "ionicon"
                        color = "#000"
                    />
                  </TouchableOpacity>
                <Text style = { styles.headerText }> Add Tasks </Text>
                </View>
                <View style = {styles.infoContainer}>
                    <Text style = { styles.headingText }> Task Type </Text>  
                    <TextInput placeholder = {props.route.params.type} style = { styles.input } onChangeText = {(text)=>setType(text)}/>

                    <Text style = { styles.headingText }> Time </Text>  
                    <TextInput placeholder = "Time" style = { styles.input } onChangeText = {(text)=>setTime(text)}/>

                    <TouchableOpacity onPress ={()=>insertTaskByUser(type,time)}>
                        <View style = {{backgroundColor:'grey',height:40,marginTop:30}} >
                            <Text>Submit</Text>
                        </View>
                    </TouchableOpacity>
                    
                </View>
            </ScrollView>
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
        flexDirection:  "column",
        // alignItems:     "center",
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

    headingText: {
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
});
export default EditTaskScreen;
