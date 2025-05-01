import React, { use } from "react";
import { Button, StyleSheet, View } from "react-native";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const LandingScreen= ()=>{
    const navigation= useNavigation();
    return(
       <View style={styles.container}>
        <CustomButton title='Login' onPress={() => navigation.navigate("Login")} />
            <CustomButton title='Register' onPress={() => navigation.navigate("Register")} />
                
       </View>
    )
}

export default LandingScreen;

const styles=StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:20,
        backgroundColor:'#f5f5f5'
    }
})