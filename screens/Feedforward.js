import React from 'react';
import { StyleSheet, Text, ImageBackground, TouchableWithoutFeedback, TouchableOpacity, Dimensions, Platform, View, Alert, Image, SafeAreaView, Button} from 'react-native';
import colors from '../config/colors';


const Test = ({navigation}) => {
  return (
    <View style={styles.container}>
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
      <View style={styles.chooseMethod}>
        <View style={styles.chooseTxt}>
          <Text style={styles.innerTxt}>CHOOSE A METHOD</Text>
        </View>
        <View style={styles.options}>
          <View style={styles.breakOption}>
            <View style={styles.iconWrapper}>
              <Image source={require('../assets/images/hammer.png')}></Image>
              <Text style={styles.innerTxt}>Break</Text>
            </View>
            <View style={styles.prevWrapper}>
              <Image source={require('../assets/images/break_preview.png')}></Image>
            </View>
          </View>
          
          <View style={styles.breakOptionExpanded}>
            <View style={{flexDirection: "row", marginTop: 20, justifyContent: "space-between"}}>
              <View style={styles.iconWrapperExpanded}>
                <Image source={require('../assets/images/pencil.png')}></Image>
                <Text style={styles.innerTxt}>Scribble</Text>
              </View>
              <View style={{marginRight: 30}}>
                <Text style={styles.feedText}>In the next screen,{'\n'}you can draw on the{'\n'}message as you want.</Text>
              </View>
            </View>
            <View style={{marginTop: 40}}>
              <View style={styles.prevWrapperExpanded}>
                <Image source={require('../assets/images/scribble_preview.png')}></Image>
                <Image style={styles.sprout} source={require('../assets/images/sprout_pen.png')} />
              </View>
            </View>
            
            <TouchableWithoutFeedback onPress={() => navigation.navigate("Scribble")}>
              <View style={styles.start}>
                <Text>START</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          
        </View>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // justifyContent: 'flex-end',
    alignItems: 'center',
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
    top: -40,
    left: 135,
  },
  chooseMethod: {
    backgroundColor: colors.btnYellow,
    height: "65%",
    width: "80%",
    // alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 10,
    top: 30,
  },
  chooseTxt: {
    alignSelf: "flex-start",
    left: 20,
  },
  options: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  innerTxt: {
    fontFamily: "Helvetica Neue",
    fontSize: 13,
    fontWeight: "500",
  },
  breakOption: {
    width: "90%",
    height: "23%",
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: colors.btnYellow,
    // justifyContent: "space-around",
  },
  breakOptionExpanded: {
    width: "90%",
    height: "66%",
    backgroundColor: colors.white,
    flexDirection: "column",
    // alignItems: "center",
    alignContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: colors.btnYellow,
    // justifyContent: "space-around",
  },
  iconWrapper: {
    flex: 0.2,
    left: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  prevWrapper: {
    flex: 0.8,
    alignItems: "center",
  },
  iconWrapperExpanded: {
    // flex: 0.2,
    left: 10,
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 5,
  },
  prevWrapperExpanded: {
    marginLeft: 15
  },
  feedText: {
    fontFamily: "Helvetica",
  },
  start: {
    backgroundColor: colors.btnYellow,
    width: "55%",
    height: 28,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: -70,
    marginLeft: 15,
  }
});
export default Test
