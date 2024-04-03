import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Register = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.register}>
      <View style={[styles.placeholder, styles.placeholderLayout3]}>
        <View style={[styles.placeholderChild, styles.placeholderPosition]} />
        <Text
          style={[styles.recherchez, styles.recherchezTypo]}
        >{`Identifiants `}</Text>
        <View style={[styles.placeholderItem, styles.recherchezPosition]} />
        <Image
          style={[styles.iconSearch, styles.recherchezPosition]}
          contentFit="cover"
          source={require("../assets/-icon-search.png")}
        />
      </View>
      <View style={[styles.placeholder1, styles.component2Position]}>
        <View style={[styles.placeholderInner, styles.placeholderPosition]} />
        <Text
          style={[styles.recherchez1, styles.recherchezPosition]}
        >{`Identifiants `}</Text>
        <View style={[styles.rectangleView, styles.recherchezPosition]} />
        <Image
          style={[styles.iconSearch1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/-icon-search2.png")}
        />
      </View>
      <View style={[styles.component2, styles.component2Position]}>
        <View style={styles.placeholder2}>
          <View style={[styles.placeholderInner, styles.placeholderPosition]} />
          <Text
            style={[styles.recherchez2, styles.recherchezPosition]}
          >{`Identifiants `}</Text>
          <View style={[styles.placeholderChild2, styles.recherchezPosition]} />
          <Image
            style={[styles.iconSearch2, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/-icon-search2.png")}
          />
        </View>
        <Text style={[styles.jjmmaaaa, styles.recherchezTypo]}>JJ/MM/AAAA</Text>
      </View>
      <Text
        style={[styles.numroDeTlphone, styles.recherchezTypo]}
      >{`numéro de téléphone `}</Text>
      <View style={[styles.placeholder3, styles.placeholderLayout3]}>
        <View style={[styles.placeholderChild, styles.placeholderPosition]} />
        <Text
          style={[styles.recherchez, styles.recherchezTypo]}
        >{`Mot de passe `}</Text>
        <View style={[styles.placeholderItem, styles.recherchezPosition]} />
        <Image
          style={[styles.iconSearch, styles.recherchezPosition]}
          contentFit="cover"
          source={require("../assets/-icon-search.png")}
        />
      </View>
      <View style={[styles.placeholder4, styles.placeholderLayout3]}>
        <View style={[styles.placeholderChild, styles.placeholderPosition]} />
        <Text
          style={[styles.recherchez, styles.recherchezTypo]}
        >{`Confirmer mot de passe `}</Text>
        <View style={[styles.placeholderItem, styles.recherchezPosition]} />
        <Image
          style={[styles.iconSearch, styles.recherchezPosition]}
          contentFit="cover"
          source={require("../assets/-icon-search.png")}
        />
      </View>
      <Pressable
        style={[styles.connexion, styles.connexionPosition]}
        onPress={() => navigation.navigate("Status1")}
      >
        <Image
          style={styles.connexionIcon}
          contentFit="cover"
          source={require("../assets/connexion.png")}
        />
      </Pressable>
      <View style={[styles.registerChild, styles.connexionPosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  placeholderLayout3: {
    height: 30,
    width: 356,
    left: 19,
    position: "absolute",
  },
  placeholderPosition: {
    backgroundColor: Color.colorGainsboro_100,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  recherchezTypo: {
    textAlign: "left",
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
  },
  recherchezPosition: {
    display: "none",
    position: "absolute",
  },
  component2Position: {
    height: 33,
    left: 19,
    position: "absolute",
  },
  iconLayout: {
    height: 0,
    width: 0,
    top: "30%",
    position: "absolute",
  },
  connexionPosition: {
    left: 30,
    position: "absolute",
  },
  placeholderChild: {
    borderRadius: Border.br_81xl,
  },
  recherchez: {
    left: "3.93%",
    top: "23.33%",
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  placeholderItem: {
    left: "24.16%",
    backgroundColor: Color.colorDarkgray_100,
    borderRadius: Border.br_8xs,
    bottom: "20%",
    height: "50%",
    display: "none",
    top: "30%",
    right: "75.56%",
    width: "0.28%",
  },
  iconSearch: {
    height: "40%",
    width: "3.37%",
    right: "3.37%",
    bottom: "30%",
    left: "93.26%",
    maxWidth: "100%",
    maxHeight: "100%",
    top: "30%",
    display: "none",
    overflow: "hidden",
  },
  placeholder: {
    top: 178,
  },
  placeholderInner: {
    borderRadius: Border.br_3xs,
  },
  recherchez1: {
    left: "3.92%",
    textAlign: "left",
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    top: "23.33%",
  },
  rectangleView: {
    width: "0.29%",
    left: "24.15%",
    backgroundColor: Color.colorDarkgray_100,
    borderRadius: Border.br_8xs,
    bottom: "20%",
    height: "50%",
    display: "none",
    top: "30%",
    right: "75.56%",
  },
  iconSearch1: {
    left: "93.27%",
  },
  placeholder1: {
    top: 319,
    width: 171,
  },
  recherchez2: {
    left: "3.94%",
    textAlign: "left",
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    top: "23.33%",
  },
  placeholderChild2: {
    right: "75.6%",
    left: "24.13%",
    backgroundColor: Color.colorDarkgray_100,
    borderRadius: Border.br_8xs,
    bottom: "20%",
    height: "50%",
    display: "none",
    top: "30%",
    width: "0.28%",
  },
  iconSearch2: {
    left: "93.3%",
  },
  placeholder2: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  jjmmaaaa: {
    top: "24.24%",
    left: "12.84%",
    position: "absolute",
  },
  component2: {
    top: 369,
    width: 109,
  },
  numroDeTlphone: {
    top: "38.38%",
    left: "8.4%",
    position: "absolute",
  },
  placeholder3: {
    top: 225,
  },
  placeholder4: {
    top: 272,
  },
  connexionIcon: {
    width: 73,
    height: 11,
  },
  connexion: {
    top: 494,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_200,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_110xl,
    paddingVertical: Padding.p_2xs,
  },
  registerChild: {
    top: 29,
    backgroundColor: Color.colorGainsboro_300,
    width: 334,
    height: 106,
  },
  register: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default Register;
