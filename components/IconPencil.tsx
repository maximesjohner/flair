import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const IconPencil = () => {
  return (
    <View style={styles.iconPencil}>
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupIcon: {
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
  iconPencil: {
    width: 50,
    height: 50,
  },
});

export default IconPencil;
