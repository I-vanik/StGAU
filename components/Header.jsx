import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={{
          uri: "https://old.stgau.ru/bitrix/templates/prof2022/images/logo-4.jpg",
        }}
      />
      <Text style={styles.headerText}>Карьерная среда СтГАУ</Text>
      <Image />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    marginTop: 0,
    backgroundColor: "#0A2E74",
    width: "100%",
    height: 90,
  },
  headerText: {
    fontSize: 26,
    color: "#fff",
    alignItems: "center",
    textAlign: "center",
    paddingTop: "6%",
  },
  headerImage: {
    width:100,
    height:100,
  }
});
