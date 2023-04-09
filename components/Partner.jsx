import { Image, StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";

export const Partner = ({ title, imageUri }) => {
  return (
    <View style={styles.Partner}>
      <Image style={styles.PartnerImage} source={{ uri: imageUri }} />
      <Text style={styles.PartnerTitle}>{title}</Text>
    </View>
  );
};

export default Partner;

const styles = StyleSheet.create({
  Partner: {
    paddingVertical: 25,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#023",
    flexDirection: "row",
    alignItems: "center",
  },
  PartnerImage: {
    width: 100,
    height: 100,
  },
  PartnerTitle: {
    fontSize: 16,
    flex:1,
  },
});
