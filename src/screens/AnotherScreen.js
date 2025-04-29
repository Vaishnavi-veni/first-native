import React from "react";
import { View,Text } from "react-native";

const AnotherScreen = () => {
    return (
        <View style = {{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text style= {{fontSize:18, color:"blue"}}>"This is another screen</Text>
            </View>
    )
}

export default AnotherScreen;