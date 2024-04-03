import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const MessagesText = () => {
  return <Text style={styles.messages}>Messages</Text>;
};

const styles = StyleSheet.create({
  messages: {
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.graysBlack,
    textAlign: "left",
  },
});

export default MessagesText;
