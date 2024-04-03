import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, Border, FontFamily } from "../GlobalStyles";

export type ComponentType = {
  /** Action props */
  onComponent1Press?: () => void;
};

const Component = ({ onComponent1Press }: ComponentType) => {
  return (
    <Pressable style={styles.component1} onPress={onComponent1Press}>
      <View style={styles.component1Child} />
      <Image
        style={[styles.component1Item, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/polygon-1.png")}
      />
      <Text style={styles.toujoursPlusHaut}>2.7.0 toujours plus haut</Text>
      <Text style={[styles.kaarisB2oba, styles.a10kmTypo]}>
        @kaaris, @b2oba
      </Text>
      <View style={styles.vectorParent}>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={[styles.a10km, styles.a10kmTypo]}>A 10KM</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  a10kmTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorGray_300,
    position: "absolute",
  },
  component1Child: {
    height: "89.44%",
    width: "100%",
    right: "0%",
    bottom: "10.56%",
    borderRadius: Border.br_2xs,
    backgroundColor: Color.colorWhite,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  component1Item: {
    height: "15.53%",
    width: "11.49%",
    top: "84.47%",
    right: "40%",
    bottom: "0%",
    left: "48.51%",
  },
  toujoursPlusHaut: {
    top: "64.6%",
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "left",
    color: Color.colorGray_300,
    left: "2.55%",
    position: "absolute",
  },
  kaarisB2oba: {
    top: "77.02%",
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    left: "2.55%",
    fontSize: FontSize.size_xs,
  },
  vectorIcon: {
    height: "64%",
    width: "12.57%",
    top: "18%",
    right: "87.43%",
    bottom: "18%",
    left: "0%",
  },
  a10km: {
    left: "19.85%",
    fontFamily: FontFamily.interRegular,
    top: "0%",
  },
  vectorParent: {
    height: "9.32%",
    width: "23.36%",
    top: "79.5%",
    right: "14.09%",
    bottom: "11.18%",
    left: "62.55%",
    position: "absolute",
  },
  component1: {
    top: 153,
    left: 182,
    width: 235,
    height: 161,
    position: "absolute",
  },
});

export default Component;
