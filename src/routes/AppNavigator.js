import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CardItemDetails, CardListScreen, EditProfileScreen } from "../screens";
import DrawerNavigator from "./DrawerNavigator";

export default function AppNavigator() {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <Navigator>
      <Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Screen
        name="CardListScreen"
        component={CardListScreen}
        options={({ route }) => ({
          headerTitleAlign: "center",
          headerShadowVisible: false,
          title: route.params.title,
        })}
      />
      <Screen
        name="CardItemDetails"
        component={CardItemDetails}
        options={{
          headerTransparent: true,
          headerTintColor: "white",
          headerShadowVisible: false,
          headerTitleAlign: "center",
        }}
      />
      <Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{ headerShadowVisible: false }}
      />
    </Navigator>
  );
}
