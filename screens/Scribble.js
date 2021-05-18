import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import RNDrawOnScreen from 'react-native-draw-on-screen';
// import Controls from './Controls';
import colors from '../config/colors';
 
export class Scribble extends React.Component {

  state = {
    color: 'black',
    strokeWidth: 10,
  };
 
  changeColor = (color) => {
    console.log("in change color");
    this.setState({ color });
  };
 
  changeBrushSize = (strokeWidth) => {
    this.setState({ strokeWidth });
  };
 
  undo = () => {
    this.RNDraw.undo();
  };
 
  clear = () => {
    this.RNDraw.clear();
  };
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        {/* <Controls
          handleColorChange={this.changeColor}
          handleBrushSizeChange={this.changeBrushSize}
          selectedColor={this.state.color}
          selectedStrokeWidth={this.state.strokeWidth}
          handleUndo={this.undo}
          handleClear={this.clear}
        /> */}
        <View style={styles.container}>
        
          <View style={{
            height: 100,
            alignItems: "center",
            justifyContent: "center",
          }}>
            <Text style={styles.baseText}>Let's scribble over this message!</Text>
          </View>
          <View style={styles.msg}>
            <Text style={styles.msgText}>Why are you so ugly?</Text>
          </View>
          <RNDrawOnScreen style={{top: 100, bottom: 100,}}
            penColor={this.state.color}
            strokeWidth={this.state.strokeWidth}
            ref={(r) => (this.RNDraw = r)}
          />
          <View style={styles.chooseMethod}>
            <View>
              <View style={styles.undoClear}>
                <Text>SCRIBBLE OVER THE MESSAGE</Text>
              </View>
            </View>
            
            <View style={styles.undoClear}>
              <View>
                <Text>PICK A COLOR</Text>
              </View>
              <View style={styles.colorsRow}>
                <TouchableWithoutFeedback onPress={() => this.changeColor(colors.black)}>
                  <View style={{backgroundColor: colors.black, width: 30, height: 30, borderRadius: 2}}>
                    <Text></Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => this.changeColor(colors.darkgrey)}>
                  <View style={{backgroundColor: colors.darkgrey, width: 30, height: 30, borderRadius: 2}}>
                    <Text></Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => this.changeColor(colors.grey)}>
                  <View style={{backgroundColor: colors.grey, width: 30, height: 30, borderRadius: 2}}>
                    <Text></Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => this.changeColor(colors.lightgrey)}>
                  <View style={{backgroundColor: colors.lightgrey, width: 30, height: 30, borderRadius: 2}}>
                    <Text></Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => this.changeColor(colors.whitegrey)}>
                  <View style={{backgroundColor: colors.whitegrey, width: 30, height: 30, borderRadius: 2}}>
                    <Text></Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
              <View style={styles.colorsRow}>
                <TouchableWithoutFeedback onPress={() => this.changeColor(colors.red)}>
                  <View style={{backgroundColor: colors.red, width: 30, height: 30, borderRadius: 2}}>
                    <Text></Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => this.changeColor(colors.orange)}>
                  <View style={{backgroundColor: colors.orange, width: 30, height: 30, borderRadius: 2}}>
                    <Text></Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => this.changeColor(colors.yellow)}>
                  <View style={{backgroundColor: colors.yellow, width: 30, height: 30, borderRadius: 2}}>
                    <Text></Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => this.changeColor(colors.darkGreen)}>
                  <View style={{backgroundColor: colors.darkGreen, width: 30, height: 30, borderRadius: 2}}>
                    <Text></Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => this.changeColor(colors.turquoise)}>
                  <View style={{backgroundColor: colors.turquoise, width: 30, height: 30, borderRadius: 2}}>
                    <Text></Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
              
            </View>
            <View style={styles.actions}>
                <TouchableOpacity onPress={() => this.RNDraw.undo()}>
                  <View style={styles.actionBtn}>
                    <Text>UNDO</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.RNDraw.clear()}>
                  <View style={styles.actionBtn}>
                    <Text>CLEAR</Text>
                  </View>
                </TouchableOpacity>
              </View>
          </View>
          <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("Home")}>
            <View style={styles.doneBtn}>
              <Text>I'M DONE</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </SafeAreaView>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    alignItems: "center",
  },
  msg: {
    width: "80%",
    height: 120,
    borderRadius: 10,
    backgroundColor: colors.msgYellow,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
    marginTop: 50,
  },
  msgText: {
    fontFamily: "Helvetica Neue",
    color: colors.black,
    fontSize: 20,
    fontWeight: "500",
  },
  baseText: {
    fontFamily: "Helvetica Neue",
    color: colors.white,
    fontSize: 20,
    fontWeight: "700",
  },
  chooseMethod: {
    backgroundColor: colors.white,
    height: "40%",
    width: "80%",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: colors.btnYellow,
    marginTop: 30,
  },
  undoClear: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
  },
  options: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  doneBtn: {
    backgroundColor: colors.btnYellow,
    width: "30%",
    height: 28,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 30,
  },
  actions: {
    flexDirection: "row",
    marginTop: 30,
  },
  actionBtn: {
    marginLeft: 20,
    backgroundColor: colors.btnYellow,
    padding: 5,
    borderRadius: 10,
  },
  colorsRow: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between"
  }
  
});

export default Scribble;