import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Frame = () => {
  return <View style={styles.frameView} />;
};

const styles = StyleSheet.create({
  frameView: {
    backgroundColor: Color.colorWhite,
    width: 540,
    height: 192,
    overflow: "hidden",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
});

export default Frame;
