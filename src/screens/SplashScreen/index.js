import React from "react";
import { StatusBar } from "expo-status-bar";
import * as Animatable from "react-native-animatable";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {
  Container,
  Header,
  Title,
  TitleButton,
  SubTitle,
  Button,
  Box,
} from "./styles";
import { Styles } from "../../global";
export default function SplashScreen({ navigation }) {
  return (
    <Container>
      <StatusBar backgroundColor="#FF6347" style="light" />
      <Header>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require("../../../assets/logo.png")}
          style={Styles.logo}
          resizeMode="stretch"
        />
      </Header>
      <Animatable.View style={Styles.footer} animation="fadeInUpBig">
        <Title>Find best food in your locality!</Title>
        <SubTitle>Sign in with account</SubTitle>

        <Box>
          <Button onPress={() => navigation.navigate("Login")}>
            <LinearGradient
              colors={["#FFA07A", "#FF6347"]}
              style={Styles.signIn}
            >
              <TitleButton>Get Started</TitleButton>
              <MaterialIcons name="navigate-next" color="#fff" size={20} />
            </LinearGradient>
          </Button>
        </Box>
      </Animatable.View>
    </Container>
  );
}
