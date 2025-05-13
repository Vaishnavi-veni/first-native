import React, { useEffect, useState } from "react";
import { Image, View, StyleSheet, Text, Alert } from "react-native";
import { globalStyles } from "../constants/styles";
import { useNavigation } from '@react-navigation/native';

import CustomTextField from "../components/CustomTextField";
import CustomButton from "../components/CustomButton";
import { loginUser } from "../controller/authController";

const LoginScreen = () => {
  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');
  const [emailError,setEmailError]= useState('');
  const [passwordError, setPasswordError]=useState('');
  const [formValid, setFormValid] = useState(false);

  const navigation=useNavigation();

  useEffect (()=>{
    const isEmailValid =/\S+@\S+\.\S+/.test(email);
    const isPasswordValid = password.length >= 6;

    setFormValid(email&& password && isEmailValid && isPasswordValid);
  },[email,password]);

  const validateForm = () =>{
    let isValid = true;

    if (!email) {
      setEmailError("Email is required");
      isValid=false;
    } else if(!/\S+@\S+\.\S+/.test(email)){
      setEmailError('Enter a valid email address');
      isValid=false
    } else {
      setEmailError('');
    }

    if (!password){
      setPasswordError("Password is required");
      isValid=false;
    } else if(password.length < 6){
      setPasswordError("Password length should be atleast 6");
    } else{
      setPasswordError('');
    }

    return isValid;

  }

  const handleLogin = async() =>{
    const isFormValid = validateForm();

    if(isFormValid){
    try{
      const result = await loginUser(email,password);

      if(result.success){
        console.log('Login successful, token:',result.token);
        Alert.alert("Login successful");

        navigation.navigate('Register');
      }else{
        Alert.alert("Login Failed",result.message);
      }
    } catch (error){
      Alert.alert("Error","Something went wrong");
      console.error(error);
    }
  }
  };

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
        onChangeText={(text)=> {
          setEmail(text); 
          setEmailError('');
        }}
        />
        {emailError ? <Text>{emailError}</Text> : null}

        <View style={{margin:10}} />

        <CustomTextField 
        placeholder="Password"
        value={password}
        onChangeText={(text)=> {
          setPassword(text);
          setPasswordError('');
        }}
        secureTextEntry={true}
        />
        {passwordError ? <Text>{passwordError}</Text> : null}

        <View style={{margin:5}} />

        <Text
        style={{
          alignSelf:'flex-end',
          paddingRight:10,
          color:'#4F4F4F',
          fontSize:12
        }}>Forgot Password?</Text>
        
         <View alignItems='center' marginTop='40'>
          <CustomButton 
          title='Login'
          // onPress={() => navigation.navigate('Register')}
          onPress={handleLogin}
          disabled={!formValid}
          >
          </CustomButton>
          
          <Text style={{marginTop:30}}>Don't have an account? 
            <Text style={{color:'#4C6ED7', fontWeight:"bold"}}>  Register</Text>
          </Text>
        </View>
        
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
