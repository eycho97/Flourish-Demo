import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import RNDrawOnScreen from 'react-native-draw-on-screen';
// import Controls from './Controls';
import colors from '../config/colors';
 
export class Scribble extends React.Component {

  state = {
    color: 'black',
    strokeWidth: 10,
  };
 
  changeColor = (color) => {
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
        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("Test")}>
            <View style={{
              height: 100,
              alignItems: "center",
              justifyContent: "center",
            }}>
              <Text style={styles.baseText}>Let's scribble over this message!</Text>
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.msg}>
            <Text style={styles.msgText}>Why are you so ugly?</Text>
          </View>
          <RNDrawOnScreen
            penColor={this.state.color}
            strokeWidth={this.state.strokeWidth}
            ref={(r) => (this.RNDraw = r)}
          />
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
});

export default Scribble;