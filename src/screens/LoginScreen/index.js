import React, { useContext, useState } from "react";
import { TouchableOpacity, StatusBar, Alert } from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { Colors, Users } from "../../global";
import { GlobalContext } from "../../contexts/Provider";
import { signIn } from "../../contexts/actions/auth";
import {
  Action,
  Box,
  Button,
  ButtonSignIn,
  ButtonSignUp,
  Container,
  Error,
  Footer,
  Forgot,
  Gradient,
  Header,
  Input,
  Space,
  SubTitle,
  Title,
  TitleButton,
} from "./styles";

export default function LoginScreen({ navigation }) {
  const [data, setData] = useState({
    username: "Leandro8279",
    password: "33623388",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });
  const { dispatch } = useContext(GlobalContext);

  function updateSecureTextEntry() {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  }

  function textInputChange(val) {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  }

  function handleValidUser(val) {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  }
  function handlePasswordChange(val) {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  }
  function loginHandle(userName, password) {
    const foundUser = Users.filter((item) => {
      return userName == item.username && password == item.password;
    });
    if (data.username.length == 0 || data.password.length == 0) {
      Alert.alert(
        "Wrong Input!",
        "Username or password field cannot be empty.",
        [{ text: "Okay" }]
      );
      return;
    }
    if (foundUser.length == 0) {
      Alert.alert("Invalid User!", "Username or password is incorrect.", [
        { text: "Okay" },
      ]);
      return;
    }
    signIn(foundUser, dispatch, navigation);
  }
  return (
    <Container>
      <StatusBar backgroundColor="#FF6347" style="light" />
      <Header>
        <Title>Welcome!</Title>
      </Header>
      {/* UserName  */}
      <Animatable.View animation="fadeInUpBig" style={Footer}>
        <SubTitle>Username</SubTitle>
        <Action>
          <FontAwesome name="user-o" color={Colors.text} size={20} />
          <Input
            placeholder="Your Username"
            placeholderTextColor="#666666"
            autoCapitalize="none"
            value={data.username}
            onChangeText={(val) => textInputChange(val)}
            onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </Action>

        {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Error>Username must be 4 characters long.</Error>
          </Animatable.View>
        )}
        <Space />
        {/* Password  */}
        <SubTitle>Password</SubTitle>
        <Action>
          <Feather name="lock" color={Colors.text} size={20} />
          <Input
            placeholder="Your Password"
            value={data.password}
            placeholderTextColor="#666666"
            secureTextEntry={data.secureTextEntry ? true : false}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </Action>
        {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Error>Password must be 8 characters long.</Error>
          </Animatable.View>
        )}

        {/* Footer  */}
        <TouchableOpacity>
          <Forgot>Forgot password?</Forgot>
        </TouchableOpacity>

        <Box>
          <ButtonSignIn
            onPress={() => {
              loginHandle(data.username, data.password);
            }}
          >
            <Gradient colors={["#FFA07A", "#FF6347"]} style={styles.signIn}>
              <TitleButton>Sign In</TitleButton>
            </Gradient>
          </ButtonSignIn>

          <ButtonSignUp onPress={() => navigation.navigate("Register")}>
            <TitleButton color="#FF6347">Sign Up</TitleButton>
          </ButtonSignUp>
        </Box>
      </Animatable.View>
    </Container>
  );
}
