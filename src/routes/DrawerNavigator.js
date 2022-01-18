import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useTheme } from "@react-navigation/native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { ProfileScreen, SupportScreen,SettingsScreen,BookmarkScreen } from "../screens";
import { DrawerContent } from "../components";
import TabNavigator from "./TabNavigator";

export default function DrawerNavigator() {
  const { Navigator, Screen } = createDrawerNavigator();
  const { colors } = useTheme();
  return (
    <Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{ headerStyle: { elevation: 0 } }}
    >
      <Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Profile"
        component={ProfileScreen}
        options={(props) => ({
          headerStyle: {
            backgroundColor: colors.background,
            shadowColor: colors.background, // iOS
            elevation: 0, // Android
          },
          headerTintColor: colors.text,
          headerTitleAlign: "center",
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <Ionicons
                name="ios-menu"
                size={25}
                backgroundColor={colors.background}
                color={colors.text}
                onPress={() => props.navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{ marginRight: 10 }}>
              <MaterialCommunityIcons
                name="account-edit"
                size={25}
                backgroundColor={colors.background}
                color={colors.text}
                onPress={() => props.navigation.navigate("EditProfile")}
              />
            </View>
          ),
        })}
      />
      <Screen name="SettingsScreen" component={SettingsScreen} />
      <Screen name="BookmarkScreen" component={BookmarkScreen} />
      <Screen name="SupportScreen" component={SupportScreen} />
    </Navigator>
  );
}
