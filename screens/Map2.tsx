import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Component from "../components/Component";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Map2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.map2, styles.map2Bg]}>
      <Image
        style={[styles.image1Icon, styles.map2Position]}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <Text style={styles.fouteur}>fouteur</Text>
      <Component onComponent1Press={() => navigation.navigate("Map2")} />
      <Image
        style={[styles.map2Child, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-17.png")}
      />
      <LinearGradient
        style={[styles.map2Item, styles.map2Position]}
        locations={[0, 0.51, 1]}
        colors={[
          "#d9d9d9",
          "rgba(255, 255, 255, 0)",
          "rgba(217, 217, 217, 0.48)",
        ]}
      />
      <Pressable
        style={[styles.groupe3Parent, styles.groupe3Layout]}
        onPress={() => navigation.navigate("Map1")}
      >
        <Image
          style={[styles.groupe3Icon, styles.groupe3Layout]}
          contentFit="cover"
          source={require("../assets/groupe-3.png")}
        />
        <View style={[styles.groupChild, styles.groupe3Layout]} />
        <View style={[styles.groupItem, styles.groupLayout]} />
        <View style={[styles.groupInner, styles.groupLayout]} />
      </Pressable>
      <Text
        style={styles.nousSommesSur}
      >{`Nous sommes sur Paris pendant 3 jours venez nous voir on
est sympa ! On aime bien sortir et aller dans les bars hesitez
pas à venir nous parler.`}</Text>
      <Text style={styles.toujoursPlusHaut}>2.7.0 Toujours plus haut</Text>
      <Text style={[styles.kaarisB2oba, styles.ilYATypo]}>@kaaris, @b2oba</Text>
      <View style={styles.vectorParent}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Text style={[styles.avenueParmentierParis, styles.ilYATypo]}>
          95 Avenue Parmentier, Paris 75011
        </Text>
      </View>
      <Text style={[styles.ilYA, styles.ilYATypo]}>il y a 2 min.</Text>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Message1")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
      </Pressable>
      <Image
        style={[styles.map2Inner, styles.map2Position]}
        contentFit="cover"
        source={require("../assets/rectangle-31.png")}
      />
      <View style={styles.redflagsWrapper}>
        <Text style={styles.redflags}>2 REDFLAGS</Text>
      </View>
      <View style={[styles.tabBar, styles.map2Position]}>
        <Pressable
          style={styles.tab}
          onPress={() => navigation.navigate("Feed")}
        >
          <Image
            style={styles.cardsIcon}
            contentFit="cover"
            source={require("../assets/cards.png")}
          />
          <Text style={[styles.label, styles.labelTypo]}>Flair</Text>
        </Pressable>
        <Pressable
          style={styles.tab}
          onPress={() => navigation.navigate("Map1")}
        >
          <Image
            style={styles.cardsIcon}
            contentFit="cover"
            source={require("../assets/map.png")}
          />
          <Text style={[styles.label1, styles.labelTypo]}>Map</Text>
        </Pressable>
        <Pressable
          style={styles.tab}
          onPress={() => navigation.navigate("Message")}
        >
          <Image
            style={styles.cardsIcon}
            contentFit="cover"
            source={require("../assets/chat.png")}
          />
          <Text style={[styles.label, styles.labelTypo]}>Chat</Text>
        </Pressable>
        <Pressable
          style={styles.tab}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={styles.cardsIcon}
            contentFit="cover"
            source={require("../assets/profilecircle.png")}
          />
          <Text style={[styles.label, styles.labelTypo]}>Profil</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  map2Bg: {
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
  },
  map2Position: {
    width: 393,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupe3Layout: {
    width: 360,
    position: "absolute",
  },
  groupLayout: {
    height: 3,
    borderRadius: Border.br_31xl,
    top: 10,
    position: "absolute",
  },
  ilYATypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.colorGray_300,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  labelTypo: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  image1Icon: {
    top: -9,
    height: 810,
  },
  fouteur: {
    top: 811,
    left: 172,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.graysBlack,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  map2Child: {
    height: "12.09%",
    width: "56.49%",
    top: "17.72%",
    right: "-2.8%",
    bottom: "70.19%",
    left: "46.31%",
    borderTopLeftRadius: Border.br_2xs,
    position: "absolute",
  },
  map2Item: {
    height: 787,
    backgroundColor: "transparent",
    top: 0,
  },
  groupe3Icon: {
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    height: 467,
    top: 0,
    left: 0,
    width: 360,
  },
  groupChild: {
    top: 454,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGainsboro_300,
    height: 163,
    left: 0,
    width: 360,
  },
  groupItem: {
    backgroundColor: Color.colorWhitesmoke_200,
    width: 157,
    left: 17,
  },
  groupInner: {
    left: 199,
    backgroundColor: Color.colorLightgray,
    width: 136,
  },
  groupe3Parent: {
    top: 67,
    height: 617,
    left: 17,
  },
  nousSommesSur: {
    top: 600,
    color: Color.colorGray_300,
    fontSize: FontSize.size_xs,
    left: 29,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  toujoursPlusHaut: {
    top: 533,
    left: 30,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.graysBlack,
    position: "absolute",
  },
  kaarisB2oba: {
    top: 550,
    left: 29,
    fontWeight: "300",
  },
  vectorIcon: {
    height: "64%",
    width: "3.4%",
    top: "18%",
    right: "96.6%",
    bottom: "18%",
    left: "0%",
    position: "absolute",
  },
  avenueParmentierParis: {
    left: 11,
    top: 0,
  },
  vectorParent: {
    height: "1.76%",
    width: "51.63%",
    top: "66.55%",
    right: "40.71%",
    bottom: "31.69%",
    left: "7.66%",
    position: "absolute",
  },
  ilYA: {
    top: 657,
    left: 306,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "90.08%",
    top: "63.15%",
    right: "6.03%",
    bottom: "35.45%",
    width: "3.89%",
    height: "1.41%",
    position: "absolute",
  },
  map2Inner: {
    top: 787,
    height: 65,
  },
  redflags: {
    color: Color.colorDarkred,
    fontSize: FontSize.size_xs,
    top: 0,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    left: 0,
    position: "absolute",
  },
  redflagsWrapper: {
    top: 555,
    left: 298,
    width: 73,
    height: 15,
    position: "absolute",
  },
  cardsIcon: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  label: {
    color: Color.colorDimgray,
  },
  tab: {
    alignItems: "center",
    justifyContent: "center",
    width: 24,
  },
  label1: {
    color: Color.colorDarkorange,
  },
  tabBar: {
    top: 761,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    height: 91,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_27xl,
    paddingVertical: Padding.p_3xs,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  map2: {
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default Map2;
