import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const IconMail = () => {
  return (
    <View style={styles.iconMail}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconMail: {
    width: 74,
    height: 58,
  },
});

export default IconMail;
