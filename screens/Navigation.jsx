import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Agropartners } from "./Agropartners";
import { FullPartners } from "./FullPartners";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "./Home";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Agropartners" component={Agropartners} />
        <Stack.Screen name="FullPartners" component={FullPartners} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
