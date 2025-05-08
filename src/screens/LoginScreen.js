import React, { useState } from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import { globalStyles } from "../constants/styles";
import CustomTextField from "../components/CustomTextField";
import CustomButton from "../components/CustomButton";

const LoginScreen = () => {
  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');

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
      <View style={[globalStyles?.bottomContainer,]}>

        <Text style={{fontSize:22,marginTop:40,marginLeft:20}}>Login</Text>
        <View style={{margin:10}} />
        <CustomTextField 
        placeholder="Email"
        value={email}
        onChangeText={(text)=> setEmail(text)}
        />
        <View style={{margin:10}} />
        <CustomTextField 
        placeholder="Password"
        value={password}
        onChangeText={(text)=> setPassword(text)}
        secureTextEntry={true}
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
