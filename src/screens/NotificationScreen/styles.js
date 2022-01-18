import styled from "styled-components";

export const Container = styled.View`
  flex: 1px;
  background-color: ${(props) => props.color};
`;
export const ButtonView = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: 5px;
  height: 60px;
  padding: 10px;
  margin-bottom: 15px;
`;
export const RowFront = {
  backgroundColor: "#FFF",
  borderRadius: 5,
  height: 60,
  margin: 5,
  marginBottom: 15,
  shadowColor: "#999",
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.8,
  shadowRadius: 2,
  elevation: 5,
};

export const Box = styled.View``;
export const Title = styled.Text`
  font-size: 14px;
  margin-bottom: 5px;
  font-weight: bold;
  color: #666;
`;
export const Details = styled.Text`
  font-size: 12px;
  color: #999;
`;

export const Left = styled.Text``;
export const ButtonRight = styled.TouchableOpacity``;
export const ButtonLeft = styled.TouchableOpacity`
  align-items: flex-end;
  bottom: 0px;
  justify-content: center;
  position: absolute;
  top: 0px;
  width: 75px;
  padding-right: 17px;
  background-color: red;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  right: 0px;
`;

export const RowBack = {
  alignItems: "center",
  backgroundColor: "#DDD",
  flex: 1,
  flexDirection: "row",
  justifyContent: "space-between",
  paddingLeft: 15,
  margin: 5,
  marginBottom: 15,
  borderRadius: 5,
};
export const BackRightBtn = {
  alignItems: "flex-end",
  bottom: 0,
  justifyContent: "center",
  position: "absolute",
  top: 0,
  width: 75,
  paddingRight: 17,
};

export const BackRightBtnRight = {
  backgroundColor: "red",
  right: 0,
  borderTopRightRadius: 5,
  borderBottomRightRadius: 5,
};
export const Trash = { height: 25, width: 25, marginRight: 7 };
