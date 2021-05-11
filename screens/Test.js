import React from 'react'
import { StyleSheet, Text, ImageBackground, TouchableWithoutFeedback, TouchableOpacity, Dimensions, Platform, View, Alert, Image, SafeAreaView, Button} from 'react-native';


const Test = ({navigation}) => {
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate("Home")}>
      <Text>Hey</Text>
    </TouchableWithoutFeedback>
  )
}

export default Test
