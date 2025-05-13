import React from "react";
import { StyleSheet, TouchableOpacity , Text } from "react-native";

const CustomButton = ({title, onPress, disabled}) => {
    return (
        <TouchableOpacity 
        style={[styles.button, disabled && styles.disabledButton]} 
        onPress={onPress} 
        disabled={disabled}>
          <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
      );
    };

export default CustomButton

const styles = StyleSheet.create({
    button: {
      width:'80%',
      height:'28%',
        backgroundColor: "#4C6ED7",
        borderRadius: 8,
        alignItems: "center",
        justifyContent:"center"


      },
      disabledButton:{
        backgroundColor: "#A9A9A9"
      },
      buttonText: {
        color: "#fff",
        fontSize:14
      },
})