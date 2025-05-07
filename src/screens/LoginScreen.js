import React, { useState } from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import { globalStyles } from "../constants/styles";
import CustomTextField from "../components/CustomTextField";

const LoginScreen = () => {
  const [email,setEmail]= useState('');
  
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 120 }} />
      {/* Temporarily comment out image if crash persists */}
      <Image
        source={require('../../assets/images/logo/stock_careers_logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={{ margin: 20 }} />
      <Text style={{ fontSize: 28, fontWeight: "400" }}>Welcome Back</Text>
      <View style={[globalStyles?.bottomContainer,{padding:30}]}>

        <Text style={{fontSize:22,marginTop:30}}>Login</Text>
        <View style={{margin:20}} />
        <CustomTextField 
        placeholder="Enter your email"
        value={email}
        onChangeText={(text)=> setEmail(text)}
        />
      </View>
    </View> 
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#f4f6f7",
  },
  logo: {
    width: 200,
    height: 100,
  },
});
