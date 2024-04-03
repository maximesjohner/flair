import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, Border, Color } from "../GlobalStyles";

const Authentification = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.authentification}>
      <Pressable
        style={[styles.inscription, styles.inscriptionFlexBox]}
        onPress={() => navigation.navigate("Register")}
      >
        <Image
          style={styles.inscriptionIcon}
          contentFit="cover"
          source={require("../assets/inscription.png")}
        />
      </Pressable>
      <View
        style={[styles.authentificationChild, styles.authentificationPosition]}
      />
      <View style={[styles.connexionInstagram, styles.connexionLayout]}>
        <View style={[styles.connectionGoogle, styles.inscription1Position]}>
          <View style={[styles.inscription1, styles.inscription1Position]}>
            <Image
              style={styles.inscriptionIcon}
              contentFit="cover"
              source={require("../assets/inscription1.png")}
            />
          </View>
          <Image
            style={[styles.iconLogoGoogle, styles.iconPosition1]}
            contentFit="cover"
            source={require("../assets/-icon-logo-google.png")}
          />
        </View>
        <Image
          style={styles.iconPosition}
          contentFit="cover"
          source={require("../assets/-icon-logo-instagram.png")}
        />
      </View>
      <View style={[styles.connectionGoogle1, styles.connexionLayout]}>
        <View style={[styles.inscription1, styles.inscription1Position]}>
          <Image
            style={styles.inscriptionIcon}
            contentFit="cover"
            source={require("../assets/inscription1.png")}
          />
        </View>
        <Image
          style={styles.iconPosition1}
          contentFit="cover"
          source={require("../assets/-icon-logo-google.png")}
        />
      </View>
      <View style={[styles.connexionApple, styles.connexionLayout]}>
        <View style={[styles.connectionGoogle, styles.inscription1Position]}>
          <View style={[styles.connectionGoogle, styles.inscription1Position]}>
            <View style={[styles.inscription1, styles.inscription1Position]}>
              <Image
                style={styles.inscriptionIcon}
                contentFit="cover"
                source={require("../assets/inscription2.png")}
              />
            </View>
            <Image
              style={[styles.iconLogoGoogle, styles.iconPosition1]}
              contentFit="cover"
              source={require("../assets/-icon-logo-google.png")}
            />
          </View>
          <Image
            style={[styles.iconLogoInstagram1, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/-icon-logo-instagram.png")}
          />
        </View>
        <Image
          style={styles.iconLogoApple}
          contentFit="cover"
          source={require("../assets/-icon-logo-apple.png")}
        />
      </View>
      <Pressable
        style={[styles.connexion, styles.inscriptionFlexBox]}
        onPress={() => navigation.navigate("Login")}
      >
        <Image
          style={styles.connexionIcon}
          contentFit="cover"
          source={require("../assets/connexion.png")}
        />
      </Pressable>
      <View
        style={[styles.authentificationItem, styles.authentificationPosition]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inscriptionFlexBox: {
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_110xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_xl,
  },
  authentificationPosition: {
    width: 334,
    left: 30,
    position: "absolute",
  },
  connexionLayout: {
    height: 40,
    width: 334,
    left: 30,
    position: "absolute",
  },
  inscription1Position: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  iconPosition1: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "74.25%",
    bottom: "26.75%",
    right: "20.36%",
    top: "27.5%",
    width: "5.39%",
    height: "45.75%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    left: "74.55%",
    bottom: "29.5%",
    top: "28%",
    width: "5.09%",
    height: "42.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "20.36%",
    position: "absolute",
    overflow: "hidden",
  },
  inscriptionIcon: {
    width: 72,
    height: 14,
  },
  inscription: {
    top: 485,
    width: 334,
    left: 30,
    position: "absolute",
    backgroundColor: Color.colorWhitesmoke_100,
    paddingHorizontal: Padding.p_110xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_xl,
  },
  authentificationChild: {
    top: 545,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke_300,
    height: 1,
  },
  inscription1: {
    height: "90.75%",
    top: "4.5%",
    bottom: "4.75%",
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_110xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  iconLogoGoogle: {
    display: "none",
  },
  connectionGoogle: {
    height: "100%",
    top: "0%",
    bottom: "0%",
  },
  connexionInstagram: {
    top: 570,
  },
  connectionGoogle1: {
    top: 630,
  },
  iconLogoInstagram1: {
    display: "none",
  },
  iconLogoApple: {
    width: "4.37%",
    right: "20.78%",
    bottom: "30%",
    left: "74.85%",
    height: "42.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "27.5%",
    position: "absolute",
    overflow: "hidden",
  },
  connexionApple: {
    top: 690,
  },
  connexionIcon: {
    width: 73,
    height: 11,
  },
  connexion: {
    top: 426,
    backgroundColor: Color.colorGray_200,
    paddingHorizontal: Padding.p_110xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_xl,
    left: 30,
    position: "absolute",
  },
  authentificationItem: {
    top: 98,
    backgroundColor: Color.colorGainsboro_300,
    height: 300,
  },
  authentification: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default Authentification;
