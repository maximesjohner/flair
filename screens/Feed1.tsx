import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Feed1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.feed2}>
      <View style={[styles.cardNormalScreen, styles.cardLayout]}>
        <View style={styles.rectangleParent}>
          <Image
            style={[styles.groupChild, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-171.png")}
          />
          <View style={[styles.tag1, styles.tagLayout2]}>
            <Text style={[styles.tags, styles.tagsTypo]}>tags</Text>
          </View>
          <View style={[styles.tag5, styles.tagLayout2]}>
            <Text style={[styles.tags, styles.tagsTypo]}>tags</Text>
          </View>
          <Image
            style={[styles.iconScanOutline, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/-icon-scan-outline1.png")}
          />
          <View style={[styles.groupItem, styles.groupItemBg]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
        </View>
        <View style={[styles.rectangleGroup, styles.groupPosition]}>
          <View style={[styles.rectangleView, styles.groupItemBg]} />
          <View style={styles.nousSommesSurParisPendantParent}>
            <Text
              style={[styles.nousSommesSur, styles.a10kmClr]}
            >{`Nous sommes sur Paris pendant 3 jours venez nous voir on
est sympa ! On aime bien sortir et aller dans les bars...`}</Text>
            <Text style={[styles.toujoursPlusHaut, styles.a10kmClr]}>
              2.7.0 toujours plus haut
            </Text>
            <Text style={[styles.kaarisB2oba, styles.kaarisTypo]}>
              @kaaris, @b2oba
            </Text>
            <View style={styles.vectorParent}>
              <Image
                style={[styles.vectorIcon, styles.vectorIconPosition]}
                contentFit="cover"
                source={require("../assets/vector1.png")}
              />
              <Text style={[styles.avenueParmentierParis, styles.a10kmClr]}>
                95 Avenue Parmentier, Paris 75011
              </Text>
            </View>
            <Text style={[styles.ilYA, styles.ilYATypo]}>il y a 2 min.</Text>
          </View>
          <Image
            style={[styles.iconMail, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
        </View>
      </View>
      <View style={[styles.tag3, styles.tagSpaceBlock]}>
        <Text style={[styles.zzzzzz, styles.tagsTypo]}>zzzzzz</Text>
      </View>
      <View style={[styles.tag11, styles.tagPosition]}>
        <Text style={[styles.zzzzzz, styles.tagsTypo]}>tags</Text>
      </View>
      <View style={[styles.tag2, styles.tagLayout1]}>
        <Text style={[styles.zzzzzz, styles.tagsTypo]}>tags</Text>
      </View>
      <View style={[styles.tag4, styles.tagLayout]}>
        <Text style={[styles.zzzzzz, styles.tagsTypo]}>tags</Text>
      </View>
      <View style={[styles.cardNormalScreen1, styles.cardLayout]}>
        <View style={styles.rectangleParent}>
          <Image
            style={[styles.groupChild, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-171.png")}
          />
          <View style={[styles.tag1, styles.tagLayout2]}>
            <Text style={[styles.tags5, styles.tagsTypo]}>tags</Text>
          </View>
          <View style={[styles.tag5, styles.tagLayout2]}>
            <Text style={[styles.tags, styles.tagsTypo]}>tags</Text>
          </View>
          <Image
            style={[styles.iconScanOutline, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/-icon-scan-outline1.png")}
          />
          <View style={[styles.groupItem, styles.groupItemBg]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
        </View>
        <View style={[styles.rectangleGroup, styles.groupPosition]}>
          <View style={[styles.rectangleView, styles.groupItemBg]} />
          <View style={styles.nousSommesSurParisPendantParent}>
            <Text
              style={[styles.nousSommesSur, styles.a10kmClr]}
            >{`Nous sommes sur Paris pendant 3 jours venez nous voir on
est sympa ! On aime bien sortir et aller dans les bars...`}</Text>
            <Text style={[styles.toujoursPlusHaut, styles.a10kmClr]}>
              2.7.0 toujours plus haut
            </Text>
            <Text style={[styles.kaarisB2oba, styles.kaarisTypo]}>
              @kaaris, @b2oba
            </Text>
            <View style={styles.vectorParent}>
              <Image
                style={[styles.vectorIcon, styles.vectorIconPosition]}
                contentFit="cover"
                source={require("../assets/vector1.png")}
              />
              <Text style={[styles.avenueParmentierParis, styles.a10kmClr]}>
                95 Avenue Parmentier, Paris 75011
              </Text>
            </View>
            <Text style={[styles.ilYA, styles.ilYATypo]}>il y a 2 min.</Text>
          </View>
          <Image
            style={[styles.iconMail, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
        </View>
      </View>
      <View style={[styles.tag31, styles.tagFlexBox]}>
        <Text style={[styles.zzzzzz, styles.tagsTypo]}>zzzzzz</Text>
      </View>
      <View style={[styles.tag13, styles.tagFlexBox]}>
        <Text style={[styles.zzzzzz, styles.tagsTypo]}>tags</Text>
      </View>
      <View style={[styles.groupe1, styles.groupe1Position]} />
      <Image
        style={styles.feed2Child}
        contentFit="cover"
        source={require("../assets/group-12.png")}
      />
      <Text
        style={[styles.nousSommesSur2, styles.kaarisB2oba2Position]}
      >{`Nous sommes sur Paris pendant 3 jours venez nous voir on
est sympa ! On aime bien sortir et aller dans les bars hesitez
pas à venir nous parler.`}</Text>
      <Text style={styles.toujoursPlusHaut2}>2.7.0 Toujours plus haut</Text>
      <Text style={[styles.kaarisB2oba2, styles.kaarisB2oba2Position]}>
        @kaaris, @b2oba
      </Text>
      <View style={styles.vectorContainer}>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Text style={[styles.a10km, styles.a10kmTypo]}>A 10KM</Text>
      </View>
      <View style={[styles.feed2Item, styles.feed2Layout]} />
      <View style={[styles.feed2Inner, styles.feed2Layout]} />
      <View style={[styles.tag21, styles.tagFlexBox]}>
        <Text style={[styles.zzzzzz, styles.tagsTypo]}>tags</Text>
      </View>
      <View style={[styles.tag41, styles.tagFlexBox]}>
        <Text style={[styles.zzzzzz, styles.tagsTypo]}>tags</Text>
      </View>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Message1")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
      </Pressable>
      <Text style={[styles.ilYA2, styles.ilYATypo]}>il y a 2 min.</Text>
      <Pressable
        style={styles.addAPost}
        onPress={() => navigation.navigate("AjoutDePost")}
      >
        <Image
          style={styles.icon1}
          contentFit="cover"
          source={require("../assets/add-a-post.png")}
        />
      </Pressable>
      <View style={styles.redflagsWrapper}>
        <Text style={[styles.redflags, styles.tabBarPosition]}>2 REDFLAGS</Text>
      </View>
      <View style={[styles.tabBar, styles.tabBarPosition]}>
        <View style={styles.tab}>
          <Image
            style={styles.cardsIcon}
            contentFit="cover"
            source={require("../assets/cards1.png")}
          />
          <Text style={[styles.label, styles.labelTypo]}>Flair</Text>
        </View>
        <Pressable
          style={styles.tab}
          onPress={() => navigation.navigate("Map1")}
        >
          <Image
            style={styles.cardsIcon}
            contentFit="cover"
            source={require("../assets/map1.png")}
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
    </View>
  );
};

const styles = StyleSheet.create({
  cardLayout: {
    height: 320,
    width: 360,
    left: 17,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  tagLayout2: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_6xl,
    borderRadius: Border.br_6xs,
    bottom: "81.95%",
    top: "9.27%",
    width: "11.67%",
    height: "8.78%",
    display: "none",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  tagsTypo: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  groupItemBg: {
    backgroundColor: Color.colorWhitesmoke_200,
    position: "absolute",
  },
  groupLayout: {
    borderRadius: Border.br_31xl,
    bottom: "95.61%",
    top: "2.93%",
    height: "1.46%",
  },
  groupPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  a10kmClr: {
    color: Color.colorGray_300,
    position: "absolute",
  },
  kaarisTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  vectorIconPosition: {
    bottom: "18%",
    top: "18%",
    height: "64%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  ilYATypo: {
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.colorGray_300,
    textAlign: "left",
    position: "absolute",
  },
  tagSpaceBlock: {
    paddingHorizontal: Padding.p_3xs,
    backgroundColor: Color.colorCornflowerblue,
    left: 221,
  },
  tagPosition: {
    left: 158,
    paddingHorizontal: Padding.p_3xs,
    backgroundColor: Color.colorAquamarine,
  },
  tagLayout1: {
    height: 21,
    width: 53,
    backgroundColor: Color.colorViolet,
    left: 30,
    paddingHorizontal: Padding.p_6xl,
  },
  tagLayout: {
    left: 94,
    height: 21,
    width: 53,
    backgroundColor: Color.colorViolet,
    paddingHorizontal: Padding.p_6xl,
  },
  tagFlexBox: {
    top: 156,
    borderRadius: Border.br_10xs,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  groupe1Position: {
    borderTopRightRadius: Border.br_xl,
    borderTopLeftRadius: Border.br_xl,
    position: "absolute",
  },
  kaarisB2oba2Position: {
    left: 29,
    color: Color.colorGray_300,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  a10kmTypo: {
    top: 0,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  feed2Layout: {
    height: 3,
    top: 142,
    borderRadius: Border.br_31xl,
    position: "absolute",
  },
  tabBarPosition: {
    left: 0,
    position: "absolute",
  },
  labelTypo: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interMedium,
    textAlign: "left",
    fontWeight: "500",
  },
  groupChild: {
    borderTopRightRadius: Border.br_xl,
    borderTopLeftRadius: Border.br_xl,
    position: "absolute",
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
    height: "100%",
    top: "0%",
  },
  tags: {
    textAlign: "left",
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
  },
  tag1: {
    right: "84.72%",
    display: "none",
    backgroundColor: Color.colorAquamarine,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_6xl,
    borderRadius: Border.br_6xs,
    left: "3.61%",
    bottom: "81.95%",
    top: "9.27%",
    width: "11.67%",
    height: "8.78%",
  },
  tag5: {
    right: "70.83%",
    left: "17.5%",
    backgroundColor: Color.colorPaleturquoise,
    display: "none",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_6xl,
    borderRadius: Border.br_6xs,
    bottom: "81.95%",
    top: "9.27%",
    width: "11.67%",
    height: "8.78%",
  },
  iconScanOutline: {
    height: "9.27%",
    width: "5.28%",
    top: "10.73%",
    right: "3.89%",
    bottom: "80%",
    left: "90.83%",
    position: "absolute",
  },
  groupItem: {
    width: "43.61%",
    right: "52.22%",
    left: "4.17%",
    borderRadius: Border.br_31xl,
    bottom: "95.61%",
    top: "2.93%",
    height: "1.46%",
  },
  groupInner: {
    width: "37.78%",
    right: "7.5%",
    left: "54.72%",
    backgroundColor: Color.colorLightgray,
    position: "absolute",
  },
  rectangleParent: {
    height: "64.06%",
    bottom: "35.94%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  rectangleView: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
    height: "100%",
    top: "0%",
  },
  nousSommesSur: {
    top: "55.86%",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    color: Color.colorGray_300,
    textAlign: "left",
    left: "0.59%",
  },
  toujoursPlusHaut: {
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    left: "0.59%",
    textAlign: "left",
    top: "0%",
  },
  kaarisB2oba: {
    top: "15.32%",
    color: Color.colorGray_300,
    position: "absolute",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    left: "0%",
  },
  vectorIcon: {
    width: "3.33%",
    right: "96.67%",
  },
  avenueParmentierParis: {
    left: "5.27%",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    color: Color.colorGray_300,
    textAlign: "left",
    top: "0%",
  },
  vectorParent: {
    height: "13.51%",
    width: "61.21%",
    top: "29.73%",
    right: "38.17%",
    bottom: "56.76%",
    left: "0.62%",
    position: "absolute",
  },
  ilYA: {
    top: "88.29%",
    left: "82.54%",
  },
  nousSommesSurParisPendantParent: {
    height: "87.4%",
    width: "93.89%",
    top: "6.3%",
    right: "2.5%",
    bottom: "6.3%",
    left: "3.61%",
    position: "absolute",
  },
  iconMail: {
    height: "9.45%",
    width: "4.25%",
    top: "7.87%",
    right: "3.25%",
    bottom: "82.68%",
    left: "92.5%",
    position: "absolute",
  },
  rectangleGroup: {
    height: "39.69%",
    top: "60.31%",
    position: "absolute",
  },
  cardNormalScreen: {
    top: -213,
  },
  zzzzzz: {
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  tag3: {
    borderRadius: Border.br_10xs,
    top: -187,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  tag11: {
    borderRadius: Border.br_10xs,
    top: -187,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  tag2: {
    borderRadius: Border.br_10xs,
    top: -187,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  tag4: {
    borderRadius: Border.br_10xs,
    top: -187,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  tags5: {
    textAlign: "left",
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
    display: "none",
  },
  cardNormalScreen1: {
    top: 740,
  },
  tag31: {
    paddingHorizontal: Padding.p_3xs,
    backgroundColor: Color.colorCornflowerblue,
    left: 221,
  },
  tag13: {
    left: 158,
    paddingHorizontal: Padding.p_3xs,
    backgroundColor: Color.colorAquamarine,
  },
  groupe1: {
    top: 132,
    left: 377,
    height: 480,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    width: 360,
  },
  feed2Child: {
    top: 131,
    height: 589,
    width: 360,
    left: 17,
    position: "absolute",
  },
  nousSommesSur2: {
    top: 657,
    fontFamily: FontFamily.interRegular,
  },
  toujoursPlusHaut2: {
    top: 598,
    color: Color.graysBlack,
    fontFamily: FontFamily.interMedium,
    left: 30,
    textAlign: "left",
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  kaarisB2oba2: {
    top: 615,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  vectorIcon2: {
    width: "12.8%",
    right: "87.2%",
  },
  a10km: {
    left: 11,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.colorGray_300,
    position: "absolute",
  },
  vectorContainer: {
    height: "1.76%",
    width: "13.72%",
    top: "74.18%",
    right: "78.63%",
    bottom: "24.06%",
    left: "7.66%",
    position: "absolute",
  },
  feed2Item: {
    width: 157,
    left: 30,
    height: 3,
    top: 142,
    backgroundColor: Color.colorWhitesmoke_200,
  },
  feed2Inner: {
    left: 212,
    width: 136,
    backgroundColor: Color.colorLightgray,
  },
  tag21: {
    height: 21,
    width: 53,
    backgroundColor: Color.colorViolet,
    left: 30,
    paddingHorizontal: Padding.p_6xl,
  },
  tag41: {
    left: 94,
    height: 21,
    width: 53,
    backgroundColor: Color.colorViolet,
    paddingHorizontal: Padding.p_6xl,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "88.3%",
    top: "70.19%",
    right: "7.81%",
    bottom: "28.4%",
    width: "3.89%",
    height: "1.41%",
    position: "absolute",
  },
  ilYA2: {
    top: "82.04%",
    left: "77.61%",
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  addAPost: {
    left: 338,
    top: 693,
    width: 46,
    height: 46,
    position: "absolute",
  },
  redflags: {
    color: Color.colorDarkred,
    top: 0,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  redflagsWrapper: {
    top: 617,
    left: 289,
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
    color: Color.colorDarkorange,
  },
  tab: {
    width: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  label1: {
    color: Color.colorDimgray,
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
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_27xl,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
    left: 0,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  feed2: {
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Feed1;
