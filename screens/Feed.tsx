import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Feed = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.feed}>
      <View style={[styles.cardNormalScreen, styles.cardLayout]}>
        <Pressable
          style={[styles.rectangleParent, styles.vectorIconPosition]}
          onPress={() => navigation.navigate("Feed1")}
        >
          <Image
            style={[styles.groupChild, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/rectangle-171.png")}
          />
          <View style={[styles.tag1, styles.tagLayout1]}>
            <Text style={[styles.tags, styles.tagsTypo]}>tags</Text>
          </View>
          <View style={[styles.tag5, styles.tagLayout1]}>
            <Text style={[styles.tags, styles.tagsTypo]}>tags</Text>
          </View>
          <Pressable
            style={styles.iconPosition1}
            onPress={() => navigation.navigate("Feed1")}
          >
            <Image
              style={[styles.icon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/-icon-scan-outline.png")}
            />
          </Pressable>
          <View style={[styles.groupItem, styles.groupItemBg]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
        </Pressable>
        <View style={[styles.rectangleGroup, styles.groupPosition]}>
          <View style={[styles.rectangleView, styles.groupItemBg]} />
          <View style={styles.nousSommesSurParisPendantParent}>
            <Text
              style={[styles.nousSommesSur, styles.nousSommesSurClr]}
            >{`Nous sommes sur Paris pendant 3 jours venez nous voir on
est sympa ! On aime bien sortir et aller dans les bars...`}</Text>
            <Text style={[styles.toujoursPlusHaut, styles.nousSommesSurClr]}>
              2.7.0 toujours plus haut
            </Text>
            <Text style={[styles.kaarisB2oba, styles.ilYATypo]}>
              @kaaris, @b2oba
            </Text>
            <View style={styles.vectorParent}>
              <Image
                style={[styles.vectorIcon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/vector1.png")}
              />
              <Text
                style={[styles.avenueParmentierParis, styles.nousSommesSurClr]}
              >
                A 10 KM
              </Text>
            </View>
            <Text style={[styles.ilYA, styles.ilYATypo]}>il y a 2 min.</Text>
          </View>
          <Pressable
            style={styles.iconPosition}
            onPress={() => navigation.navigate("Message")}
          >
            <Image
              style={[styles.icon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/vector2.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={[styles.tag3, styles.tagFlexBox]}>
        <Text style={[styles.zzzzzz, styles.tagsTypo]}>zzzzzz</Text>
      </View>
      <View style={[styles.tag11, styles.tagFlexBox]}>
        <Text style={[styles.zzzzzz, styles.tagsTypo]}>tags</Text>
      </View>
      <View style={[styles.tag2, styles.tagLayout]}>
        <Text style={[styles.zzzzzz, styles.tagsTypo]}>tags</Text>
      </View>
      <View style={[styles.tag4, styles.tagLayout]}>
        <Text style={[styles.zzzzzz, styles.tagsTypo]}>tags</Text>
      </View>
      <View style={[styles.cardNormalScreen1, styles.cardLayout]}>
        <View style={[styles.rectangleParent, styles.vectorIconPosition]}>
          <Image
            style={[styles.groupChild, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/rectangle-171.png")}
          />
          <View style={[styles.tag1, styles.tagLayout1]}>
            <Text style={[styles.tags5, styles.tagsTypo]}>tags</Text>
          </View>
          <View style={[styles.tag5, styles.tagLayout1]}>
            <Text style={[styles.tags, styles.tagsTypo]}>tags</Text>
          </View>
          <Image
            style={[styles.iconScanOutline1, styles.iconPosition1]}
            contentFit="cover"
            source={require("../assets/-icon-scan-outline.png")}
          />
          <View style={[styles.groupItem, styles.groupItemBg]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
        </View>
        <View style={[styles.rectangleGroup, styles.groupPosition]}>
          <View style={[styles.rectangleView, styles.groupItemBg]} />
          <View style={styles.nousSommesSurParisPendantParent}>
            <Text
              style={[styles.nousSommesSur, styles.nousSommesSurClr]}
            >{`Nous sommes sur Paris pendant 3 jours venez nous voir on
est sympa ! On aime bien sortir et aller dans les bars...`}</Text>
            <Text style={[styles.toujoursPlusHaut, styles.nousSommesSurClr]}>
              2.7.0 toujours plus haut
            </Text>
            <Text style={[styles.kaarisB2oba, styles.ilYATypo]}>
              @kaaris, @b2oba
            </Text>
            <View style={styles.vectorParent}>
              <Image
                style={[styles.vectorIcon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/vector1.png")}
              />
              <Text
                style={[styles.avenueParmentierParis, styles.nousSommesSurClr]}
              >
                A 10 KM
              </Text>
            </View>
            <Text style={[styles.ilYA, styles.ilYATypo]}>il y a 2 min.</Text>
          </View>
          <Pressable
            style={styles.iconPosition}
            onPress={() => navigation.navigate("Message1")}
          >
            <Image
              style={[styles.icon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/vector2.png")}
            />
          </Pressable>
        </View>
      </View>
      <Image
        style={[styles.iconMail2, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.iconMail3, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Pressable
        style={styles.addAPost}
        onPress={() => navigation.navigate("AjoutDePost")}
      >
        <Image
          style={styles.icon3}
          contentFit="cover"
          source={require("../assets/add-a-post.png")}
        />
      </Pressable>
      <View style={[styles.cardNormalScreen2, styles.cardLayout]}>
        <View style={[styles.rectangleParent, styles.vectorIconPosition]}>
          <Image
            style={[styles.groupChild, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/rectangle-171.png")}
          />
          <View style={[styles.tag1, styles.tagLayout1]}>
            <Text style={[styles.tags, styles.tagsTypo]}>tags</Text>
          </View>
          <View style={[styles.tag5, styles.tagLayout1]}>
            <Text style={[styles.tags, styles.tagsTypo]}>tags</Text>
          </View>
          <Image
            style={[styles.iconScanOutline1, styles.iconPosition1]}
            contentFit="cover"
            source={require("../assets/-icon-scan-outline.png")}
          />
          <View style={[styles.groupItem, styles.groupItemBg]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
        </View>
        <View style={[styles.rectangleGroup, styles.groupPosition]}>
          <View style={[styles.rectangleView, styles.groupItemBg]} />
          <View style={styles.nousSommesSurParisPendantParent}>
            <Text
              style={[styles.nousSommesSur, styles.nousSommesSurClr]}
            >{`Nous sommes sur Paris pendant 3 jours venez nous voir on
est sympa ! On aime bien sortir et aller dans les bars...`}</Text>
            <Text style={[styles.toujoursPlusHaut, styles.nousSommesSurClr]}>
              2.7.0 toujours plus haut
            </Text>
            <Text style={[styles.kaarisB2oba, styles.ilYATypo]}>
              @kaaris, @b2oba
            </Text>
            <View style={styles.vectorParent}>
              <Image
                style={[styles.vectorIcon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/vector1.png")}
              />
              <Text
                style={[styles.avenueParmentierParis, styles.nousSommesSurClr]}
              >
                A 10 KM
              </Text>
            </View>
            <Text style={[styles.ilYA, styles.ilYATypo]}>il y a 2 min.</Text>
          </View>
          <Image
            style={[styles.iconMail4, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
        </View>
      </View>
      <View style={[styles.redflagsWrapper, styles.redflagsLayout]}>
        <Text style={[styles.redflags, styles.tabBarPosition]}>2 REDFLAGS</Text>
      </View>
      <View style={[styles.redflagsContainer, styles.redflagsLayout]}>
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
  vectorIconPosition: {
    left: "0%",
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  tagLayout1: {
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
  nousSommesSurClr: {
    color: Color.colorGray_300,
    textAlign: "left",
    position: "absolute",
  },
  ilYATypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.colorGray_300,
    textAlign: "left",
    position: "absolute",
  },
  tagFlexBox: {
    paddingHorizontal: Padding.p_3xs,
    borderRadius: Border.br_10xs,
    top: 146,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  tagLayout: {
    height: 21,
    width: 53,
    backgroundColor: Color.colorViolet,
    borderRadius: Border.br_10xs,
    top: 146,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_6xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition1: {
    height: "9.27%",
    width: "5.28%",
    bottom: "80%",
    right: "3.89%",
    top: "10.73%",
    left: "90.83%",
    position: "absolute",
  },
  iconLayout: {
    width: "3.89%",
    height: "1.41%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    height: "9.45%",
    width: "4.25%",
    bottom: "82.68%",
    right: "3.25%",
    top: "7.87%",
    left: "92.5%",
    position: "absolute",
  },
  redflagsLayout: {
    height: 15,
    width: 73,
    left: 295,
    position: "absolute",
  },
  tabBarPosition: {
    left: 0,
    position: "absolute",
  },
  labelTypo: {
    fontFamily: FontFamily.interMedium,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontWeight: "500",
  },
  groupChild: {
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
    height: "100%",
    top: "0%",
    position: "absolute",
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
    left: "3.61%",
  },
  tag5: {
    right: "70.83%",
    left: "17.5%",
    backgroundColor: Color.colorPaleturquoise,
    display: "none",
  },
  icon: {
    height: "100%",
    width: "100%",
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
    right: "0%",
    left: "0%",
    top: "0%",
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
    left: "0.59%",
    color: Color.colorGray_300,
  },
  toujoursPlusHaut: {
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    left: "0.59%",
    color: Color.colorGray_300,
    top: "0%",
  },
  kaarisB2oba: {
    top: "15.32%",
    fontSize: FontSize.size_xs,
    fontWeight: "300",
    left: "0%",
  },
  vectorIcon: {
    height: "64%",
    width: "11.92%",
    top: "18%",
    right: "88.08%",
    bottom: "18%",
    left: "0%",
    position: "absolute",
  },
  avenueParmentierParis: {
    left: "18.83%",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    top: "0%",
  },
  vectorParent: {
    height: "13.51%",
    width: "17.13%",
    top: "29.73%",
    right: "82.25%",
    bottom: "56.76%",
    left: "0.62%",
    position: "absolute",
  },
  ilYA: {
    top: "88.29%",
    left: "82.54%",
    fontSize: FontSize.size_2xs,
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
  rectangleGroup: {
    height: "39.69%",
    top: "60.31%",
    position: "absolute",
  },
  cardNormalScreen: {
    top: 130,
  },
  zzzzzz: {
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  tag3: {
    left: 221,
    backgroundColor: Color.colorCornflowerblue,
  },
  tag11: {
    left: 158,
    backgroundColor: Color.colorAquamarine,
  },
  tag2: {
    left: 30,
  },
  tag4: {
    left: 94,
  },
  tags5: {
    textAlign: "left",
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
    display: "none",
  },
  iconScanOutline1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  cardNormalScreen1: {
    top: 459,
  },
  iconMail2: {
    top: "1.17%",
    right: "11.37%",
    bottom: "97.42%",
    left: "84.73%",
  },
  iconMail3: {
    top: "75.47%",
    right: "-41.3%",
    bottom: "23.12%",
    left: "137.4%",
  },
  icon3: {
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
  iconMail4: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  cardNormalScreen2: {
    top: -199,
  },
  redflags: {
    top: 0,
    color: Color.colorDarkred,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  redflagsWrapper: {
    top: 353,
  },
  redflagsContainer: {
    top: 677,
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
  feed: {
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Feed;
