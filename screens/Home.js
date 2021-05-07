import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, TouchableOpacity, Dimensions, Platform, View, Alert, Image, SafeAreaView, Button} from 'react-native';
import colors from '../config/colors';


export function BreakIntro() {
  return (
    <View style={{
      backgroundColor: "grey",
      height: 70,
      flex: 0.5,
      flexDirection: "row",
      justifyContent: "center",
      alignContent: "center",
      alignItems: "stretch",
      flexWrap: "wrap",
    }}>
    <View style={{
        backgroundColor: "dodgerblue",
        width: 100,
        height: 100,
        alignSelf: "flex-start",
      }}/>
      <View style={{
        backgroundColor: "#ff1",
        width: 100,
        height: 200,
      }}/>
      <View style={{
        backgroundColor: "grey",
        width: 100,
        height: 200,
      }}/>
      <View style={{
        backgroundColor: "greenyellow",
        width: 100,
        height: 200,
      }}/>
    </View>
        // <Text style={styles.baseText} numberOfLines={1} onPress={handlePress}>
    //   I'm Sprout!
    // </Text>
    // <Image source={require('../assets/images/sprout_1.png')} />
    // <Button 
    //   title="Next"
    // />
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
export default BreakIntro;

