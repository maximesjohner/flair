import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.login}>
      <View style={[styles.placeholder, styles.placeholderLayout]}>
        <View style={styles.placeholderChild} />
        <Text style={styles.recherchez}>{`Identifiants `}</Text>
        <View style={[styles.placeholderItem, styles.iconSearchPosition]} />
        <Image
          style={[styles.iconSearch, styles.iconSearchPosition]}
          contentFit="cover"
          source={require("../assets/-icon-search.png")}
        />
      </View>
      <View style={[styles.placeholder1, styles.placeholderLayout]}>
        <View style={styles.placeholderChild} />
        <Text style={styles.recherchez}>{`Mot de passe `}</Text>
        <View style={[styles.placeholderItem, styles.iconSearchPosition]} />
        <Image
          style={[styles.iconSearch, styles.iconSearchPosition]}
          contentFit="cover"
          source={require("../assets/-icon-search.png")}
        />
      </View>
      <Pressable
        style={styles.connexion}
        onPress={() => navigation.navigate("Status1")}
      >
        <Image
          style={styles.connexionIcon}
          contentFit="cover"
          source={require("../assets/connexion.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  placeholderLayout: {
    height: 30,
    width: 356,
    left: 19,
    position: "absolute",
  },
  iconSearchPosition: {
    display: "none",
    top: "30%",
    position: "absolute",
  },
  placeholderChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
    width: "100%",
  },
  recherchez: {
    top: "23.33%",
    left: "3.93%",
    fontSize: FontSize.size_smi,
    fontWeight: "500",
    fontFamily: FontFamily.nunitoMedium,
    color: Color.colorDarkgray_100,
    textAlign: "left",
    position: "absolute",
  },
  placeholderItem: {
    height: "50%",
    width: "0.28%",
    right: "75.56%",
    bottom: "20%",
    left: "24.16%",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorDarkgray_100,
  },
  iconSearch: {
    height: "40%",
    width: "3.37%",
    right: "3.37%",
    bottom: "30%",
    left: "93.26%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  placeholder: {
    top: 444,
  },
  placeholder1: {
    top: 491,
  },
  connexionIcon: {
    width: 73,
    height: 11,
  },
  connexion: {
    top: 583,
    left: 30,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_200,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_110xl,
    paddingVertical: Padding.p_2xs,
    position: "absolute",
  },
  login: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default Login;
