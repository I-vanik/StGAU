
    import { StatusBar } from "expo-status-bar";
    import {
      FlatList,
      StyleSheet,
      Text,
      View,
      ActivityIndicator,
      TouchableOpacity,
    } from "react-native";
    import Partner from "../components/Partner";
    import Header from "../components/Header";
    import axios from "axios";
    import React from "react";
    
    export const Agropartners = ({navigation}) => {
      const [items, setItem] = React.useState();
      const [isLoading, setISLoading] = React.useState(true);
    
      const fetchPosts = () => {
        setISLoading(true);
        axios
          .get("https://64320c27d0127730d2cbe6cc.mockapi.io/partners")
          .then(({ data }) => {
            setItem(data);
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            setISLoading(false);
          });
      };
    
      React.useEffect(fetchPosts, []);
    
      if (isLoading) {
        return (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ActivityIndicator size="large" />
            <Text style={{ marginTop: 15 }}>Загрузка...</Text>
          </View>
        );
      }
    
      return (
        <View>
          <Header />
          <View>
            <FlatList
              data={items}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={()=> navigation.navigate('FullPartners')}> 
                  <Partner title={item.title} imageUri={item.imageUri} />
                </TouchableOpacity>
              )}
            />
            {/* {items?.map((obj) => (
              <Partners title={obj.title} imageUri={obj.imageUri} />
            ))} */}
          </View>
        </View>
      );
    }
    