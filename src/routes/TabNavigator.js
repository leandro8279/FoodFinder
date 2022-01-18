import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";
import { useTheme } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import {
  ExploreScreen,
  HomeScreen,
  NotificationScreen,
  ProfileScreen,
} from "../screens";

export default function TabNavigator({ navigation }) {
  const { Navigator, Screen } = createBottomTabNavigator();
  const { colors } = useTheme();
  return (
    <Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarStyle: {
          elevation: 0,
        },
      }}
    >
      <Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: colors.background,
            shadowColor: colors.background, // iOS
            elevation: 0, // Android
          },
          headerTintColor: colors.text,
          title: "Food Finder",
          headerTitleAlign: "center",
          headerLeft: () => (
            <Ionicons
              name="ios-menu"
              size={25}
              color={colors.text}
              onPress={() => navigation.openDrawer()}
              style={{ marginLeft: 10 }}
            />
          ),
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                marginRight: 10,
                alignItems: "center",
              }}
            >
              <Ionicons
                name="ios-search"
                size={25}
                color={colors.text}
                backgroundColor={colors.background}
                onPress={() => {}}
              />
              <TouchableOpacity
                style={{ paddingHorizontal: 10, marginTop: 5 }}
                onPress={() => {
                  navigation.navigate("Profile");
                }}
              >
                <Avatar.Image
                  source={{
                    uri: "https://api.adorable.io/avatars/80/abott@adorable.png",
                  }}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitleStyle: {
            fontWeight: "bold",
          },
          tabBarLabel: "Home",
          tabBarLabelStyle: {
            color: "#FF6347",
          },
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-home"
              color={focused ? "grey" : "#FF6347"}
              size={26}
            />
          ),
        }}
      />
      <Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          tabBarLabel: "Updates",
          headerStyle: {
            elevation: 0,
            backgroundColor: colors.background,
          },
          headerTitleAlign: "center",
          headerTintColor: colors.text,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerLeft: () => (
            <Ionicons
              name="ios-menu"
              size={25}
              color={colors.text}
              backgroundColor="#1f65ff"
              style={{ marginLeft: 10 }}
              onPress={() => navigation.openDrawer()}
            />
          ),
          tabBarLabelStyle: {
            color: "#1f65ff",
          },
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-notifications"
              color={focused ? "grey" : "#1f65ff"}
              size={26}
            />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={ProfileScreen}
        options={{
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
                onPress={() => navigation.openDrawer()}
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
                onPress={() => navigation.navigate("EditProfile")}
              />
            </View>
          ),
          tabBarLabel: "Profile",
          tabBarLabelStyle: {
            color: "#694fad",
          },
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-person"
              color={focused ? "grey" : "#694fad"}
              size={26}
            />
          ),
        }}
      />
      <Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: "Explore",
          tabBarLabelStyle: {
            color: "#d02860",
          },
          headerTitleAlign: "center",
          headerLeft: () => (
            <Ionicons
              name="ios-menu"
              size={25}
              color={colors.text}
              backgroundColor="#1f65ff"
              style={{ marginLeft: 10 }}
              onPress={() => navigation.openDrawer()}
            />
          ),
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-aperture"
              color={focused ? "grey" : "#d02860"}
              size={26}
            />
          ),
        }}
      />
    </Navigator>
  );
}
