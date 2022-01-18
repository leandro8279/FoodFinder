import { Dimensions } from "react-native";
import styled from "styled-components";

export const Container = styled.View`
  flex: 1px;
`;
export const SearchBox = styled.View.attrs({
  shadowColor: "#ccc",
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.5,
  shadowRadius: 5,
  elevation: 10,
})`
  position: absolute;
  margin-top: 20px;
  flex-direction: row;
  background-color: white;
  width: 90%;
  align-self: center;
  border-radius: 5px;
  padding: 10px;
`;
export const TextInput = styled.TextInput`
  flex: 1px;
  padding: 0px;
`;
export const ScrollView = styled.ScrollView`
  position: absolute;
  top: 80px;
  padding-left: 10px;
  padding-right: 10px;
`;
export const Category = styled.TouchableOpacity.attrs({
  shadowColor: "#ccc",
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.5,
  shadowRadius: 5,
  elevation: 10,
})`
  flex-direction: row;
  background-color: white;
  border-radius: 20px;
  padding: 8px;
  padding-left: 20px;
  padding-right: 20px;
  height: 35px;
`;
export const Title = styled.Text``;
const { width } = Dimensions.get("window");
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
export const Card = styled.View.attrs({
  elevation: 2,
  shadowColor: "#000",
  shadowRadius: 5,
  shadowOpacity: 0.3,
  shadowOffset: { x: 2, y: -2 },
})`
  background-color: white;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  height: ${CARD_HEIGHT}px;
  width: ${CARD_WIDTH}px;
  overflow: hidden;
  margin-left: 5px;
  margin-right: 5px;
`;
export const CardTitle = styled.Text`
  font-size: 12px;
  font-weight: bold;
`;
export const Image = styled.Image`
  flex: 3px;
  height: 100%;
  width: 100%;
  align-self: center;
`;
export const Box = styled.View`
  flex: 2px;
  padding: 10px;
`;
export const Content = styled.View`
  align-items: center;
  margin-top: 5px;
`;
export const Button = styled.TouchableOpacity`
  width: 100%;
  padding: 5px;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  border-color: #ff6347;
  border-width: 1px;
`;
export const Description = styled.Text`
  font-size: 12px;
  color: #444;
`;
export const ButtonTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #ff6347;
`;
