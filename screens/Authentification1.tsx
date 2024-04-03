import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Authentification1 = () => {
  return (
    <View style={styles.authentification}>
      <View style={[styles.button, styles.buttonFlexBox]}>
        <Text style={styles.label}>{`Se connecter avec `}</Text>
        <Image
          style={styles.appleIcon}
          contentFit="cover"
          source={require("../assets/apple.png")}
        />
      </View>
      <View style={[styles.button1, styles.buttonFlexBox]}>
        <Text style={styles.label}>{`Se connecter avec `}</Text>
        <Image
          style={styles.appleIcon}
          contentFit="cover"
          source={require("../assets/google.png")}
        />
      </View>
      <View style={[styles.button2, styles.buttonFlexBox]}>
        <Text style={styles.label}>{`Se connecter avec `}</Text>
        <Image
          style={styles.appleIcon}
          contentFit="cover"
          source={require("../assets/instagram.png")}
        />
      </View>
      <View style={[styles.button3, styles.buttonFlexBox]}>
        <Text style={[styles.label3, styles.labelTypo]}>Inscription</Text>
      </View>
      <View style={[styles.button4, styles.buttonFlexBox]}>
        <Text style={[styles.label4, styles.labelTypo]}>Connexion</Text>
      </View>
      <View style={styles.authentificationChild} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFlexBox: {
    paddingVertical: Padding.p_mini,
    paddingHorizontal: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_xs,
    width: 338,
    left: 28,
    position: "absolute",
  },
  labelTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
  },
  label: {
    fontFamily: FontFamily.interRegular,
    color: Color.graysBlack,
    textAlign: "center",
    fontSize: FontSize.size_lg,
  },
  appleIcon: {
    width: 24,
    height: 24,
    marginLeft: 8,
    overflow: "hidden",
  },
  button: {
    top: 593,
    backgroundColor: Color.colorWhitesmoke_100,
    paddingVertical: Padding.p_mini,
    paddingHorizontal: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_xs,
  },
  button1: {
    top: 659,
    backgroundColor: Color.colorWhitesmoke_100,
    paddingVertical: Padding.p_mini,
    paddingHorizontal: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_xs,
  },
  button2: {
    top: 725,
    backgroundColor: Color.colorWhitesmoke_100,
    paddingVertical: Padding.p_mini,
    paddingHorizontal: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_xs,
  },
  label3: {
    color: Color.colorDarkorange,
  },
  button3: {
    top: 490,
    backgroundColor: Color.colorWhitesmoke_100,
    paddingVertical: Padding.p_mini,
    paddingHorizontal: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_xs,
  },
  label4: {
    color: Color.colorWhite,
  },
  button4: {
    top: 426,
    backgroundColor: Color.colorDarkorange,
    paddingVertical: Padding.p_mini,
    paddingHorizontal: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_xs,
  },
  authentificationChild: {
    top: 49,
    borderRadius: 169,
    height: 342,
    width: 338,
    left: 28,
    position: "absolute",
    backgroundColor: Color.colorWhitesmoke_100,
  },
  authentification: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Authentification1;
