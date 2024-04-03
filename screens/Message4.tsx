import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Message4 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.message4}>
      <Image
        style={[styles.message4Child, styles.wrapperLayout]}
        contentFit="cover"
        source={require("../assets/line-11.png")}
      />
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("Message3")}
      >
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/line-21.png")}
        />
      </Pressable>
      <Image
        style={[styles.message4Item, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-173.png")}
      />
      <Image
        style={[styles.message4Inner, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-173.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-173.png")}
      />
      <Image
        style={[styles.message4Child1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-173.png")}
      />
      <Text style={styles.bureau}>10.12.14 BUREAU</Text>
      <View style={styles.component8}>
        <View style={[styles.component8Child, styles.childPosition]} />
        <Text style={styles.ajoutezDesPhotos}>+ Ajoutez des photos</Text>
      </View>
      <View style={[styles.component6, styles.componentLayout]}>
        <View style={[styles.component6Child, styles.component7ItemPosition]} />
        <Text style={styles.aperu}>Aperçu</Text>
      </View>
      <View style={[styles.component7, styles.componentLayout]}>
        <View style={[styles.component71, styles.childPosition]}>
          <View
            style={[styles.component6Child, styles.component7ItemPosition]}
          />
          <Text style={[styles.aperu1, styles.aperuTypo]}>Confirmer</Text>
        </View>
      </View>
      <View style={[styles.component10, styles.componentLayout]}>
        <View style={[styles.component71, styles.childPosition]}>
          <View
            style={[styles.component7Item, styles.component7ItemPosition]}
          />
          <Text style={[styles.aperu2, styles.aperuTypo]}>
            Supprimer l’annonce
          </Text>
        </View>
      </View>
      <Image
        style={[styles.iconPencil, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-icon-pencil.png")}
      />
      <Text style={[styles.lesPhotosDe, styles.lesTypo]}>
        Les photos de l’annonce (4)
      </Text>
      <Text style={[styles.lesTagsDe, styles.lesTypo]}>
        Les tags de l’annonce
      </Text>
      <Text style={[styles.descriptionDeLannonce, styles.lesTypo]}>
        Description de l’annonce
      </Text>
      <Text style={[styles.localisationDeLannonce, styles.lesTypo]}>
        Localisation de l’annonce
      </Text>
      <Text style={[styles.dureDeLanonce, styles.lesTypo]}>
        Durée de l’anonce
      </Text>
      <View style={[styles.tag1Delete, styles.tag1FlexBox1]}>
        <Text style={styles.tags}>tags</Text>
        <Image
          style={styles.croixIcon}
          contentFit="cover"
          source={require("../assets/croix.png")}
        />
      </View>
      <View style={[styles.tag1Delete1, styles.tag1FlexBox1]}>
        <Text style={styles.tags}>tags</Text>
        <Image
          style={styles.croixIcon}
          contentFit="cover"
          source={require("../assets/croix.png")}
        />
      </View>
      <View style={[styles.tag1Delete2, styles.tag1Delete2Position]}>
        <Text style={styles.tags}>tags</Text>
        <Image
          style={styles.croixIcon}
          contentFit="cover"
          source={require("../assets/croix.png")}
        />
      </View>
      <View style={[styles.tag1Delete3, styles.tag1FlexBox]}>
        <Text style={styles.tags}>tags</Text>
        <Image
          style={styles.croixIcon}
          contentFit="cover"
          source={require("../assets/croix.png")}
        />
      </View>
      <View style={[styles.tag1Delete4, styles.tag1FlexBox]}>
        <Text style={styles.tags}>tags</Text>
        <Image
          style={styles.croixIcon}
          contentFit="cover"
          source={require("../assets/croix.png")}
        />
      </View>
      <View style={[styles.tag1Delete5, styles.tag1FlexBox1]}>
        <Text style={styles.tags}>tags</Text>
        <Image
          style={styles.croixIcon}
          contentFit="cover"
          source={require("../assets/croix.png")}
        />
      </View>
      <View style={[styles.tag1Delete6, styles.tag1FlexBox1]}>
        <Text style={styles.tags}>tags</Text>
        <Image
          style={styles.croixIcon}
          contentFit="cover"
          source={require("../assets/croix.png")}
        />
      </View>
      <View style={[styles.tag1Delete7, styles.tag1FlexBox]}>
        <View style={styles.ajouterDesTagsWrapper}>
          <Text style={styles.tags}>+ Ajouter des tags</Text>
        </View>
      </View>
      <View style={[styles.tag1Delete8, styles.tag1FlexBox1]}>
        <Text style={styles.tags}>tags</Text>
        <Image
          style={styles.croixIcon}
          contentFit="cover"
          source={require("../assets/croix.png")}
        />
      </View>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.childLayout]} />
        <Pressable
          style={styles.iconScanOutline}
          onPress={() => navigation.navigate("Feed")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/-icon-scan-outline2.png")}
          />
        </Pressable>
      </View>
      <View style={styles.component9}>
        <View style={[styles.component9Child, styles.childLayout]} />
        <View style={styles.vectorParent}>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
          <Text style={[styles.avenueParmentier, styles.avenueParmentierTypo]}>
            95 Avenue parmentier
          </Text>
        </View>
      </View>
      <Pressable
        style={[styles.informationCircle, styles.tag1Delete2Position]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={[styles.icon2, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/informationcircle1.png")}
        />
      </Pressable>
      <Text style={[styles.ladresseExacteNe, styles.avenueParmentierTypo]}>
        L’adresse exacte ne sera pas visible
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    height: 11,
    width: 11,
    left: 12,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  childPosition: {
    bottom: "0%",
    right: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  componentLayout: {
    height: 31,
    position: "absolute",
  },
  component7ItemPosition: {
    borderRadius: Border.br_10xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  aperuTypo: {
    textAlign: "center",
    top: "12.9%",
    color: Color.graysBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  lesTypo: {
    height: 14,
    width: 170,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    color: Color.colorGray_300,
    left: 23,
    textAlign: "left",
    position: "absolute",
  },
  tag1FlexBox1: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_3xs,
    backgroundColor: Color.colorAquamarine,
    top: 328,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_10xs,
    position: "absolute",
    overflow: "hidden",
  },
  tag1Delete2Position: {
    left: 182,
    position: "absolute",
  },
  tag1FlexBox: {
    top: 298,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.colorAquamarine,
    borderRadius: Border.br_10xs,
    overflow: "hidden",
  },
  childLayout: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGainsboro_300,
    position: "absolute",
  },
  avenueParmentierTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    color: Color.colorGray_300,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  message4Child: {
    top: 69,
  },
  wrapper: {
    top: 80,
  },
  message4Item: {
    right: "55.73%",
    left: "26.72%",
    bottom: "69.01%",
    top: "16.67%",
    width: "17.56%",
    height: "14.32%",
    maxWidth: "100%",
    position: "absolute",
  },
  message4Inner: {
    right: "34.86%",
    left: "47.58%",
    bottom: "69.01%",
    top: "16.67%",
    width: "17.56%",
    height: "14.32%",
    maxWidth: "100%",
    position: "absolute",
  },
  rectangleIcon: {
    right: "13.99%",
    left: "68.45%",
    bottom: "69.01%",
    top: "16.67%",
    width: "17.56%",
    height: "14.32%",
    maxWidth: "100%",
    position: "absolute",
  },
  message4Child1: {
    right: "-6.87%",
    left: "89.31%",
    bottom: "69.01%",
    top: "16.67%",
    width: "17.56%",
    height: "14.32%",
    maxWidth: "100%",
    position: "absolute",
  },
  bureau: {
    marginTop: -357,
    marginLeft: -81.5,
    top: "50%",
    left: "50%",
    textAlign: "left",
    color: Color.graysBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  component8Child: {
    backgroundColor: Color.colorGainsboro_300,
    left: "0%",
    position: "absolute",
  },
  ajoutezDesPhotos: {
    height: "18.85%",
    width: "79.71%",
    top: "41.8%",
    left: "10.14%",
    fontSize: FontSize.size_3xs,
    color: Color.colorGray_300,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  component8: {
    top: 142,
    width: 69,
    height: 122,
    left: 23,
    position: "absolute",
  },
  component6Child: {
    backgroundColor: Color.colorGainsboro_300,
  },
  aperu: {
    left: "20.49%",
    top: "12.9%",
    textAlign: "left",
    color: Color.graysBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  component6: {
    width: 122,
    top: 741,
    height: 31,
    left: 60,
  },
  aperu1: {
    left: "9.02%",
  },
  component71: {
    left: "0%",
    position: "absolute",
  },
  component7: {
    left: 212,
    width: 122,
    top: 741,
    height: 31,
  },
  component7Item: {
    backgroundColor: "#ffa9a9",
  },
  aperu2: {
    left: "13.03%",
  },
  component10: {
    top: 787,
    width: 274,
    left: 60,
  },
  iconPencil: {
    height: "2.23%",
    width: "4.83%",
    top: "8.45%",
    right: "21.63%",
    bottom: "89.32%",
    left: "73.54%",
    position: "absolute",
  },
  lesPhotosDe: {
    top: 123,
  },
  lesTagsDe: {
    top: 276,
  },
  descriptionDeLannonce: {
    top: 362,
  },
  localisationDeLannonce: {
    top: 533,
  },
  dureDeLanonce: {
    top: 596,
  },
  tags: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.nunitoMedium,
    color: Color.colorGray_100,
    textAlign: "left",
  },
  croixIcon: {
    width: 17,
    height: 17,
    marginLeft: 10,
  },
  tag1Delete: {
    left: 23,
  },
  tag1Delete1: {
    left: 108,
  },
  tag1Delete2: {
    top: 298,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.colorAquamarine,
    borderRadius: Border.br_10xs,
    overflow: "hidden",
  },
  tag1Delete3: {
    left: 267,
    position: "absolute",
  },
  tag1Delete4: {
    left: 352,
    position: "absolute",
  },
  tag1Delete5: {
    left: 193,
  },
  tag1Delete6: {
    left: 278,
  },
  ajouterDesTagsWrapper: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  tag1Delete7: {
    left: 23,
    position: "absolute",
  },
  tag1Delete8: {
    left: 362,
  },
  groupChild: {
    top: 272,
    left: 0,
    height: 134,
    width: 360,
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  iconScanOutline: {
    left: "90.28%",
    right: "4.58%",
    bottom: "95.44%",
    width: "5.14%",
    height: "4.56%",
    top: "0%",
    position: "absolute",
  },
  rectangleParent: {
    top: 115,
    height: 406,
    width: 360,
    left: 23,
    position: "absolute",
  },
  component9Child: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  vectorIcon: {
    height: "64%",
    width: "5.11%",
    top: "18%",
    right: "94.89%",
    bottom: "18%",
    left: "0%",
    position: "absolute",
  },
  avenueParmentier: {
    left: "8.08%",
    top: "0%",
  },
  vectorParent: {
    height: "51.72%",
    width: "91.15%",
    top: "24.14%",
    right: "4.8%",
    bottom: "24.14%",
    left: "4.05%",
    position: "absolute",
  },
  component9: {
    top: 555,
    width: 148,
    height: 29,
    left: 23,
    position: "absolute",
  },
  icon2: {
    overflow: "hidden",
  },
  informationCircle: {
    top: 557,
    width: 15,
    height: 15,
  },
  ladresseExacteNe: {
    height: "3.4%",
    width: "48.09%",
    top: "65.14%",
    left: "50.89%",
  },
  message4: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default Message4;
