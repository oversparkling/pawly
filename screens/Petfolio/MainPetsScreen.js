import React, { useState, useEffect,useContext } from "react";
import { View, StyleSheet,TouchableOpacity, Text, ScrollView, Image, TouchableNativeFeedback } from "react-native";
import { Icon, Divider } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';
import { petfolioData } from './petfolioData'
import { getPets } from "../../actions/PetActions";
import firebase from "../../firebaseConfig"
import Carousel from './Carousel'
import { AuthContext } from "../../provider/AuthProvider";


function MainPetsScreen(props) {
    const navigation = useNavigation();
    const {username} = useContext(AuthContext);
    const [Pets, setPets] = useState([]);
    useEffect(()=>{
        console.log(username)
        getPets(username).then(response => setPets(response))
        
        
        
     
    },[])
    return (
    
        <View style = { styles.container }>
            <ScrollView showsVerticalScrollIndicator = { false } style = { styles.scrollView }>
                <View style = { styles.header }>
                    <Text style = { styles.headerText }> My Pets </Text>
                    <TouchableOpacity style = { styles.plus } onPress= {()=>navigation.navigate("AddPets")} >
                    <Icon
                        name = "plus"
                        type = "antdesign"
                        color = "white"
                    />
                  </TouchableOpacity>
                </View> 
                <View style = { styles.body }>
                    {/* navigation.navigate("PetProfileScreen") */}
                    {Pets.map((item) => {
                        console.log(item.id)
                        return (
                            <View key = {item.id}>
                                <TouchableOpacity onPress = {()=> navigation.navigate('PetProfileScreen',{id:item.id, age:item.data().age, weight:item.data().weight,gender:item.data().gender, name: item.data().name, description: item.data().description} ) }>
                                    <Text style = { styles.petText }> {item.data().name} </Text>
                                    </TouchableOpacity>
                                <View><Carousel data = {petfolioData} id = {item.id}/></View>
                            </View>
                        )
                    })}
                
                    
                      {/* <TouchableOpacity onPress = {()=> navigation.navigate("PetProfileScreen")}>
                         <Text style = { styles.petText }> Hiro </Text>
                     </TouchableOpacity>
                     <View><Carousel data = {petfolioData}/></View>  */}

                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        height:             "100%",
        width:              "100%",
        backgroundColor:    "#E1AAAA",
    },

    header: {
        width:              '100%',
        alignItems:         'center',
        flexDirection:      'row',
        paddingBottom:      25,
        paddingTop:         60,
        backgroundColor:    "#E1AAAA"
    },

    body: {
        borderRadius:       35,
        backgroundColor:    'white',
        height:             "100%",
    },

    headerText: {
        fontSize:           40,
        fontFamily:         "Recoleta-Regular",
        paddingLeft:        30,
        color:              'white',
    },

    petContainer: {
        paddingTop:         20,
        paddingBottom:      20,            
    },

    petText: {
        fontFamily:         'Recoleta-Regular',
        fontSize:           25,
        paddingTop:         30,
        paddingLeft:        30,
    },

    image: {
        height:             250,
        width:              250,
        marginRight:        15,
        borderRadius:       14,
    },

    plus: {
        paddingLeft:        150,
    },

});

export default MainPetsScreen;
