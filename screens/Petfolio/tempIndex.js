import React from 'react';
import { Text,View } from 'react-native';

function TempProfile(props) {
    return (
        <View>
            <Text>
                {props.route.params.pet.name}
            </Text>
            <Text>
                {props.route.params.pet.birthdate}
            </Text>
        </View>
    );
}

export default TempProfile;