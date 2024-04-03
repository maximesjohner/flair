import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Message3 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.message3}>
      <Image
        style={[styles.message3Child, styles.message3Layout]}
        contentFit="cover"
        source={require("../assets/line-1.png")}
      />
      <Image
        style={[styles.message3Item, styles.message3Layout]}
        contentFit="cover"
        source={require("../assets/line-2.png")}
      />
      <Image
        style={[styles.message3Inner, styles.message3InnerLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-172.png")}
      />
      <Text style={[styles.toujoursPlusHaut, styles.x1Typo]}>
        2.7.0 Toujours plus haut
      </Text>
      <Text style={[styles.ajouter, styles.ajouterTypo]}>Ajouter</Text>
      <Text style={[styles.membres, styles.ajouterTypo]}>Membres</Text>
      <Text style={[styles.fileDattente, styles.fileDattenteTypo]}>
        File d’attente
      </Text>
      <Pressable
        style={styles.modifierLannonce}
        onPress={() => navigation.navigate("Message4")}
      >
        <Text style={[styles.modifierLannonce1, styles.modifierLannonce1Typo]}>
          Modifier l’annonce
        </Text>
      </Pressable>
      <Text style={[styles.quitterLeGroupe, styles.fileDattenteTypo]}>
        Quitter le groupe
      </Text>
      <Image
        style={styles.icons8People961}
        contentFit="cover"
        source={require("../assets/icons8people96-1.png")}
      />
      <Text
        style={[styles.kalashRigolekom1jnoun93Et, styles.modifierLannonce1Typo]}
      >
        @kalash, @rigolekom1jnoun93 et 6 autres
      </Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View style={[styles.message3Child1, styles.rectangleViewLayout]} />
      <Image
        style={styles.iconPersonAdd}
        contentFit="cover"
        source={require("../assets/-icon-person-add.png")}
      />
      <Image
        style={[styles.iconHourglass, styles.message3InnerLayout]}
        contentFit="cover"
        source={require("../assets/-icon-hourglass.png")}
      />
      <Image
        style={[styles.iconExitOutline, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-icon-exit-outline.png")}
      />
      <Image
        style={[styles.iconExitOutline1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-icon-exit-outline1.png")}
      />
      <Pressable
        style={styles.x}
        onPress={() => navigation.navigate("Message1")}
      >
        <Text style={[styles.x1, styles.x1Typo]}>x</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  message3Layout: {
    height: 11,
    width: 11,
    left: 17,
    position: "absolute",
  },
  message3InnerLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  x1Typo: {
    textAlign: "left",
    color: Color.graysBlack,
    fontSize: FontSize.size_xl,
  },
  ajouterTypo: {
    color: Color.colorGray_300,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  fileDattenteTypo: {
    height: 12,
    color: Color.colorGray_300,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    top: 358,
    textAlign: "left",
    position: "absolute",
  },
  modifierLannonce1Typo: {
    fontFamily: FontFamily.interLight,
    color: Color.colorGray_300,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  rectangleViewLayout: {
    height: 1,
    width: 334,
    backgroundColor: Color.colorWhitesmoke_300,
    borderRadius: Border.br_3xs,
    left: 29,
    position: "absolute",
  },
  iconLayout: {
    height: "2.85%",
    width: "8.04%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  message3Child: {
    top: 15,
  },
  message3Item: {
    top: 26,
  },
  message3Inner: {
    height: "21.71%",
    top: "0%",
    right: "0%",
    bottom: "78.29%",
    left: "0%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  toujoursPlusHaut: {
    marginTop: -226,
    marginLeft: -114.5,
    top: "50%",
    left: "50%",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  ajouter: {
    left: 69,
    width: 42,
    height: 14,
    fontFamily: FontFamily.interRegular,
    top: 358,
    color: Color.colorGray_300,
    fontSize: FontSize.size_xs,
  },
  membres: {
    top: 400,
    left: 75,
    width: 65,
    height: 17,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  fileDattente: {
    left: 159,
    width: 75,
  },
  modifierLannonce1: {
    fontStyle: "italic",
    width: 108,
    height: 17,
  },
  modifierLannonce: {
    left: 143,
    top: 224,
    position: "absolute",
  },
  quitterLeGroupe: {
    left: 257,
    width: 102,
  },
  icons8People961: {
    top: 399,
    left: 19,
    width: 36,
    height: 36,
    position: "absolute",
  },
  kalashRigolekom1jnoun93Et: {
    top: "48.71%",
    left: "19.08%",
    fontWeight: "300",
    position: "absolute",
  },
  rectangleView: {
    top: 391,
  },
  message3Child1: {
    top: 446,
  },
  iconPersonAdd: {
    height: "3.46%",
    top: "36.62%",
    right: "73.64%",
    bottom: "59.92%",
    left: "18.32%",
    width: "8.04%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconHourglass: {
    height: "3.62%",
    width: "5.6%",
    top: "36.5%",
    right: "47.33%",
    bottom: "59.88%",
    left: "47.07%",
  },
  iconExitOutline: {
    top: "-122.54%",
    right: "1532.67%",
    bottom: "219.68%",
    left: "-1440.71%",
  },
  iconExitOutline1: {
    top: "37.09%",
    right: "18.42%",
    bottom: "60.06%",
    left: "73.54%",
  },
  x1: {
    fontFamily: FontFamily.interRegular,
  },
  x: {
    left: 373,
    top: 5,
    position: "absolute",
  },
  message3: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default Message3;
