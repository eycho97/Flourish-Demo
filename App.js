import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, TouchableOpacity, Dimensions, Platform, View, Alert, Image, SafeAreaView, Button} from 'react-native';
import {useDimension} from "@react-native-community/hooks";
import {enableScreens} from 'react-native-screens';
import Home from "./screens/Home.js";
import Scribble from "./screens/Scribble.js";
import Feedforward from "./screens/Feedforward.js";
import colors from './config/colors';

enableScreens();

import {NavigationContainer, DefaultTheme} from "@react-navigation/native";
import {createNativeStackNavigator} from "react-native-screens/native-stack";

const Stack = createNativeStackNavigator();

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: colors.background,
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

export default function App() {
  let x = 1;
  console.log("App executed");
  // console.log(Dimensions.get('screen'));
  const handlePress = () => console.log("Text clicked")
  return (
    // <Home />
    <SafeAreaView style={styles.container}>
      <View style={{
        height: 25,
        alignItems: "center",
      }}>
        <Text style={styles.title}>- FLOURISH -</Text>
      </View>
      <View style={{flex: 1, backgroundColor: colors.background}}>
        <NavigationContainer
          theme={MyTheme}
        >
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              stackAnimation: "fade",
              cardStyle: { backgroundColor: colors.background}
            }}
          >
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Scribble" component={Scribble}/>
            <Stack.Screen name="Feedforward" component={Feedforward}/>
          </Stack.Navigator>
        </NavigationContainer>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: colors.background,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  baseText: {
    fontFamily: "Helvetica Neue",
    color: colors.white,
    fontSize: 20,
    fontWeight: "700",
  },
  title: {
    fontFamily: "Helvetica",
    color: colors.white,
    fontSize: 20,
    fontWeight: "500",
  },
});
