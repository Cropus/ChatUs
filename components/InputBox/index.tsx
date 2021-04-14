import React, {useState} from "react";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./style";
import {Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";

const InputBox = () => {

    const [message, setMessage] = useState("");
    const onMicrophonePress = () => {
        console.warn("Sound");
    }
    const onSendPress = () => {
        console.warn("Text");
        setMessage("");
    }
    const onPress = () => {
        if (!message) {
            onMicrophonePress();
        } else {
            onSendPress();
        }
    }

    return (
    <View style={styles.container}>
        <View style={styles.mainContainer}>
            <FontAwesome5 name="laugh-beam" size={30} color="grey" />
            <TextInput
                placeholder={"Type a message"}
                style={styles.textInput}
                multiline
                numberOfLines={2}
                value={message}
                onChangeText={setMessage}
            />
            <Entypo name="attachment" size={30} color="grey" style={styles.icon}/>
            {!message && <Fontisto name="camera" size={30} color="grey" style={styles.icon}/>}
        </View>
        <TouchableOpacity onPress={onPress}>
            <View style={styles.buttonContainer}>
                {!message
                    ? <MaterialCommunityIcons name="microphone" size={30} color="white" />
                    : <MaterialIcons name="send" size={30} color="white" />}
            </View>
        </TouchableOpacity>
    </View>
    )
}

export default InputBox;