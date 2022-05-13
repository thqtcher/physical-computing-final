import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";


import colors from "../config/colors";

function MapScreen({navigation}) {

  
  return (
    
    <ImageBackground
      
      style={styles.backgound}
      source={require("../assets/map-background.png")}
    >
    <TouchableOpacity
        onPress={() =>
        navigation.navigate('Parking Screen')}
    >
        <View style={styles.curvedTailArrow}>
            <View style={styles.curvedTailArrowTail} />
            <View style={styles.curvedTailArrowTriangle} />
        </View>
    </TouchableOpacity>
        
        
    
      
      
      
      
    </ImageBackground>
    
  );
}
const styles = StyleSheet.create({
  
  backgound: {
    flex: 1,
    
  },
  curvedTailArrow: {
    left: 124,
    top: 210,
    backgroundColor: "transparent",
    overflow: "visible",
    width: 30,
    height: 25,
  },
  curvedTailArrowTriangle: {
    backgroundColor: "transparent",
    width: 0,
    height: 0,
    borderTopWidth: 9,
    borderTopColor: "transparent",
    borderRightWidth: 9,
    borderRightColor: "red",
    borderStyle: "solid",
    transform: [{ rotate: "10deg" }],
    position: "absolute",
    bottom: 9,
    right: 3,
    overflow: "visible",
  },
  curvedTailArrowTail: {
    backgroundColor: "transparent",
    position: "absolute",
    borderBottomColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 3,
    borderTopColor: "red",
    borderStyle: "solid",
    borderTopLeftRadius: 12,
    top: 1,
    left: 0,
    width: 20,
    height: 20,
    transform: [{ rotate: "45deg" }],
  },
  registerButton: {
    width: "100%",
    height: 90,
    backgroundColor: colors.secondary,
  },
  registerText: {
    textAlign: "center",
    fontSize: 30,
    paddingTop: 25,
    color: colors.primary,
  },
});
export default MapScreen;
