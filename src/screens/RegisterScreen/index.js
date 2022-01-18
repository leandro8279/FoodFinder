import React from "react";
import { StatusBar } from "expo-status-bar";
import * as Animatable from "react-native-animatable";
import { FontAwesome, Feather } from "@expo/vector-icons";
import {
  Action,
  Container,
  Footer,
  Header,
  Space,
  SubTitle,
  Title,
  ScrollView,
  Input,
  ButtonPassword,
  Private,
  TextPrivate,
  Box,
  Button,
  Gradient,
  ButtonTitle,
} from "./styles";

export default function RegisterScreen({ navigation }) {
  const [data, setData] = React.useState({
    username: "",
    password: "",
    confirm_password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });
  function textInputChange(val) {
    if (val.length !== 0) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
      });
    }
  }
  function handlePasswordChange(val) {
    setData({
      ...data,
      password: val,
    });
  }
  function handleConfirmPasswordChange(vla) {
    setData({
      ...data,
      confirm_password: val,
    });
  }
  function updateSecureTextEntry() {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  }
  function updateConfirmSecureTextEntry() {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  }
  return (
    <Container>
      <StatusBar backgroundColor="#FF6347" style="light" />
      <Header>
        <Title>Register Now!</Title>
      </Header>
      <Animatable.View animation="fadeInUpBig" style={Footer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <SubTitle>Username</SubTitle>
          <Action>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <Input
              placeholder="Your Username"
              autoCapitalize="none"
              onChangeText={(val) => textInputChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </Action>
          <Space />
          <SubTitle>Password</SubTitle>
          <Action>
            <Feather name="lock" color="#05375a" size={20} />
            <Input
              placeholder="Your Password"
              secureTextEntry={data.secureTextEntry ? true : false}
              autoCapitalize="none"
              onChangeText={(val) => handlePasswordChange(val)}
            />
            <ButtonPassword onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </ButtonPassword>
          </Action>
          <Space />
          <SubTitle>Confirm Password</SubTitle>
          <Action>
            <Feather name="lock" color="#05375a" size={20} />
            <Input
              placeholder="Confirm Your Password"
              secureTextEntry={data.confirm_secureTextEntry ? true : false}
              autoCapitalize="none"
              onChangeText={(val) => handleConfirmPasswordChange(val)}
            />
            <ButtonPassword onPress={updateConfirmSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </ButtonPassword>
          </Action>
          <Private>
            <TextPrivate>By signing up you agree to our</TextPrivate>
            <TextPrivate bold> Terms of service</TextPrivate>
            <TextPrivate> and</TextPrivate>
            <TextPrivate bold> Privacy policy</TextPrivate>
          </Private>
          <Box>
            <Button onPress={() => {}}>
              <Gradient colors={["#FFA07A", "#FF6347"]}>
                <ButtonTitle>Sign Up</ButtonTitle>
              </Gradient>
            </Button>
            <Space />
            <Button border onPress={() => navigation.goBack()}>
              <ButtonTitle color="#FF6347">Sign In</ButtonTitle>
            </Button>
          </Box>
        </ScrollView>
      </Animatable.View>
    </Container>
  );
}
