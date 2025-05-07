import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
const CustomTextField = ({
    placeholder, value, onChangeText, secureTextEntry = false, style
}) => {
    return (
        <View style={StyleSheet.container}>
            <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            placeholderTextColor="#aaa"
            style ={[StyleSheet.input,style]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%'
    },
    input : {
        height:50,
        borderColor:'#ccc',
        borderWidth:1,
        borderRadius:10,
        paddingHorizontal:15,
        backgroundColor:'#fff'
    }
})

export default CustomTextField;
