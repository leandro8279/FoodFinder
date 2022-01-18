import { Dimensions } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components";
import { Colors } from "../../global";

export const Container = styled.View`
  flex: 1px;
  background-color: ${Colors.primaryColor};
`;
export const Header = styled.View`
  flex: 2px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: #05375a;
  font-weight: bold;
`;
export const SubTitle = styled.Text`
  color: grey;
  margin-top: 5px;
`;
export const Box = styled.View`
  align-items: flex-end;
  margin-top: 30px;
`;
export const Button = styled.TouchableOpacity``;
export const TitleButton = styled.Text`
  color: white;
  font-weight: bold;
`;
