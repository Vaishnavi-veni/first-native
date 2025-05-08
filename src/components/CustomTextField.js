import React, { useState } from "react";
import { TextInput, StyleSheet, View, Touchable, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomTextField = ({
    placeholder, value, onChangeText, secureTextEntry = false, style
}) => {
    const [isPasswordVisible,setIsPasswordVisible]=useState(false);
    const isPassword= secureTextEntry;
    return (
        <View style={styles.container}>
            <TextInput 
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={isPassword && !isPasswordVisible}
            placeholderTextColor="#000"
            style ={[styles.input,style]}
            />

            {isPassword && (
                <TouchableOpacity
                style={styles.iconContainer}
                onPress={()=> setIsPasswordVisible(prev=>!prev)}
                >
                    <Ionicons
                    name={isPasswordVisible? "eye" : "eye-off"}
                    size={20}
                    color="#555"
                    />
                </TouchableOpacity>
            )}
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
    },
    iconContainer:{
        position:'absolute',
        right:15,
        height:'100%',
        justifyContent:'center'
    }
})

export default CustomTextField;
