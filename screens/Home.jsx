import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../components/Header";
import { ImageBackground } from "react-native";

export const Home = ({navigation}) => {
  const imageStud = { uri: "https://www.agroyug.ru/htmledit/img/12830.jpg" };
  const imageRab = {
    uri: "https://locrum.ru/wp-content/uploads/2022/06/2792d29075b3c8d8af93d52fae15e889-1536x1020.jpg",
  };
  return (
    <View style={styles.container}>
      <Header />
      <View >
        <TouchableOpacity style={styles.btnHome} onPress={() => navigation.navigate('Agropartners')}> 
        <ImageBackground source={imageStud} blurRadius={15} borderRadius={10}  style={styles.btnStud}>
          <Text style={styles.textHome}>Студент</Text>
        </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnHome} onPress={() => navigation.navigate('Agropartners')}>
        <ImageBackground source={imageRab}  blurRadius={15} borderRadius={10} style={styles.btnRab}>
          <Text style={styles.textHome} >Работодатель</Text>
        </ImageBackground>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  btnHome: {
    flex: 1,
    alignItems: "center",
    marginTop: "30%",
    marginLeft: "14%",
    textAlign: "center",
    marginBottom:100
  },
  container: {
    flex: 1,
    width: "100%",
    textAlign: "center",
  },
  btnStud: {
    width: "80%",
    height: 200,
    marginBottom: 30,

    
  },
  btnRab: {
    width: "80%",
    height: 200,
    shadowColor: "#0334",
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
  
    
  },
  textHome: {
    marginRight: 50,
    marginTop: 70,
    textAlign: "center",
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
   textShadowRadius: 100,
   textShadowColor: "#000",
   textShadowOffset: {width: 100, height: 40}

    
    

  },
});
