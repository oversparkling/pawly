import React from "react";
import { SafeAreaView,View, StyleSheet,TouchableOpacity, Text, ScrollView,Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Icon,Divider } from "react-native-elements";


function MainPetsScreen(props) {
    return (
        <SafeAreaView>
            <View style={styles.header}>
                <TouchableOpacity style ={{marginLeft:20}} >
                    <Icon
                        name="arrow-back-outline"
                        type="ionicon"
                        color="#000"
                    />
                </TouchableOpacity>
                <Text style = {{fontFamily:'Recoleta-Regular',fontSize:35,marginLeft:10}}>My Pets</Text>
            </View>
            <View>
                <View style = {styles.petContainer}>
                    <Text style = {{fontFamily:'Recoleta-Regular',fontSize:25}}>Hiro</Text>
                    <ScrollView horizontal={true}>
                        <Image source = {require("../assets/cat-profile.png")} style = {styles.image}/>
                        <Image source = {require("../assets/cat-profile2.png")} style = {styles.image}/>
                    </ScrollView>
                    <Divider style = {{width:306,marginTop:20}} width = {2}/>
                </View>
                
            </View>

            <View>
                <View style = {styles.petContainer}>
                    <Text style = {{fontFamily:'Recoleta-Regular',fontSize:25}}>Kai</Text>
                    <ScrollView horizontal={true}>
                        <Image source = {require("../assets/shiba-1.png")} style = {styles.image}/>
                        <Image source = {require("../assets/shiba-2.png")} style = {styles.image}/>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        alignItems:'center',
        flexDirection:'row',
        marginTop:10,
        marginBottom:20,
    },
    petContainer:{
        marginLeft:39,
        width:'100%',
        marginBottom:20

    },
    image:{
        height:250,
        width:250,
        marginRight:15,
        borderRadius:14
    }
});

export default MainPetsScreen;
