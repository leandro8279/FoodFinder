import { LinearGradient } from "expo-linear-gradient";
import { Platform, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components";
import { Colors } from "../../global";
export const Container = styled.View`
  flex: 1px;
  background-color: ${Colors.primaryColor};
`;
export const Header = styled.View`
  flex: 1px;
  justify-content: flex-end;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 50px;
`;
export const Title = styled.Text`
  font-size: 30px;
  color: white;
  font-weight: bold;
`;
export const Footer = {
  flex: 3,
  backgroundColor: "white",
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  paddingHorizontal: 20,
  paddingVertical: 30,
};
export const SubTitle = styled.Text`
  color: #05375a;
  font-size: 18px;
`;
export const Action = styled.View`
  flex-direction: row;
  margin-top: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #f2f2f2;
  padding-bottom: 5px;
  justify-content: center;
  align-items: center;
`;
export const Input = styled.TextInput`
  flex: 1;
  padding-left: 10px;
  color: #05375a;
`;
export const Error = styled.Text`
  color: #ff0000;
  font-size: 14px;
`;

export const Forgot = styled.Text`
  color: #ff6347;
  margin-top: 15px;
`;
export const Box = styled.View`
  margin-top: 50px;
  align-items: center;
`;
export const Space = styled.View`
  height: 15px;
`;
export const ButtonSignIn = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;
export const ButtonSignUp = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  border-color: #ff6347;
  border-width: 1px;
  margin-top: 15px;
`;
export const TitleButton = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.color || "white"};
`;
export const Gradient = styled(LinearGradient)`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;
