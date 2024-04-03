import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  Color,
  FontFamily,
  FontSize,
  Border,
  StyleVariable,
  Padding,
} from "../GlobalStyles";

const Message1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.message2}>
      <View style={styles.component4}>
        <View style={styles.messagecontainer}>
          <Text style={[styles.messagetext, styles.messagetextTypo1]}>
            ouais on va où ?
          </Text>
          <Text style={styles.timestamp}>11.14</Text>
        </View>
        <Image
          style={[styles.bubblevectorIcon, styles.bubblevectorIconLayout]}
          contentFit="cover"
          source={require("../assets/bubblevector.png")}
        />
      </View>
      <View style={styles.message2Child} />
      <Text style={styles.tom}>Tom</Text>
      <Image
        style={[styles.message2Item, styles.wrapperLayout]}
        contentFit="cover"
        source={require("../assets/line-1.png")}
      />
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("Message")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/line-2.png")}
        />
      </Pressable>
      <View style={styles.component3}>
        <Image
          style={[styles.bubblevectorIcon1, styles.bubblevectorIconLayout]}
          contentFit="cover"
          source={require("../assets/bubblevector1.png")}
        />
        <View style={styles.messagecontainer1}>
          <Text style={[styles.messagetext, styles.messagetextTypo1]}>
            wsh ça sort ????
          </Text>
          <Text style={styles.timestamp}>11.14</Text>
        </View>
        <View style={styles.component3Child} />
        <Pressable
          style={[styles.component3Item, styles.component3Position]}
          onPress={() => navigation.navigate("Message2")}
        />
        <Pressable
          style={[styles.component3Inner, styles.component3Position]}
          onPress={() => navigation.navigate("Message2")}
        />
      </View>
      <Text style={[styles.messagetext2, styles.messagetextTypo]}>Oui</Text>
      <Text style={[styles.messagetext3, styles.messagetextTypo]}>Non</Text>
      <Text
        style={[styles.messagetext4, styles.messagetextTypo1]}
      >{`Accepter le rendez-vous avec Tom ? `}</Text>
      <Text style={[styles.tom1, styles.meTypo]}>@Tom</Text>
      <Text style={[styles.me, styles.meTypo]}>me</Text>
      <Pressable
        style={styles.informationCircle}
        onPress={() => navigation.navigate("Message3")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/informationcircle.png")}
        />
      </Pressable>
      <View style={[styles.keyboardIphone, styles.emojiTabsFlexBox]}>
        <View style={styles.searchField}>
          <Text style={styles.placeholderLabel}>Search Emoji</Text>
          <Text style={styles.searchGlyph}>􀊫</Text>
        </View>
        <View style={styles.frame}>
          <View style={[styles.emojiTabs, styles.emojiFlexBox]}>
            <Image
              style={styles.recentsIcon}
              contentFit="cover"
              source={require("../assets/recents.png")}
            />
            <Image
              style={styles.frameIcon}
              contentFit="cover"
              source={require("../assets/frame.png")}
            />
            <Image
              style={styles.recentsIcon}
              contentFit="cover"
              source={require("../assets/animals.png")}
            />
            <Image
              style={styles.recentsIcon}
              contentFit="cover"
              source={require("../assets/food--drink.png")}
            />
            <Image
              style={styles.recentsIcon}
              contentFit="cover"
              source={require("../assets/activity.png")}
            />
            <Image
              style={styles.recentsIcon}
              contentFit="cover"
              source={require("../assets/travel--places.png")}
            />
            <Image
              style={styles.objectsIcon}
              contentFit="cover"
              source={require("../assets/objects.png")}
            />
            <Image
              style={styles.symbolsIcon}
              contentFit="cover"
              source={require("../assets/symbols.png")}
            />
            <Image
              style={styles.unionIcon}
              contentFit="cover"
              source={require("../assets/union.png")}
            />
            <Image
              style={styles.frameIcon1}
              contentFit="cover"
              source={require("../assets/frame1.png")}
            />
          </View>
          <View style={[styles.emoji, styles.emojiFlexBox]}>
            <Text style={styles.textTypo}>{`😀
😃
😄
😁
😆`}</Text>
            <Text style={[styles.text1, styles.textTypo]}>{`🥹
😅
😂
🤣
🥲`}</Text>
            <Text style={[styles.text1, styles.textTypo]}>{`☺️
😊
😇
🙂
🙃`}</Text>
            <Text style={[styles.text1, styles.textTypo]}>{`😉
😌
😍
🥰
😘`}</Text>
            <Text style={[styles.text1, styles.textTypo]}>{`😗
😙
😚
😋
😛`}</Text>
            <Text style={[styles.text1, styles.textTypo]}>{`😝
😜
🤪
🤨
🧐`}</Text>
            <Text style={[styles.text1, styles.textTypo]}>{`🤓
😎
🥸
🤩
🥳`}</Text>
            <Text style={[styles.text1, styles.textTypo]}>{`😏
😒
😞
😔
😟`}</Text>
            <Text style={[styles.text1, styles.textTypo]}>{`😕
🙁
☹
️😣
😖`}</Text>
            <Text style={[styles.text1, styles.textTypo]}>{`😫
😩
🥺
😢
😭`}</Text>
            <Text style={[styles.text1, styles.textTypo]}>{`😤
😠
😡
🤬
🤯`}</Text>
            <Text style={[styles.text1, styles.textTypo]}>{`😳
🥵
🥶
😶‍🌫️
😱`}</Text>
            <Text style={[styles.text1, styles.textTypo]}>{`😰
😥
😓
🤗
🤔`}</Text>
            <Text style={[styles.text1, styles.textTypo]}>{`😨
😰
😥
😓
🤗`}</Text>
            <Text style={[styles.text1, styles.textTypo]}>{`🤔
🫣
🤭
🫢
🫡`}</Text>
            <Text style={[styles.text1, styles.textTypo]}>{`🤫
🫠
🤥
😶
🫥`}</Text>
            <Text style={[styles.text1, styles.textTypo]}>{`😐
🫤
😑
😬
🙄`}</Text>
            <Text style={[styles.text1, styles.textTypo]}>{`😯
😦
😧
😮
😲`}</Text>
            <Text style={[styles.text1, styles.textTypo]}>{`🥱
😴
🤤
😪
😮‍💨`}</Text>
            <Text style={[styles.text1, styles.textTypo]}>{`😵
😵‍💫
🤐
🥴
🤢`}</Text>
            <Text style={[styles.text1, styles.textTypo]}>{`🤮
🤧
😷
🤒
🤕`}</Text>
            <Text style={[styles.text1, styles.textTypo]}>{`🤑
🤠
😈
👿
👹`}</Text>
            <Text style={[styles.text1, styles.textTypo]}>{`👺
🤡
💩
👻
💀`}</Text>
            <Text style={[styles.text1, styles.textTypo]}>{`☠️
👽
👾
🤖
🎃`}</Text>
            <Text style={[styles.text1, styles.textTypo]}>{`😺
😸
😹
😻
😼`}</Text>
            <Text style={[styles.text1, styles.textTypo]}>{`😽
🙀
😿
😾
🫶🏼`}</Text>
          </View>
          <Text style={styles.smileysPeople}>{`SMILEYS & PEOPLE`}</Text>
        </View>
        <View style={styles.abcAndMike}>
          <Text style={[styles.abc, styles.abcPosition]}>ABC</Text>
          <Text style={[styles.mike, styles.abcPosition]}>􀊰</Text>
        </View>
        <View style={styles.homeIndicator}>
          <View style={styles.homeIndicator1} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  messagetextTypo1: {
    textAlign: "left",
    color: Color.graysBlack,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_base,
  },
  bubblevectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  wrapperLayout: {
    height: 11,
    left: 17,
    width: 11,
    position: "absolute",
  },
  component3Position: {
    bottom: "-91.89%",
    top: "124.32%",
    width: "62.28%",
    height: "67.57%",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGainsboro_200,
    position: "absolute",
  },
  messagetextTypo: {
    top: "49.77%",
    textAlign: "left",
    color: Color.graysBlack,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  meTypo: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  emojiTabsFlexBox: {
    alignItems: "center",
    width: 393,
    left: 0,
  },
  emojiFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  textTypo: {
    lineHeight: 39,
    fontSize: FontSize.size_13xl,
    textAlign: "center",
    fontFamily: FontFamily.sFPro,
    color: Color.graysBlack,
  },
  abcPosition: {
    color: Color.colorDarkslategray_200,
    bottom: -6,
    textAlign: "center",
    fontFamily: FontFamily.sFPro,
    position: "absolute",
  },
  messagetext: {
    maxWidth: StyleVariable.messageTextMaxWidth,
  },
  timestamp: {
    fontSize: FontSize.size_sm,
    color: Color.colorDarkgray_200,
    textAlign: "right",
    marginTop: 4,
    alignSelf: "stretch",
    fontFamily: FontFamily.robotoRegular,
  },
  messagecontainer: {
    width: "97.43%",
    right: "2.57%",
    bottom: "0%",
    borderTopLeftRadius: Border.br_9xs,
    backgroundColor: Color.colorLightgoldenrodyellow,
    padding: Padding.p_5xs,
    borderBottomLeftRadius: Border.br_9xs,
    borderBottomRightRadius: Border.br_9xs,
    top: "0%",
    left: "0%",
    height: "100%",
    position: "absolute",
  },
  bubblevectorIcon: {
    height: "12.73%",
    width: "2.57%",
    bottom: "87.27%",
    left: "97.43%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
  },
  component4: {
    top: 255,
    left: 115,
    width: 272,
    height: 55,
    position: "absolute",
  },
  message2Child: {
    backgroundColor: Color.colorGainsboro_300,
    height: 70,
    width: 393,
    left: 0,
    top: 0,
    position: "absolute",
  },
  tom: {
    marginTop: -392,
    marginLeft: -20.5,
    top: "50%",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: "50%",
    textAlign: "left",
    color: Color.graysBlack,
    position: "absolute",
  },
  message2Item: {
    top: 37,
  },
  wrapper: {
    top: 48,
  },
  bubblevectorIcon1: {
    height: "9.46%",
    width: "2.42%",
    top: "9.46%",
    right: "97.58%",
    bottom: "81.08%",
    left: "0%",
  },
  messagecontainer1: {
    height: "68.92%",
    width: "97.58%",
    top: "-186.49%",
    bottom: "217.57%",
    left: "2.42%",
    borderTopRightRadius: Border.br_9xs,
    backgroundColor: Color.colorGainsboro_200,
    right: "0%",
    padding: Padding.p_5xs,
    borderBottomLeftRadius: Border.br_9xs,
    borderBottomRightRadius: Border.br_9xs,
    position: "absolute",
  },
  component3Child: {
    height: "82.43%",
    width: "127.34%",
    top: "29.73%",
    right: "-27.34%",
    bottom: "-12.16%",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGainsboro_200,
    left: "0%",
    position: "absolute",
  },
  component3Item: {
    right: "-27.68%",
    left: "65.4%",
  },
  component3Inner: {
    right: "37.72%",
    left: "0%",
  },
  component3: {
    top: 317,
    width: 289,
    height: 74,
    left: 10,
    position: "absolute",
  },
  messagetext2: {
    left: "70.48%",
  },
  messagetext3: {
    left: "22.39%",
  },
  messagetext4: {
    top: "42.25%",
    left: "17.56%",
    position: "absolute",
  },
  tom1: {
    top: "18.78%",
    left: "5.09%",
  },
  me: {
    top: "27.7%",
    left: "92.11%",
  },
  icon1: {
    overflow: "hidden",
  },
  informationCircle: {
    left: 349,
    top: 30,
    width: 35,
    height: 35,
    position: "absolute",
  },
  placeholderLabel: {
    left: 41,
    letterSpacing: 0,
    color: Color.labelsSecondary,
    lineHeight: 22,
    fontSize: FontSize.size_mid,
    top: 8,
    fontFamily: FontFamily.sFPro,
    textAlign: "left",
    position: "absolute",
  },
  searchGlyph: {
    textAlign: "center",
    color: Color.labelsSecondary,
    fontFamily: FontFamily.sFPro,
    lineHeight: 22,
    fontSize: FontSize.size_mid,
    top: 8,
    left: 10,
    position: "absolute",
  },
  searchField: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorGhostwhite,
    height: 37,
    alignSelf: "stretch",
  },
  recentsIcon: {
    height: 16,
    width: 16,
  },
  frameIcon: {
    height: 30,
    width: 16,
  },
  objectsIcon: {
    width: 12,
    height: 16,
  },
  symbolsIcon: {
    width: 15,
    height: 16,
  },
  unionIcon: {
    height: 14,
    width: 11,
  },
  frameIcon1: {
    width: 28,
    height: 18,
  },
  emojiTabs: {
    top: 220,
    height: 24,
    justifyContent: "space-between",
    paddingLeft: Padding.p_xs,
    paddingRight: Padding.p_3xl,
    alignItems: "center",
    width: 393,
    left: 0,
  },
  text1: {
    marginLeft: 14,
  },
  emoji: {
    top: 21,
    left: 2,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: 0,
  },
  smileysPeople: {
    left: 7,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.sFPro,
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    top: 0,
    textAlign: "left",
    position: "absolute",
  },
  frame: {
    height: 253,
    marginTop: 10,
    alignSelf: "stretch",
  },
  abc: {
    fontWeight: "500",
    left: 0,
    fontSize: FontSize.size_base,
    color: Color.colorDarkslategray_200,
    bottom: -6,
  },
  mike: {
    right: 0,
    fontSize: FontSize.size_8xl,
  },
  abcAndMike: {
    width: 351,
    height: 33,
    marginTop: 10,
  },
  homeIndicator1: {
    marginLeft: 69.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.graysBlack,
    width: 139,
    height: 5,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    left: "50%",
    position: "absolute",
  },
  homeIndicator: {
    height: 21,
    marginTop: 10,
    width: 393,
  },
  keyboardIphone: {
    top: 468,
    backgroundColor: Color.colorWhitesmoke_400,
    height: 384,
    paddingHorizontal: Padding.p_5xs,
    paddingTop: Padding.p_3xs,
    position: "absolute",
    overflow: "hidden",
  },
  message2: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default Message1;
