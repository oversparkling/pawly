import React, { useEffect } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { Checkbox } from 'react-native-paper';

function TaskCard(props) {
    const [checked, setChecked] = React.useState(false);
    const timeString = ""
    

    return (
        <View>
            <Text style = {{alignSelf:'flex-end', fontFamily:"Recoleta-Regular"}}>{props.hoursAgo}</Text>
            <View style = {styles.container}>
            <Image style = {styles.imageContainer} source = {{uri: props.cardImageUrl}}/>
            <View style = {{flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:10}}>
            <View style = {styles.textInfo}>
                <Text style = {styles.headerText}>{props.taskName}</Text>
                <View style = {styles.timeOwner}>
                    {/* <Image style = {styles.profileImage} source = {require("../assets/pet1.jpg")}/> */}
                    
                        {/* typeof props.pet === 'undefined'){
                            props.pets.map((item,index) =>{
                                return(
                                    <Image style = {styles.profileImage} source = {{uri:item.petUrl}} key = {index}/>
                                )
                            })
                            
                        } */}
                        { props.pets  && 
                            props.pets.map((item,index) =>{
                                return(
                                    <Image style = {styles.profileImage} source = {{uri:item.petUrl}} key = {index}/>
                                )
                            })
                        }
                    
                    
                    <Text style = {{color:'white', marginLeft:15}}>|</Text>
                    <Text style = {styles.time}>{props.time}</Text>
                </View>
            </View>
            </View>
        </View> 
        </View>
        
    )
}

const styles = StyleSheet.create({

    container:{
        borderRadius:       15,
        flexDirection:      'column',
        backgroundColor:    '#C5CCA6',
        width:              326,
        marginBottom:       30,
    },

    textInfo:{

    },

    imageContainer:{
        height:             222,
        width:              326,
        borderRadius:       14,
        borderWidth:        0.5,
        resizeMode:         'contain',
    },

    timeOwner:{
        flexDirection:'row'
    },

    profileImage:{
        height: 22,
        width: 22,
        borderRadius: 11,
        marginRight:5
    },
    
    time:{
        marginLeft:15,
        fontFamily:"Recoleta-Regular",
        color:'white',
        fontSize:15
    },
    
    headerText:{
        fontSize:25,
        fontFamily:"Recoleta-Regular",
        color:'white'
    },
    
}) 

export default TaskCard;