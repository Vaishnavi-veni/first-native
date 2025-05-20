import React from "react";
import { Image, View, StyleSheet } from "react-native";

const RegisterScreen= ()=> {
    return(
        <View style={styles.container}>
            <View style={{marginTop:120}} />
            <Image 
            source={require('../../assets/images/logo/stock_careers_logo.png')}>
            </Image>

            <View style={{marginTop:50}} />
            <Text>Hi, Let's Make a Journey with Us</Text>
        </View>
    )
}

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    // backgroundColor: "#f4f6f7",
  },
});
