import React from "react";
import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
//var data = require("App.js");
import * as data from "../config/python/lot_data.json";
// var data;
// async function loadLot() {
//   const response = await fetch(
//     "http://10.53.133.54/lot_data.json?r=" + Math.random()
//   );
//   data = await response.json();
//   //console.log(2, data);
//   LoginScreen();
// }

// (async function () {
//   await loadLot();
// })();

// await loadLot();

//console.log(1, data);
function LoginScreen(props) {
  return (
    <ImageBackground
      style={styles.backgound}
      source={require("../assets/background.png")}
    >
      <TouchableOpacity
        style={
          data.lot[0] == "0"
            ? styles.parkingSpaceTopGreen
            : styles.parkingSpaceTopRed
        }
      />
      <TouchableOpacity
        style={
          data.lot[1] == "0"
            ? styles.parkingSpaceTopGreen
            : styles.parkingSpaceTopRed
        }
      />
      <TouchableOpacity
        style={
          data.lot[2] == "0"
            ? styles.parkingSpaceTopGreen
            : styles.parkingSpaceTopRed
        }
      />
      <TouchableOpacity
        style={
          data.lot[3] == "0"
            ? styles.parkingSpaceTopGreen
            : styles.parkingSpaceTopRed
        }
      />
      <TouchableOpacity
        style={
          data.lot[4] == "0"
            ? styles.parkingSpaceTopGreen
            : styles.parkingSpaceTopRed
        }
      />
      <TouchableOpacity
        style={
          data.lot[5] == "0"
            ? styles.parkingSpaceTopGreen
            : styles.parkingSpaceTopRed
        }
      />

      <TouchableOpacity
        style={
          data.lot[6] == "0"
            ? styles.parkingSpaceBottomGreen
            : styles.parkingSpaceBottomRed
        }
      />
      <TouchableOpacity
        style={
          data.lot[7] == "0"
            ? styles.parkingSpaceBottomGreen
            : styles.parkingSpaceBottomRed
        }
      />
      <TouchableOpacity
        style={
          data.lot[8] == "0"
            ? styles.parkingSpaceBottomGreen
            : styles.parkingSpaceBottomRed
        }
      />
      <TouchableOpacity
        style={
          data.lot[9] == "0"
            ? styles.parkingSpaceBottomGreen
            : styles.parkingSpaceBottomRed
        }
      />
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backgound: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
  },
  parkingSpaceTopGreen: {
    margin: 10,
    width: 50,
    height: 100,
    backgroundColor: "green",
  },
  parkingSpaceTopRed: {
    margin: 10,
    width: 50,
    height: 100,
    backgroundColor: "red",
  },
  parkingSpaceBottomGreen: {
    left: 70,
    margin: 10,
    width: 50,
    height: 100,
    backgroundColor: "green",
  },
  parkingSpaceBottomRed: {
    left: 70,
    margin: 10,
    width: 50,
    height: 100,
    backgroundColor: "red",
  },
});
//export default data;
export default LoginScreen;
