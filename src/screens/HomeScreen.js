import React from "react";
import { Button, View } from "react-native";
import MyComponent from "../components/MyComponent";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <MyComponent />
      <Button
        title="Go"
        onPress={() => navigation.navigate("Another")}
      />
    </View>
  );
};

export default HomeScreen;
