import React, { useEffect,useContext,useState } from 'react';
import { ImageBackground, View, Text, StyleSheet, Image } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { onChange } from 'react-native-reanimated';
import { getPetProfilePicture } from '../actions/PetActions';
import { AuthContext } from '../provider/AuthProvider';

function TaskCard(props) {

    const {username} = useContext(AuthContext)
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const [duration, setduration] = useState()
      function formatAMPM(date) {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0' + minutes : minutes;
      var strTime = date.getDate() + " " + monthNames[date.getMonth()] + " "  + hours + ':' + minutes + ' ' + ampm;
      
      return strTime;
    }
    useEffect(()=>{
        if(props.isToday){
            let diff = Date.now() - new Date(props.time);
            
            if (diff > 0){
                //Less than an hour
                Math.abs()
                if (Math.floor(diff/3600000 == 0)){
                    let minutes = Math.floor(diff/60000)
                    setduration(Math.abs(minutes) + " min ago")
                }
                else{
                    let hours = Math.floor(diff/3600000);
                    setduration(Math.abs(hours) + " hours ago")
                }
            }
            else{
                if (Math.floor(diff/3600000 == 0)){
                    let minutes = Math.floor(diff/60000)
                    setduration("In " + Math.abs(minutes) + " min")
                }
                else{
                    let hours = Math.floor(diff/3600000);
                    setduration("In " + Math.abs(hours) + " hours")
                }
            }
        }
    })


    return (
        <View style = { styles.container }>
            {props.isToday && 
            <View style = {{alignSelf:'flex-end'}}>
                <Text style = {{fontFamily:'Sofia-Pro-Regular',fontSize:12,color:'#9B9999'}}>{duration}</Text>
            </View>
                }
            <View >
                <Image source = {{uri: props.cardImageUrl}} style = { styles.imageContainer } />
                <Text style = {styles.dateTimeText}>{formatAMPM(props.time)}</Text>
                <Text style = {styles.taskText} >{props.taskName}</Text>
                <View style = {styles.profileImageContainer}>
                    {props.image.length!=0 && 
                            props.image.map((item,index) =>{
                                return(
                                    <Image style = {styles.profileImage} source = {{uri:item}} key = {index}/>
                                )
                            })
                    }
                    {/* <Image source = {require("../assets/cat-profile.png")} style = {styles.profileImage} />   */}
                </View>       
            </View>
        </View>
        
    )
        //     <Text style = {{alignSelf:'flex-end', fontFamily:"Recoleta-Regular"}}>{props.hoursAgo}</Text>
        //     <View style = {styles.container}>
        //     <Image style = {styles.imageContainer} source = {{uri: props.cardImageUrl}}/>
        //     <View style = {{flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:10}}>
        //     <View style = {styles.textInfo}>
        //         <Text style = {styles.headerText}>{props.taskName}</Text>
        //         <View style = {styles.timeOwner}>
        //             {/* <Image style = {styles.profileImage} source = {require("../assets/pet1.jpg")}/> */}
                    
        //                 {/* typeof props.pet === 'undefined'){
        //                     props.pets.map((item,index) =>{
        //                         return(
        //                             <Image style = {styles.profileImage} source = {{uri:item.petUrl}} key = {index}/>
        //                         )
        //                     })
                            
        //                 } */}
        //                 { props.pets  && 
        //                     props.pets.map((item,index) =>{
        //                         return(
        //                             <Image style = {styles.profileImage} source = {{uri:item.petUrl}} key = {index}/>
        //                         )
        //                     })
        //                 }
                    
                    
        //             <Text style = {{color:'white', marginLeft:15}}>|</Text>
        //             <Text style = {styles.time}>{props.time}</Text>
        //         </View>
        //     </View>
        //     </View>
        // </View> 

        

}

const styles = StyleSheet.create({

    container: {
        flexDirection:      'column',
        width:              326,
        height:             200,
        marginBottom:       23,
    },

    imageContainer:{
        width:              '100%',
        height:             '100%',
        borderRadius:       15,
        borderWidth:        0.5,
        borderColor:        'white',
        resizeMode:         'cover',
    },

    dateTimeText: {
        fontSize:           12,
        fontFamily:         "Sofia-Pro-Regular",
        color:              "white",
        paddingLeft:        20,
        textTransform:      'uppercase',
        zIndex:             5,
        position:           'absolute',
        bottom:             50,
    },

    taskText: {
        fontSize:           25,
        fontFamily:         "Recoleta-Regular",
        color:              "white",
        paddingLeft:        20,
        zIndex:             5,
        position:           'absolute',
        bottom:             15,
    },

    timeOwner:{
        flexDirection:'row'
    },

    profileImage:{
        height: 27,
        width: 27,
        borderRadius: 13.5,
        marginRight:-5,
        
    },
    profileImageContainer:{
        position:'absolute',
        bottom:5,
        right:0,
        width: 100,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
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