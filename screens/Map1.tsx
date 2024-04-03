import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Component from "../components/Component";
import { FontFamily, FontSize, Border, Color, Padding } from "../GlobalStyles";

const Map1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.map, styles.mapLayout]}>
      <Image
        style={[styles.image1Icon, styles.tabBarPosition]}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <Component onComponent1Press={() => navigation.navigate("Map2")} />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Map2")}
      >
        <Image
          style={[styles.icon, styles.mapLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-17.png")}
        />
      </Pressable>
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
        <View style={styles.tab}>
          <Image
            style={styles.cardsIcon}
            contentFit="cover"
            source={require("../assets/map.png")}
          />
          <Text style={[styles.label1, styles.labelTypo]}>Map</Text>
        </View>
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
  mapLayout: {
    width: "100%",
    overflow: "hidden",
  },
  tabBarPosition: {
    width: 393,
    left: 0,
    position: "absolute",
  },
  labelTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
  },
  image1Icon: {
    top: -9,
    height: 810,
  },
  icon: {
    height: "100%",
    borderTopLeftRadius: Border.br_2xs,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  wrapper: {
    left: "46.31%",
    top: "17.72%",
    right: "-2.8%",
    bottom: "70.19%",
    width: "56.49%",
    height: "12.09%",
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
  map: {
    flex: 1,
    height: 852,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Map1;
