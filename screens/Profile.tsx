import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.profile}>
      <Image
        style={styles.profileChild}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <View style={[styles.profileItem, styles.profileLayout]} />
      <View style={[styles.profileInner, styles.profileLayout]} />
      <Text style={[styles.tags, styles.tagsPosition]}>Tags</Text>
      <Text style={[styles.biographie, styles.tagsPosition]}>Biographie</Text>
      <Text style={[styles.badges, styles.tagsPosition]}>Badges</Text>
      <Text style={[styles.groupes, styles.tagsPosition]}>Groupes</Text>
      <Text style={[styles.posts, styles.tagsPosition]}>Posts</Text>
      <Text style={[styles.ajtSnapPr, styles.lesPosition]}>
        Ajt snap pr D bombones pas cher @rigolekom1jnoun93
      </Text>
      <Text style={[styles.lesGLes, styles.lesPosition]}>
        les g, les homies, F.R.I.E.N.D...
      </Text>
      <Text style={[styles.rigolekom1jnoun93, styles.tagsPosition]}>
        @RigoleKom1Jnoun93
      </Text>
      <View style={styles.rectangleView} />
      <View style={[styles.tabBar, styles.tabBarPosition]}>
        <Pressable
          style={[styles.tab, styles.tabFlexBox]}
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
          style={[styles.tab, styles.tabFlexBox]}
          onPress={() => navigation.navigate("Map1")}
        >
          <Image
            style={styles.cardsIcon}
            contentFit="cover"
            source={require("../assets/map1.png")}
          />
          <Text style={[styles.label, styles.labelTypo]}>Map</Text>
        </Pressable>
        <Pressable
          style={[styles.tab, styles.tabFlexBox]}
          onPress={() => navigation.navigate("Message")}
        >
          <Image
            style={styles.cardsIcon}
            contentFit="cover"
            source={require("../assets/chat.png")}
          />
          <Text style={[styles.label, styles.labelTypo]}>Chat</Text>
        </Pressable>
        <View style={[styles.tab, styles.tabFlexBox]}>
          <Image
            style={styles.cardsIcon}
            contentFit="cover"
            source={require("../assets/profilecircle1.png")}
          />
          <Text style={[styles.label3, styles.labelTypo]}>Profil</Text>
        </View>
      </View>
      <Image
        style={[styles.iconPencil, styles.tabBarPosition]}
        contentFit="cover"
        source={require("../assets/-icon-pencil.png")}
      />
      <View style={[styles.tag1Delete, styles.tag1FlexBox]}>
        <View style={[styles.tagsWrapper, styles.tabFlexBox]}>
          <Text style={styles.tags1}>tags</Text>
        </View>
      </View>
      <View style={[styles.tag1Delete1, styles.tag1FlexBox]}>
        <View style={[styles.tagsWrapper, styles.tabFlexBox]}>
          <Text style={styles.tags1}>tags</Text>
        </View>
      </View>
      <View style={[styles.tag1Delete2, styles.tag1FlexBox]}>
        <View style={[styles.tagsWrapper, styles.tabFlexBox]}>
          <Text style={styles.tags1}>tags</Text>
        </View>
      </View>
      <View style={[styles.tag1Delete3, styles.tag1FlexBox]}>
        <View style={[styles.tagsWrapper, styles.tabFlexBox]}>
          <Text style={styles.tags1}>tags</Text>
        </View>
      </View>
      <View style={[styles.tag1Delete4, styles.tag1FlexBox]}>
        <View style={[styles.tagsWrapper, styles.tabFlexBox]}>
          <Text style={styles.tags1}>tags</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileLayout: {
    height: 1,
    backgroundColor: Color.colorWhitesmoke_300,
    borderRadius: Border.br_3xs,
    width: 334,
    position: "absolute",
  },
  tagsPosition: {
    color: Color.graysBlack,
    textAlign: "left",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  lesPosition: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.graysBlack,
    marginLeft: -176.5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  tabBarPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  tabFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  labelTypo: {
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  tag1FlexBox: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_3xs,
    backgroundColor: Color.colorAquamarine,
    borderRadius: Border.br_10xs,
    top: 364,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  profileChild: {
    marginTop: -382,
    marginLeft: -100.5,
    width: 202,
    height: 202,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  profileItem: {
    top: 312,
    left: 30,
  },
  profileInner: {
    top: 603,
    left: 26,
  },
  tags: {
    marginTop: -97,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontSize: FontSize.size_mini,
    marginLeft: -176.5,
    color: Color.graysBlack,
    fontWeight: "500",
  },
  biographie: {
    marginTop: -17,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontSize: FontSize.size_mini,
    marginLeft: -176.5,
    color: Color.graysBlack,
    fontWeight: "500",
  },
  badges: {
    marginTop: 119,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontSize: FontSize.size_mini,
    marginLeft: -176.5,
    color: Color.graysBlack,
    fontWeight: "500",
  },
  groupes: {
    marginTop: 51,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontSize: FontSize.size_mini,
    marginLeft: -176.5,
    color: Color.graysBlack,
    fontWeight: "500",
  },
  posts: {
    marginTop: 194,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontSize: FontSize.size_mini,
    marginLeft: -176.5,
    color: Color.graysBlack,
    fontWeight: "500",
  },
  ajtSnapPr: {
    marginTop: 10,
  },
  lesGLes: {
    marginTop: 84,
  },
  rigolekom1jnoun93: {
    marginTop: -158,
    marginLeft: -108.5,
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
  },
  rectangleView: {
    top: 656,
    left: 25,
    backgroundColor: Color.colorGainsboro_300,
    height: 97,
    width: 334,
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
    width: 24,
  },
  label3: {
    color: Color.colorDarkorange,
  },
  tabBar: {
    top: 761,
    left: 0,
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
    backgroundColor: Color.colorWhite,
  },
  iconPencil: {
    height: "2.23%",
    width: "4.83%",
    top: "31.81%",
    right: "13.99%",
    bottom: "65.96%",
    left: "81.17%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  tags1: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.nunitoMedium,
    color: Color.colorGray_100,
    textAlign: "left",
    fontWeight: "500",
  },
  tagsWrapper: {
    flexDirection: "row",
  },
  tag1Delete: {
    left: 20,
  },
  tag1Delete1: {
    left: 81,
  },
  tag1Delete2: {
    left: 142,
  },
  tag1Delete3: {
    left: 203,
  },
  tag1Delete4: {
    left: 264,
  },
  profile: {
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Profile;
