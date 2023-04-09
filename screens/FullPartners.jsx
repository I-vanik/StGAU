import { View, Text, Image, StyleSheet, Button } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { TextInput } from "react-native";

export const FullPartners = () => {
  return (
    <View style={styles.FullPartner}>
      <Image
        style={styles.FullPartnerImage}
        source={{
          uri: "https://asbagro.ru/wp-content/uploads/2018/03/cropped-favicon-192x192.png",
        }}
      />
      <Text style={styles.TitleFullPatners}>
        Общество с ограниченной ответственностью «Управляющая компания АСБ-АГРО»
      </Text>
      <View>
        <Text style={styles.textFullPatners}>
          Агрохолдинг «АСБ» — один из крупнейших поставщиков
          сельскохозяйственной продукции в Северо-Кавказском и Южном федеральных
          округах. Он был основан в 2000 году и более чем за двадцать лет труда
          на земле заработал репутацию надежного бизнес-партнера и работодателя.
        </Text>
      </View>
      <Text style={styles.AuthFullPartner}>Подача заявки на практику</Text>
      <View>
        <TextInput
        style={styles.InputFullPartner}
        placeholder="ФИО"
        />
        <TextInput
        style={styles.InputFullPartner}
        placeholder="Факультет, курс, группа"
        />
        <TextInput
        style={styles.InputFullPartner}
        placeholder="Достижения"
        />
        <TextInput
        style={styles.InputFullPartner}
        placeholder='Скан зачетной книжки'
        />
        <Button 
        style={styles.ButtonFullPartner}
        title="отправить"/>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  FullPartner: {
    padding: 10,
    marginTop: 40,
    alignItems: "center",
    textAlign: "center",
  },
  FullPartnerImage: {
    width: 100,
    height: 100,
  },
  FullPartnerTitle: {
    fontSize: 16,
    flex: 1,
  },
  TitleFullPatners: {
    marginVertical: 30,
    fontSize: 20,
    textAlign: "center",
  },
  textFullPatners: {
    textAlign: "center",
    marginBottom:30,
  },
  AuthFullPartner:{
    fontSize: 20,
    fontWeight: 'bold'
  },
  InputFullPartner:{
    textAlign: "center",
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    width: 300,
    height: 60,
    marginBottom: 10,
    
  },
  ButtonFullPartner:{
    marginTop:40,
  },
});
