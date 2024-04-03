import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Status1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.status}>
      <View style={styles.statusChild} />
      <Text style={[styles.jeReste2, styles.jeReste2Typo]}>
        Je reste 2 jours
      </Text>
      <Text style={[styles.creTonStatut, styles.jeReste2Typo]}>
        Crée ton statut !
      </Text>
      <Text
        style={[styles.nousAvonsRemarqu, styles.personneNeVerraTypo]}
      >{`Nous avons remarqué que tu étais à Paris.
Pour combien de temps restes-tu ?`}</Text>
      <Text
        style={[styles.personneNeVerra, styles.personneNeVerraTypo]}
      >{`Personne ne verra ton statut tant
 que tu ne publies pas une annonce !`}</Text>
      <View style={[styles.slider, styles.sliderLayout1]}>
        <View style={[styles.sliderChild, styles.sliderChildLayout]} />
        <View style={[styles.sliderItem, styles.sliderChildLayout]} />
        <Image
          style={[styles.sliderInner, styles.iconSearchLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
      </View>
      <Pressable
        style={styles.flair}
        onPress={() => navigation.navigate("Feed")}
      >
        <View style={[styles.flairChild, styles.childPosition]} />
        <Text style={styles.flaire}>Flaire</Text>
      </Pressable>
      <View style={[styles.placeholder, styles.sliderLayout1]}>
        <View style={[styles.placeholderChild, styles.childPosition]} />
        <Text style={styles.recherchez}>Modifier ma localisation</Text>
        <View style={[styles.placeholderItem, styles.iconSearchPosition]} />
        <Image
          style={[styles.iconSearch, styles.iconSearchPosition]}
          contentFit="cover"
          source={require("../assets/-icon-search1.png")}
        />
      </View>
      <View style={[styles.statusItem, styles.itemBg]} />
      <View style={[styles.tabBar, styles.sliderShadowBox]}>
        <Pressable
          style={styles.tab}
          onPress={() => navigation.navigate("Feed")}
        >
          <Image
            style={styles.cardsIcon}
            contentFit="cover"
            source={require("../assets/cards1.png")}
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
            source={require("../assets/map2.png")}
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
          <Text style={[styles.label1, styles.labelTypo]}>Chat</Text>
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
          <Text style={[styles.label1, styles.labelTypo]}>Profil</Text>
        </Pressable>
      </View>
      <View style={styles.statusInner} />
    </View>
  );
};

const styles = StyleSheet.create({
  jeReste2Typo: {
    textAlign: "left",
    color: Color.graysBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  personneNeVerraTypo: {
    textAlign: "center",
    fontSize: FontSize.size_sm,
    color: Color.graysBlack,
    fontFamily: FontFamily.interRegular,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  sliderLayout1: {
    height: 31,
    position: "absolute",
  },
  sliderChildLayout: {
    borderRadius: Border.br_81xl,
    right: "0%",
  },
  iconSearchLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  childPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  iconSearchPosition: {
    display: "none",
    top: "30%",
    position: "absolute",
  },
  itemBg: {
    backgroundColor: Color.colorDarkgray_100,
    borderRadius: Border.br_8xs,
  },
  sliderShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  labelTypo: {
    fontFamily: FontFamily.interMedium,
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    textAlign: "left",
  },
  statusChild: {
    top: 157,
    left: 17,
    backgroundColor: Color.colorGainsboro_300,
    width: 360,
    height: 500,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  jeReste2: {
    marginTop: -12,
    marginLeft: -72.5,
  },
  creTonStatut: {
    marginTop: -247,
    marginLeft: -76.5,
  },
  nousAvonsRemarqu: {
    marginTop: -209,
    marginLeft: -138.5,
  },
  personneNeVerra: {
    marginTop: 35,
    marginLeft: -120.5,
  },
  sliderChild: {
    backgroundColor: "#f10b0b",
    left: "0%",
    width: "100%",
    bottom: "29.03%",
    top: "32.26%",
    height: "38.71%",
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  sliderItem: {
    width: "49.07%",
    left: "50.93%",
    bottom: "29.03%",
    top: "32.26%",
    height: "38.71%",
    borderRadius: Border.br_81xl,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  sliderInner: {
    width: "14.49%",
    right: "42.52%",
    left: "42.99%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  slider: {
    top: 367,
    left: 90,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    width: 214,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  flairChild: {
    backgroundColor: Color.colorGray_200,
    left: "0%",
    width: "100%",
    right: "0%",
    top: "0%",
    height: "100%",
    borderRadius: Border.br_xl,
  },
  flaire: {
    top: "26.32%",
    left: "45.81%",
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  flair: {
    top: 540,
    left: 32,
    width: 334,
    height: 38,
    position: "absolute",
  },
  placeholderChild: {
    borderRadius: Border.br_81xl,
    right: "0%",
    left: "0%",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  recherchez: {
    top: "23.23%",
    left: "3.94%",
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.nunitoMedium,
    color: Color.colorDarkgray_100,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  placeholderItem: {
    height: "50%",
    width: "0.29%",
    right: "75.56%",
    bottom: "20%",
    left: "24.15%",
    backgroundColor: Color.colorDarkgray_100,
    borderRadius: Border.br_8xs,
  },
  iconSearch: {
    height: "40%",
    width: "3.36%",
    right: "3.39%",
    bottom: "30%",
    left: "93.25%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  placeholder: {
    marginLeft: -135.5,
    top: 293,
    width: 277,
    left: "50%",
    height: 31,
  },
  statusItem: {
    height: "1.76%",
    width: "0.25%",
    top: "35.45%",
    right: "44.78%",
    bottom: "62.79%",
    left: "54.96%",
    position: "absolute",
  },
  cardsIcon: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  label: {
    color: Color.colorDarkorange,
  },
  tab: {
    alignItems: "center",
    justifyContent: "center",
    width: 24,
  },
  label1: {
    color: Color.colorDimgray,
  },
  tabBar: {
    top: 761,
    left: 0,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 8,
    elevation: 8,
    width: 393,
    height: 91,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_27xl,
    paddingVertical: Padding.p_3xs,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  statusInner: {
    top: 505,
    left: 154,
    width: 100,
    height: 100,
    position: "absolute",
    overflow: "hidden",
  },
  status: {
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Status1;
