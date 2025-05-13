import React from "react";
import { StyleSheet, TouchableOpacity , Text } from "react-native";

const CustomButton = ({title, onPress}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
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
      buttonText: {
        color: "#fff",
        fontSize:14
      },
})