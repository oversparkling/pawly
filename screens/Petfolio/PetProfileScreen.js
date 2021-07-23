import React, { useState, useEffect } from "react";
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
import AttributeCard from "../../components/AttributeCard";
import Swiper from "react-native-swiper";
import { Icon, Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { getPetDetails } from "../../actions/PetActions";

function PetProfileScreen(props) {
    const navigation = useNavigation();
    const [PetImages, setPetImages] = useState([])
    useEffect(()=>{
        console.log(props)
        getPetDetails(props.route.params.id).then(response => setPetImages(response))
    },[])
    return (
        <>
            {/* <ImageBackground source = {require("../assets/cat-profile.png")} style = {{width:'100%',height:500}}>
                <Text>hello</Text>
            </ImageBackground> */}
            <Swiper
                autoplay={true}
                showsPagination={false}
                style={{ height: 500 }}
            >

                {PetImages.map((item) => {
                    return(
                    <Image key = {item.url} style={styles.image} source={{ uri: item.url }} />)
                })}
            </Swiper>
            {/* <Image
                source={require("../assets/cat-profile.png")}
                style={{ width: "100%", height: 500, position: "absolute" }}
            /> */}
            <TouchableOpacity
                style = { styles.arrow }
                onPress = {() => navigation.goBack()}>
                <Icon name = "arrow-back-outline" type = "ionicon" color = "#000" />
            </TouchableOpacity>
            <View style = { styles.informationContainer }>
                <Text style={styles.petName}>{props.route.params.name}</Text>
                <Text style={styles.petDescription}>{props.route.params.description}</Text>
                <View style={styles.cardContainer}>
                    <AttributeCard type = {"Age"} value = {props.route.params.age}/>
                    <AttributeCard type = {"Weight"} value = {props.route.params.weight}/>
                    <AttributeCard type = {"Gender"} value = {props.route.params.gender}/>
                </View>
                <View style={{ width: "100%" }}>
                    <Text style={styles.document}>Documents</Text>
                    <TouchableOpacity style={styles.vaccination}>
                        <Text
                            style={{
                                fontFamily: "Sofia-Pro-Regular",
                                fontSize: 15,
                            }}
                        >
                            Vaccinations
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({

    informationContainer: {
        position:           "absolute",
        top:                381,
        width:              "100%",
        borderRadius:       35,
        alignItems:         "center",
        backgroundColor:    "white",
        padding:            30,
    },

    image: {
        width: "100%",
        height: 500,
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
        width: "100%",
        justifyContent: "space-between",
    },

    document: {
        marginTop: 10,
        fontSize: 15,
        fontFamily: "Recoleta-Regular",
    },
    
    vaccination: {
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 82,
        borderWidth: 1,
        borderRadius: 10,
    },

    arrow: {
        position: "absolute",
        top: 40,
        left: 20,
    },
});

export default PetProfileScreen;
