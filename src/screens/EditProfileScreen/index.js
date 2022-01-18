import React, { useState } from "react";
import { useTheme } from "react-native-paper";
import {
	MaterialCommunityIcons,
	FontAwesome,
	Feather,
} from "@expo/vector-icons";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";
import {
	Container,
	Title,
	Center,
	Pressable,
	Box,
	ImageBackground,
	ImageContainer,
	Action,
	TextInput,
	CommandButton,
	TitleButton,
	Header,
	PainelHeader,
	Painel,
	PainelTitle,
	PainelSubTitle,
	PainelButton,
	ButtonTitle,
} from "./styles";
import { Colors } from "../../global";
export default function EditProfileScreen() {
	const [image, setImage] = useState(
		"https://api.adorable.io/avatars/80/abott@adorable.png"
	);
	const { colors } = useTheme();
	const bs = React.createRef();
	const fall = new Animated.Value(1);
	function takePhotoFromCamera() {
		alert('takePhotoFromCamera')
	}
	function choosePhotoFromLibrary() {
		alert('choosePhotoFromLibrary')
	}
	function renderInner() {
		return (
			<Painel>
				<Center>
					<PainelTitle>Upload Photo</PainelTitle>
					<PainelSubTitle>Choose Your Profile Picture</PainelSubTitle>
				</Center>

				<PainelButton onPress={takePhotoFromCamera}>
					<ButtonTitle>Take Photo</ButtonTitle>
				</PainelButton>

				<PainelButton onPress={choosePhotoFromLibrary}>
					<ButtonTitle>Choose From Library</ButtonTitle>
				</PainelButton>

				<PainelButton onPress={() => bs.current.snapTo(1)}>
					<ButtonTitle>Cancel</ButtonTitle>
				</PainelButton>
			</Painel>
		);
	}
	function renderHeader() {
		return (
			<Header>
				<PainelHeader>
					<PainelHeader />
				</PainelHeader>
			</Header>
		);
	}
	return (
		<Container>
			<BottomSheet
				ref={bs}
				snapPoints={[370, 0]}
				renderContent={renderInner}
				renderHeader={renderHeader}
				initialSnap={1}
				callbackNode={fall}
				enabledGestureInteraction={true}
			/>
			<Animated.View
				style={{
					margin: 20,
					opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
				}}
			>
				<Center>
					<Pressable onPress={() => bs.current.snapTo(0)}>
						<Box>
							<ImageBackground
								source={{
									uri: image,
								}}
								style={{ height: 100, width: 100 }}
								imageStyle={{ borderRadius: 15 }}
							>
								<ImageContainer>
									<MaterialCommunityIcons
										name="camera"
										size={35}
										color="red"
										style={{
											opacity: 0.7,
											alignItems: "center",
											justifyContent: "center",
											borderWidth: 1,
											borderColor: "#fff",
											borderRadius: 10,
										}}
									/>
								</ImageContainer>
							</ImageBackground>
						</Box>
					</Pressable>
					<Title>John Doe</Title>
				</Center>
				<Action>
					<FontAwesome name="user-o" color={Colors.text} size={20} />
					<TextInput
						placeholder="First Name"
						placeholderTextColor="#666666"
						autoCorrect={false}
					/>
				</Action>
				<Action>
					<FontAwesome name="user-o" color={Colors.text} size={20} />
					<TextInput
						placeholder="Last Name"
						placeholderTextColor="#666666"
						autoCorrect={false}
					/>
				</Action>
				<Action>
					<Feather name="phone" color={Colors.text} size={20} />
					<TextInput
						placeholder="Phone"
						placeholderTextColor="#666666"
						keyboardType="number-pad"
						autoCorrect={false}
					/>
				</Action>
				<Action>
					<FontAwesome name="envelope-o" color={Colors.text} size={20} />
					<TextInput
						placeholder="Email"
						placeholderTextColor="#666666"
						keyboardType="email-address"
						autoCorrect={false}
					/>
				</Action>
				<Action>
					<FontAwesome name="globe" color={Colors.text} size={20} />
					<TextInput
						placeholder="Country"
						placeholderTextColor="#666666"
						autoCorrect={false}
					/>
				</Action>
				<Action>
					<MaterialCommunityIcons
						name="map-marker-outline"
						color={Colors.text}
						size={20}
					/>
					<TextInput
						placeholder="City"
						placeholderTextColor="#666666"
						autoCorrect={false}
					/>
				</Action>
				<CommandButton>
					<TitleButton>Submit</TitleButton>
				</CommandButton>
			</Animated.View>
		</Container>
	);
}
