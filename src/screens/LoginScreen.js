import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const LoginScreen = () => {
return(
<View style={styles.container}>
    <View style={{marginTop:120,}}> </View>
    <Image
      source={require('../../assets/images/logo/stock_careers_logo.png')}
      style={styles.logo}
      resizeMode="contain"
      />
      <View style={{margin:20}}></View>
      <Text style={{fontSize:28,fontWeight:400}}>Welcome Back</Text>
</View>
)
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "top",
      alignItems: "center",
        },
    logo: {
      width: 200,
      height: 100,
    },
  });