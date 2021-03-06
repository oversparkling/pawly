import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { Icon } from "react-native-elements";
import Swiper from "react-native-swiper";
import AttributeCard from "../../components/AttributeCard";
import firebase from "../../config/firebaseConfig";

function PetProfileScreen(props) {
    const navigation = useNavigation();
    const [PetImages, setPetImages] = useState([]);

    useEffect(() => {
        const unsubscribe = firebase
            .firestore()
            .collection("pets")
            .doc(props.route.params.id)
            .onSnapshot((querySnapshot) => {
                let array = querySnapshot.data().photos;
                setPetImages(array);
            });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {/* Image Swiper: Displays pets images */}
            {PetImages && (
                <Swiper
                    autoplay={true}
                    showsPagination={false}
                    style={{ height: 420 }}
                >
                    {PetImages.map((item, index) => {
                        return (
                            <Image
                                key={index}
                                style={styles.image}
                                source={{ uri: item }}
                            />
                        );
                    })}
                </Swiper>
            )}

            {/* Back Arrow */}
            <TouchableOpacity
                style={styles.arrow}
                onPress={() => navigation.goBack()}
            >
                <Icon name="arrow-back-outline" type="ionicon" color="#000" />
            </TouchableOpacity>

            {/* Plus Button: Add images */}
            <TouchableOpacity
                style={styles.plus}
                // [????] Change to allow users to add photos of this pet
                onPress={() =>
                    navigation.navigate("AddPhotos", {
                        id: props.route.params.id,
                    })
                }
            >
                <Icon name="add-outline" type="ionicon" color="white" />
            </TouchableOpacity>

            {/* Information Section */}
            <View style={styles.informationContainer}>
                {/* Pet Introduction */}
                <Text style={styles.petName}>{props.route.params.name}</Text>
                <Text style={styles.petDescription}>
                    {props.route.params.description}
                </Text>

                {/* Pet Attributes */}
                <View style={styles.cardContainer}>
                    <AttributeCard
                        type={"Age"}
                        value={props.route.params.age}
                    />
                    <AttributeCard
                        type={"Weight"}
                        value={props.route.params.weight}
                    />
                    <AttributeCard
                        type={"Gender"}
                        value={props.route.params.gender}
                    />
                </View>

                {/* Pet Documents */}
                <View style={{ width: "100%" }}>
                    <Text style={styles.header}>???? Information</Text>

                    {/* Grooming:
                        - Type of grooming session: nails, shower, ears, teeth, deshredding
                        - When grooming occured
                        - Where grooming took place: Home, Hey Good Cat
                        - Extra notes:
                    */}
                    <TouchableOpacity style={styles.documentContainer}>
                        <Text style={styles.documentText}>Grooming</Text>
                    </TouchableOpacity>

                    {/* Vaccinations: medical book records 
                        - Add type of vaccination
                        - When vaccination occured
                        - Where it was adminstered ie. Home, Advanced Pet Care
                        - Extra notes:
                    */}
                    <TouchableOpacity style={styles.documentContainer}>
                        <Text style={styles.documentText}>Vaccinations</Text>
                    </TouchableOpacity>

                    {/* Fleas & Ticks:
                        - When treatment occured
                        - Where it was adminstered ie. Home, Advanced Pet Care
                        - Extra notes:
                    */}
                    <TouchableOpacity style={styles.documentContainer}>
                        <Text style={styles.documentText}>Fleas and Ticks</Text>
                    </TouchableOpacity>
                </View>
                {/* <View style = {{height:381}}></View> */}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    informationContainer: {
        // position:           "absolute",
        // top:                381,
        marginTop: -40,
        width: "100%",
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        alignItems: "center",
        backgroundColor: "white",
        padding: 30,
        // justifyContent:     'center',
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
        fontSize: 16,
        marginBottom: 15,
    },

    cardContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
    },

    header: {
        marginTop: 15,
        fontSize: 20,
        fontFamily: "Recoleta-Regular",
        marginBottom: 10,
    },

    documentText: {
        fontFamily: "Sofia-Pro-Regular",
        fontSize: 16,
    },

    documentContainer: {
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 80,
        borderWidth: 1,
        borderRadius: 15,
        marginBottom: 10,
    },

    arrow: {
        position: "absolute",
        top: 55,
        left: 25,
    },

    plus: {
        position: "absolute",
        top: 55,
        right: 25,
    },

    scrollview: {
        backgroundColor: "white",
        marginHorizontal: 20,
    },
});

export default PetProfileScreen;
