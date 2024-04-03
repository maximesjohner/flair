import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const AjoutDePost = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.ajoutDePost}>
      <View style={[styles.cardNormalScreen, styles.cardLayout]}>
        <View style={styles.rectangleParent}>
          <Image
            style={[styles.groupChild, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-171.png")}
          />
          <View style={[styles.tag1, styles.tagFlexBox]}>
            <Text style={[styles.tags, styles.tagsTypo]}>tags</Text>
          </View>
          <View style={[styles.tag5, styles.tagFlexBox]}>
            <Text style={[styles.tags, styles.tagsTypo]}>tags</Text>
          </View>
          <Pressable
            style={styles.iconPosition}
            onPress={() => navigation.navigate("Feed1")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/-icon-scan-outline.png")}
            />
          </Pressable>
          <View style={[styles.groupItem, styles.groupItemBg]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
        </View>
        <View style={[styles.rectangleGroup, styles.groupChildPosition2]}>
          <View style={[styles.rectangleView, styles.groupItemBg]} />
          <View style={styles.nousSommesSurParisPendantParent}>
            <Text
              style={[styles.nousSommesSur, styles.nousSommesSurPosition]}
            >{`Nous sommes sur Paris pendant 3 jours venez nous voir on
est sympa ! On aime bien sortir et aller dans les bars...`}</Text>
            <Text style={[styles.toujoursPlusHaut, styles.flaireTypo]}>
              2.7.0 toujours plus haut
            </Text>
            <Text style={[styles.kaarisB2oba, styles.ilYATypo]}>
              @kaaris, @b2oba
            </Text>
            <View style={styles.vectorParent}>
              <Image
                style={[styles.vectorIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/vector1.png")}
              />
              <Text style={styles.avenueParmentierParis}>A 10 KM</Text>
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
      <View style={[styles.cardNormalScreen1, styles.cardLayout]}>
        <View style={styles.rectangleParent}>
          <Image
            style={[styles.groupChild, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-171.png")}
          />
          <View style={[styles.tag1, styles.tagFlexBox]}>
            <Text style={[styles.tags2, styles.tagsTypo]}>tags</Text>
          </View>
          <View style={[styles.tag5, styles.tagFlexBox]}>
            <Text style={[styles.tags, styles.tagsTypo]}>tags</Text>
          </View>
          <Image
            style={[styles.iconScanOutline1, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/-icon-scan-outline.png")}
          />
          <View style={[styles.groupItem, styles.groupItemBg]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
        </View>
        <View style={[styles.rectangleGroup, styles.groupChildPosition2]}>
          <View style={[styles.rectangleView, styles.groupItemBg]} />
          <View style={styles.nousSommesSurParisPendantParent}>
            <Text
              style={[styles.nousSommesSur, styles.nousSommesSurPosition]}
            >{`Nous sommes sur Paris pendant 3 jours venez nous voir on
est sympa ! On aime bien sortir et aller dans les bars...`}</Text>
            <Text style={[styles.toujoursPlusHaut, styles.flaireTypo]}>
              2.7.0 toujours plus haut
            </Text>
            <Text style={[styles.kaarisB2oba, styles.ilYATypo]}>
              @kaaris, @b2oba
            </Text>
            <View style={styles.vectorParent}>
              <Image
                style={[styles.vectorIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/vector1.png")}
              />
              <Text style={styles.avenueParmentierParis}>A 10 KM</Text>
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
      <View style={[styles.cardNormalScreen2, styles.cardLayout]}>
        <View style={styles.rectangleParent}>
          <Image
            style={[styles.groupChild, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-171.png")}
          />
          <View style={[styles.tag1, styles.tagFlexBox]}>
            <Text style={[styles.tags, styles.tagsTypo]}>tags</Text>
          </View>
          <View style={[styles.tag5, styles.tagFlexBox]}>
            <Text style={[styles.tags, styles.tagsTypo]}>tags</Text>
          </View>
          <Image
            style={[styles.iconScanOutline1, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/-icon-scan-outline.png")}
          />
          <View style={[styles.groupItem, styles.groupItemBg]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
        </View>
        <View style={[styles.rectangleGroup, styles.groupChildPosition2]}>
          <View style={[styles.rectangleView, styles.groupItemBg]} />
          <View style={styles.nousSommesSurParisPendantParent}>
            <Text
              style={[styles.nousSommesSur, styles.nousSommesSurPosition]}
            >{`Nous sommes sur Paris pendant 3 jours venez nous voir on
est sympa ! On aime bien sortir et aller dans les bars...`}</Text>
            <Text style={[styles.toujoursPlusHaut, styles.flaireTypo]}>
              2.7.0 toujours plus haut
            </Text>
            <Text style={[styles.kaarisB2oba, styles.ilYATypo]}>
              @kaaris, @b2oba
            </Text>
            <View style={styles.vectorParent}>
              <Image
                style={[styles.vectorIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/vector1.png")}
              />
              <Text style={styles.avenueParmentierParis}>A 10 KM</Text>
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
      <View style={[styles.ajoutDePostChild, styles.ajoutPosition]} />
      <View style={[styles.ajoutDePostItem, styles.ajoutPosition]} />
      <Text style={[styles.avecQui, styles.photosTypo]}>Avec qui ?</Text>
      <Text style={[styles.photos, styles.photosTypo]}>Photos</Text>
      <Text style={[styles.description, styles.photosTypo]}>Description</Text>
      <View style={styles.placeholder}>
        <View style={[styles.placeholderChild, styles.placeholderChildBg]} />
        <Text style={styles.recherchez}>Recherchez</Text>
        <View style={[styles.placeholderItem, styles.iconSearchPosition]} />
        <Image
          style={[styles.iconSearch, styles.iconSearchPosition]}
          contentFit="cover"
          source={require("../assets/-icon-search.png")}
        />
      </View>
      <View style={[styles.ajoutDePostInner, styles.placeholderChildBg]} />
      <View style={styles.ajoutDePostChild1} />
      <Image
        style={[styles.iconCamera, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-icon-camera.png")}
      />
      <View style={[styles.ajoutDePostChild2, styles.childLayout]} />
      <Text style={styles.ajoutezUneDescription}>Ajoutez une description</Text>
      <Pressable
        style={styles.flair}
        onPress={() => navigation.navigate("Feed")}
      >
        <View style={[styles.flairChild, styles.childLayout]} />
        <Text style={[styles.flaire, styles.flaireTypo]}>Flaire</Text>
      </Pressable>
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
  tagFlexBox: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_6xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_6xs,
    bottom: "81.95%",
    top: "9.27%",
    width: "11.67%",
    height: "8.78%",
    display: "none",
    position: "absolute",
    overflow: "hidden",
  },
  tagsTypo: {
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
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
  groupChildPosition2: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  nousSommesSurPosition: {
    left: "0.59%",
    color: Color.colorGray_300,
  },
  flaireTypo: {
    fontSize: FontSize.size_sm,
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
  iconPosition: {
    height: "9.27%",
    width: "5.28%",
    bottom: "80%",
    right: "3.89%",
    top: "10.73%",
    left: "90.83%",
    position: "absolute",
  },
  ajoutPosition: {
    width: 393,
    left: 0,
    position: "absolute",
  },
  photosTypo: {
    color: Color.graysBlack,
    fontFamily: FontFamily.interMedium,
    fontSize: FontSize.size_mini,
    marginLeft: -179.5,
    left: "50%",
    top: "50%",
    textAlign: "left",
    fontWeight: "500",
    position: "absolute",
  },
  placeholderChildBg: {
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  iconSearchPosition: {
    top: "30%",
    position: "absolute",
  },
  childLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  groupChild: {
    borderTopRightRadius: Border.br_xl,
    borderTopLeftRadius: Border.br_xl,
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
  },
  tag1: {
    right: "84.72%",
    backgroundColor: Color.colorAquamarine,
    display: "none",
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
    maxWidth: "100%",
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
    color: Color.colorGray_300,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  toujoursPlusHaut: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorGray_300,
    left: "0.59%",
    top: "0%",
  },
  kaarisB2oba: {
    top: "15.32%",
    fontSize: FontSize.size_xs,
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
    color: Color.colorGray_300,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    top: "0%",
    position: "absolute",
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
    top: 136,
  },
  tags2: {
    textAlign: "left",
    display: "none",
  },
  iconScanOutline1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  cardNormalScreen1: {
    top: 465,
  },
  cardNormalScreen2: {
    top: -193,
  },
  ajoutDePostChild: {
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: 852,
    left: 0,
  },
  ajoutDePostItem: {
    backgroundColor: "#f4f4f4",
    height: 716,
    borderTopRightRadius: Border.br_xl,
    borderTopLeftRadius: Border.br_xl,
    top: 136,
  },
  avecQui: {
    marginTop: -251,
  },
  photos: {
    marginTop: -169,
  },
  description: {
    marginTop: 88,
  },
  placeholderChild: {
    borderRadius: Border.br_81xl,
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
    height: "100%",
    top: "0%",
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
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  placeholder: {
    marginLeft: -177.5,
    top: 207,
    width: 356,
    height: 30,
    left: "50%",
    position: "absolute",
  },
  ajoutDePostInner: {
    marginLeft: -42.5,
    top: 149,
    borderRadius: Border.br_3xs,
    width: 85,
    height: 3,
    left: "50%",
  },
  ajoutDePostChild1: {
    top: 289,
    left: 18,
    width: 359,
    height: 205,
    backgroundColor: Color.colorGainsboro_300,
    position: "absolute",
  },
  iconCamera: {
    height: "11.69%",
    width: "32.24%",
    top: "39.99%",
    right: "33.92%",
    bottom: "48.32%",
    left: "33.84%",
    position: "absolute",
  },
  ajoutDePostChild2: {
    top: 544,
    left: 19,
    width: 358,
    height: 204,
    backgroundColor: Color.colorGainsboro_300,
  },
  ajoutezUneDescription: {
    marginTop: 127,
    marginLeft: -168.5,
    color: "#b6b6b6",
    left: "50%",
    top: "50%",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  flairChild: {
    backgroundColor: Color.colorGray_200,
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
    height: "100%",
    top: "0%",
  },
  flaire: {
    top: "26.32%",
    left: "45.81%",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
  },
  flair: {
    top: 771,
    left: 33,
    width: 334,
    height: 38,
    position: "absolute",
  },
  ajoutDePost: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    overflow: "hidden",
    height: 852,
    width: "100%",
  },
});

export default AjoutDePost;
