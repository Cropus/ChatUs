import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import styles from "./style";
import {useNavigation} from "@react-navigation/native";

const NewMessageButton = () => {
    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate('Contacts');
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
            <AntDesign name="contacts" size={30} color="white" />
            </TouchableOpacity>
        </View>
    )
}

export default NewMessageButton;