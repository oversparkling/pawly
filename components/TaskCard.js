import React, { useEffect,useContext,useState } from 'react';
import { ImageBackground, View, Text, StyleSheet, Image } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { onChange } from 'react-native-reanimated';
import { getPetProfilePicture } from '../actions/PetActions';
import { AuthContext } from '../provider/AuthProvider';

function TaskCard(props) {

    const {username} = useContext(AuthContext)
    const [imageArray,setImageArray] = useState([])
    const [hasLoaded, setHasLoaded] = useState(false)
//     const unsubscribe = async() => {
                
//         props.pets.forEach(petname => {
//              getPetProfilePicture(petname,username).then(response => {
//                 console.log("In here")
//                 let imageResult = imageArray
//                 imageResult.push(response)
//                 setImageArray(imageResult)
//             })
//         });
//         console.log("In her1")
//         setHasLoaded(true)

    
// }


//     useEffect(()=>{
//         unsubscribe()
//     },[])


    return (
        <View style = { styles.container }>
            <Image source = {{uri: props.cardImageUrl}} style = { styles.imageContainer } />
                <Text style = {styles.dateTimeText}>{props.time}</Text>
                <Text style = {styles.taskText} >{props.taskName}</Text>
                <View style = {styles.profileImageContainer}>
                    {props.image.length!=0 && 
                            props.image.map((item,index) =>{
                                console.log("here")
                                return(
                                    <Image style = {styles.profileImage} source = {{uri:item}} key = {index}/>
                                )
                            })
                    }
                    {/* <Image source = {require("../assets/cat-profile.png")} style = {styles.profileImage} />   */}
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