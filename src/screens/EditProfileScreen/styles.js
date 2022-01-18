import styled from "styled-components";

export const Container = styled.View`
	flex: 1px;
	align-items: center;
	justify-content: center;
`;

export const Center = styled.View`
	align-items: center;
`;
export const Pressable = styled.TouchableOpacity``;
export const Box = styled.View`
	width: 100px;
	border-radius: 15px;
	justify-content: center;
	align-items: center;
	height: 100px;
`;
export const ImageBackground = styled.ImageBackground``;
export const ImageContainer = styled.View`
	flex: 1px;
	align-items: center;
	justify-content: center;
`;
export const Title = styled.Text`
	margin-top: 10px;
	font-size: 18px;
	font-weight: bold;
`;
export const Action = styled.View`
	flex-direction: row;
	width: 100%;
	margin-bottom: 10px;
	border-bottom-width: 1px;
	border-bottom-color: #f2f2f2;
	padding-bottom: 5px;
	align-items: center;
	margin-bottom: 10px;
`;
export const TextInput = styled.TextInput`
	flex: 1px;
	padding-left: 10px;
	color: #05375a;
`;
export const CommandButton = styled.TouchableOpacity`
	padding: 15px;
	border-radius: 10px;
	background-color: #ff6347;
	align-items: center;
	margin-top: 10px;
`;
export const TitleButton = styled.Text`
	font-size: 17px;
	font-weight: bold;
	color: white;
`;

export const Header = styled.View.attrs({
	backgroundColor: "#FFFFFF",
	shadowColor: "#333333",
	shadowOffset: { width: -1, height: -3 },
	shadowRadius: 2,
	shadowOpacity: 0.4,
	// elevation: 5,
	paddingTop: 20,
	borderTopLeftRadius: 20,
	borderTopRightRadius: 20,
})``;
export const PainelHeader = styled.View`
	align-items: center;
`;
export const Painel = styled.View`
	padding: 20px;
	background-color: #ffffff;
	padding-top: 20px;
	padding-bottom: 20px;
`;
export const PainelTitle = styled.Text`
	font-size: 27px;
	height: 35px;
`;
export const PainelSubTitle = styled.Text`
	font-size: 14px;
	color:gray;
	height: 30px;
	margin-bottom:10px;
`;
export const PainelButton = styled.TouchableOpacity`
	padding:13px;
	background-color: #FF6347;
	align-items: center;
	margin-right: 7px;
	margin-left: 7px;
	margin-bottom:4px;
	border-radius: 10px;
`;
export const ButtonTitle = styled.Text`
	font-size: 17px;
	font-weight: bold;
	color:white;
`;
