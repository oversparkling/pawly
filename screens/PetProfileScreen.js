import React from "react";
import {
    View,
    Text,
    SafeAreaView,
    ImageBackground,
    Image,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
} from "react-native";
import AttributeCard from "../components/AttributeCard";
import Swiper from 'react-native-swiper'

function PetProfileScreen(props) {
    return (
        <>
            {/* <ImageBackground source = {require("../assets/cat-profile.png")} style = {{width:'100%',height:500}}>
                <Text>hello</Text>
            </ImageBackground> */}
            <Swiper autoplay = {true} showsPagination = {false} style={{height: 500}}>
                <Image
                    source={require("../assets/cat-profile.png")}
                    style={{ width: "100%", height: 500 }}
                />
                <Image
                    source={require("../assets/pet1.jpg")}
                    style={{ width: "100%", height: 500 }}
                />
            </Swiper>
            {/* <Image
                source={require("../assets/cat-profile.png")}
                style={{ width: "100%", height: 500, position: "absolute" }}
            /> */}
            <View style={styles.informationContainer}>
                <Text style={styles.petName}>Hiro</Text>
                <Text style={styles.petDescription}>The sweetest ragdoll</Text>
                <View style={styles.cardContainer}>
                    <AttributeCard />
                    <AttributeCard />
                    <AttributeCard />
                </View>
                <View style = {{width:'100%'}}>
                    <Text style = {styles.document}>Documents</Text>
                    <TouchableOpacity style = {styles.vaccination}>
                        <Text style = {{fontFamily:'Sofia-Pro-Regular',fontSize:15}}>Vaccinations</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </>
    );
}

const styles = StyleSheet.create({
    informationContainer: {
        position:'absolute',
        top:381,
        width: "100%",
        borderRadius: 35,
        alignItems: "center",
        backgroundColor:'white',
        padding:30
    },
    petName: {
        fontSize: 35,
        fontFamily: "Recoleta-Regular",
    },
    petDescription: {
        fontFamily: "Sofia-Pro-Regular",
        fontSize: 15,
        marginBottom: 15,
    },
    cardContainer: {
        flexDirection: "row",
        width:'100%',
        justifyContent:'space-between'
    },
    document:{
        marginTop:10,
        fontSize:15,
        fontFamily:'Recoleta-Regular'
    },
    vaccination:{
        marginTop:10,
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        height:82,
        borderWidth:1,
        borderRadius:10
    }
});

export default PetProfileScreen;
