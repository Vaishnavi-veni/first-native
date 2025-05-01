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
        backgroundColor: "#604652",
        padding: 12,
        borderRadius: 8,
        width: 150,
        alignItems: "center",
        marginBottom: 15
      },
      buttonText: {
        color: "#fff",
        fontWeight: "bold",
      },
})