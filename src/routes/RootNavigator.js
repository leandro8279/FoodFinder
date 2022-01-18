import React, { useContext, useState, useEffect } from "react";
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from "react-native-paper";
import { View } from "react-native";
import * as Animatable from "react-native-animatable";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";
import { GlobalContext } from "../contexts/Provider";
import { Styles } from "../global";
export default function RootNavigator() {
  const { dispatch, loginState, isDarkTheme } = useContext(GlobalContext);

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: "#ffffff",
      text: "#333333",
    },
  };
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: "#333333",
      text: "#ffffff",
    },
  };
  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;
  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: "RETRIEVE_TOKEN", payload: { token: userToken } });
    }, 1000);
  }, []);
  if (loginState.isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FF6347",
        }}
      >
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require("../../assets/logo.png")}
          style={Styles.logo}
          resizeMode="stretch"
        />
      </View>
    );
  }
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        {loginState.userToken === null ? <AuthNavigator /> : <AppNavigator />}
      </NavigationContainer>
    </PaperProvider>
  );
}
