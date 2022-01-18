import { LinearGradient } from "expo-linear-gradient";
import { Platform, StyleSheet } from "react-native";
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
  color: white;
  font-size: 30px;
  font-weight: bold;
`;
export const Footer = {
  flex: Platform.OS === "ios" ? 3 : 5,
  backgroundColor: "#fff",
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
  align-items: center;
`;
export const Space = styled.View`
  height: 15px;
`;
export const ScrollView = styled.ScrollView``;
export const Input = styled.TextInput`
  flex: 1px;
  padding-left: 10px;
  color: #05375a;
`;
export const Box = styled.View`
  align-items: center;
  margin-top: 20px;
`;
export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border-color: ${(props) => (props.border ? "#FF6347" : "transparent")};
  border-width: ${(props) => (props.border ? 1 : 0)}px;
`;
export const ButtonTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.color || "white"};
`;
export const ButtonPassword = styled.TouchableOpacity``;
export const Private = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;
`;
export const TextPrivate = styled.Text`
  color: grey;
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
`;
export const Gradient = styled(LinearGradient)`
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
