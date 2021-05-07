import React from 'react';
import { StyleSheet, Text, ImageBackground, TouchableWithoutFeedback, TouchableOpacity, Dimensions, Platform, View, Alert, Image, SafeAreaView, Button} from 'react-native';
import colors from '../config/colors';


export function Home() {
  return (
    <View style={{
      flex: 1,
      alignItems: "center",
    }}>
      <View style={{
        height: 100,
        alignItems: "center",
        justifyContent: "center",
      }}>
        <Text style={styles.baseText}>Let's change this message!</Text>
      </View>
      <View style={styles.msg}>
        <View style={styles.imageWrapper}>
          <ImageBackground style={styles.theImage} source={require('../assets/images/sprout_msg.png')} >
            <Text style={styles.msgText}>Now pick a method to change & defeat the message!</Text>
          </ImageBackground>
        </View>
      </View>
      <Image style={styles.sprout} source={require('../assets/images/sprout_1.png')} />
      <Text style={styles.baseText} numberOfLines={1}>
        I'm Sprout!
      </Text>
      
      <Button 
        title="Next"
      />
    </View>
    // <View style={{
    //   backgroundColor: "grey",
    //   height: 70,
    //   flex: 0.5,
    //   flexDirection: "row",
    //   justifyContent: "center",
    //   alignContent: "center",
    //   alignItems: "stretch",
    //   flexWrap: "wrap",
    // }}>
    // <View style={{
    //     backgroundColor: "dodgerblue",
    //     width: 100,
    //     height: 100,
    //     alignSelf: "flex-start",
    //   }}/>
    //   <View style={{
    //     backgroundColor: "#ff1",
    //     width: 100,
    //     height: 200,
    //   }}/>
    //   <View style={{
    //     backgroundColor: "grey",
    //     width: 100,
    //     height: 200,
    //   }}/>
    //   <View style={{
    //     backgroundColor: "greenyellow",
    //     width: 100,
    //     height: 200,
    //   }}/>
    // </View>

    
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
  msg: {
    width: "80%",
    height: 120,
    borderRadius: 10,
    backgroundColor: colors.msgYellow,
    alignItems: "center",
    justifyContent: "center",
  },
  imageWrapper: {
    height: 100,
    width: "80%",
    overflow : "hidden",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  baseText: {
    fontFamily: "Helvetica Neue",
    color: colors.white,
    fontSize: 20,
    fontWeight: "700",
  },
  msgText: {
    fontFamily: "Helvetica Neue",
    color: colors.white,
    fontSize: 16,
    fontWeight: "500",
    width: "90%",
    top: -10,
  },
  title: {
    fontFamily: "Helvetica",
    color: colors.white,
    fontSize: 20,
    fontWeight: "500",
  },
  theImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  sprout: {
    top: -60,
    right: 120,
  },
});
export default Home;

