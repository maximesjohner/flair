import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Message = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.message, styles.tabBarBg]}>
      <View style={styles.placeholder}>
        <View style={styles.placeholderChild} />
        <Text style={styles.recherchez}>Recherchez</Text>
        <View style={[styles.placeholderItem, styles.iconSearchPosition]} />
        <Image
          style={[styles.iconSearch, styles.iconSearchPosition]}
          contentFit="cover"
          source={require("../assets/-icon-search.png")}
        />
      </View>
      <View style={[styles.messageChild, styles.childLayout]} />
      <View style={styles.groupParent}>
        <View style={styles.rectangleLayout}>
          <View style={[styles.groupChild, styles.childLayout]} />
          <Image
            style={[styles.groupItem, styles.tabBarPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-4.png")}
          />
          <Text style={styles.bureau}>10.12.14 BUREAU</Text>
          <Text style={[styles.kalashSauvage, styles.kalashSauvagePosition]}>
            Kalash : sauvage
          </Text>
        </View>
        <Pressable
          style={[styles.rectangleGroup, styles.rectangleLayout]}
          onPress={() => navigation.navigate("Message1")}
        >
          <View style={[styles.groupChild, styles.childLayout]} />
          <Image
            style={[styles.groupItem, styles.tabBarPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-4.png")}
          />
          <Text style={styles.bureau}>Tom</Text>
          <Text style={[styles.kalashSauvage, styles.kalashSauvagePosition]}>
            Vous : wsh ça sort ????
          </Text>
        </Pressable>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={[styles.groupChild, styles.childLayout]} />
          <Image
            style={[styles.groupItem, styles.tabBarPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-4.png")}
          />
          <Text style={styles.bureau}>Djolanouille</Text>
          <Text style={[styles.kalashSauvage, styles.kalashSauvagePosition]}>
            Vous : A quelle heure au duplex du coup ?
          </Text>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={[styles.groupChild, styles.childLayout]} />
          <Image
            style={[styles.groupItem, styles.tabBarPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-4.png")}
          />
          <Text style={styles.bureau}>Naps</Text>
          <Text style={[styles.kalashSauvage, styles.kalashSauvagePosition]}>
            Naps : C’est la kiffance !
          </Text>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={[styles.groupChild, styles.childLayout]} />
          <Image
            style={[styles.groupItem, styles.tabBarPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-4.png")}
          />
          <Text style={styles.bureau}>Vue.js c’est so 2022</Text>
          <Text style={[styles.kalashSauvage, styles.kalashSauvagePosition]}>
            Aurélien : Qui y arrive pour l’auth ?
          </Text>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={[styles.groupChild, styles.childLayout]} />
          <Image
            style={[styles.groupItem, styles.tabBarPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-4.png")}
          />
          <Text style={styles.bureau}>Newwave</Text>
          <Text style={[styles.kalashSauvage, styles.kalashSauvagePosition]}>
            BenJ : J’adore R2D2 sur la nouvelle prod NewJazz...
          </Text>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={[styles.groupChild, styles.childLayout]} />
          <Image
            style={[styles.groupItem, styles.tabBarPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-4.png")}
          />
          <Text style={styles.bureau}>Georege Floyd</Text>
          <Text style={[styles.kalashSauvage, styles.kalashSauvagePosition]}>
            Vous : pk tu rep plus ?
          </Text>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={[styles.groupChild, styles.childLayout]} />
          <Image
            style={[styles.groupItem, styles.tabBarPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-4.png")}
          />
          <Text style={styles.bureau}>PouletAnanas</Text>
          <Text style={[styles.kalashSauvage, styles.kalashSauvagePosition]}>
            Iandry : tfaçon les blancs vous savez pas mettre d’...
          </Text>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={[styles.groupChild, styles.childLayout]} />
          <Image
            style={[styles.groupItem, styles.tabBarPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-4.png")}
          />
          <Text style={styles.bureau}>Dézingueur2Folles93</Text>
          <Text style={[styles.kalashSauvage, styles.kalashSauvagePosition]}>
            AD : On se revoit le prochain 20 Avril ?
          </Text>
        </View>
        <View style={styles.ellipseParent}>
          <Image
            style={[styles.groupItem, styles.tabBarPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-4.png")}
          />
          <Text style={styles.bureau}>PSG on top</Text>
          <Text style={[styles.stanislasAQuitt, styles.kalashSauvagePosition]}>
            Stanislas a quitté le groupe.
          </Text>
        </View>
      </View>
      <View style={[styles.tabBar, styles.tabBarPosition]}>
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
            source={require("../assets/map2.png")}
          />
          <Text style={[styles.label, styles.labelTypo]}>Map</Text>
        </Pressable>
        <View style={styles.tab}>
          <Image
            style={styles.cardsIcon}
            contentFit="cover"
            source={require("../assets/chat1.png")}
          />
          <Text style={[styles.label2, styles.labelTypo]}>Chat</Text>
        </View>
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
  tabBarBg: {
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
  },
  iconSearchPosition: {
    top: "30%",
    position: "absolute",
  },
  childLayout: {
    height: 1,
    width: 334,
    backgroundColor: Color.colorWhitesmoke_300,
    borderRadius: Border.br_3xs,
    left: "50%",
    position: "absolute",
  },
  tabBarPosition: {
    left: 0,
    position: "absolute",
  },
  kalashSauvagePosition: {
    fontSize: FontSize.size_xs,
    top: 21,
    color: Color.graysBlack,
    left: 39,
    textAlign: "left",
    position: "absolute",
  },
  rectangleLayout: {
    height: 50,
    width: 354,
  },
  labelTypo: {
    fontFamily: FontFamily.interMedium,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontWeight: "500",
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
    color: Color.colorDarkgray_100,
    textAlign: "left",
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
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
    marginLeft: -177.5,
    top: 70,
    width: 356,
    height: 30,
    left: "50%",
    position: "absolute",
  },
  messageChild: {
    marginLeft: -158.5,
    top: 125,
  },
  groupChild: {
    marginLeft: -157,
    top: 49,
  },
  groupItem: {
    top: 7,
    width: 31,
    height: 31,
  },
  bureau: {
    top: 0,
    color: Color.graysBlack,
    left: 39,
    textAlign: "left",
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  kalashSauvage: {
    fontFamily: FontFamily.nunitoRegular,
  },
  rectangleGroup: {
    marginTop: 11,
  },
  stanislasAQuitt: {
    fontStyle: "italic",
    fontWeight: "300",
    fontFamily: FontFamily.nunitoLightItalic,
  },
  ellipseParent: {
    width: 186,
    height: 38,
    marginTop: 11,
  },
  groupParent: {
    top: 129,
    left: 18,
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
  label2: {
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
    width: 393,
    height: 91,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_27xl,
    paddingVertical: Padding.p_3xs,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  message: {
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default Message;
