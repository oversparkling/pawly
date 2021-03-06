import React from 'react'
import { Dimensions, Image, StyleSheet, View } from 'react-native'

const { width, height } = Dimensions.get('window')


const CarouselItem = ({ item }) => {
    return (
        <View style = { styles.cardView }>
            <View style = {styles.shadow}>
                <Image style={styles.image} source={{ uri: item }} />
            </View>
            {/* <View style={styles.textView}>
                <Text style={styles.itemTitle}> {item.title}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        flex: 1,
        width: width - 20,
        // width: 318,
        // height: height / 3,
        height: 318,
        backgroundColor: 'white',
        // marginLeft: 40,
        // marginLeft: 20,
        margin:10,
        borderRadius: 15,
        
        elevation: 5,
        alignItems:'center'
        // alignContent: 'center',
    },

    textView: {
        position: 'absolute',
        bottom: 10,
        margin: 10,
        left: 5,
    },
    shadow:{
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },

    image: {
        width: 318,
        height: 318,
        borderRadius: 15,
    },
    
    itemTitle: {
        color: 'white',
        fontSize: 22,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        marginBottom: 5,
        fontWeight: "bold",
        elevation: 5
    },
    itemDescription: {
        color: 'white',
        fontSize: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5
    }
})

export default CarouselItem