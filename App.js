import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, TouchableOpacity, Dimensions, Platform, View, Alert, Image, SafeAreaView, Button} from 'react-native';
import {useDimension} from "@react-native-community/hooks";
import {Home} from "./screens/Home.js";
import {Scribble} from "./screens/Scribble.js";
import colors from './config/colors';

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
      <Scribble />
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
