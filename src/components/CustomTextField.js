import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
const CustomTextField = ({
    placeholder, value, onChangeText, secureTextEntry = false, style
}) => {
    return (
        <View style={styles.container}>
            <TextInput 
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            placeholderTextColor="#000"
            style ={[styles.input,style]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
    },
    input : {
        height:50,
        borderBottomWidth:1,
        borderBottomColor:'#000',
        borderRadius:10,
        paddingHorizontal:22,
        fontSize:14
    }
})

export default CustomTextField;
