import React, { useEffect, useState } from "react";
import { View, Text, Animated, Dimensions, Platform } from "react-native";
import { MaterialCommunityIcons, Ionicons, Fontisto } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import MapView from "react-native-maps";
import { markers } from "../../global";
import {
  Box,
  Button,
  ButtonTitle,
  Card,
  CardTitle,
  Category,
  Container,
  Content,
  Description,
  Image,
  ScrollView,
  SearchBox,
  TextInput,
  Title,
} from "./styles";
import { StarRating } from "../../components";
const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;
export default function ExploreScreen() {
  const theme = useTheme();
  const initialMapState = {
    markers,
    categories: [
      {
        name: "Fastfood Center",
        icon: (
          <MaterialCommunityIcons
            style={styles.chipsIcon}
            name="food-fork-drink"
            size={18}
          />
        ),
      },
      {
        name: "Restaurant",
        icon: (
          <Ionicons name="ios-restaurant" style={styles.chipsIcon} size={18} />
        ),
      },
      {
        name: "Dineouts",
        icon: (
          <Ionicons name="md-restaurant" style={styles.chipsIcon} size={18} />
        ),
      },
      {
        name: "Snacks Corner",
        icon: (
          <MaterialCommunityIcons
            name="food"
            style={styles.chipsIcon}
            size={18}
          />
        ),
      },
      {
        name: "Hotel",
        icon: <Fontisto name="hotel" style={styles.chipsIcon} size={15} />,
      },
    ],
    region: {
      latitude: 22.62938671242907,
      longitude: 88.4354486029795,
      latitudeDelta: 0.04864195044303443,
      longitudeDelta: 0.040142817690068,
    },
  };
  const [state, setState] = useState(initialMapState);
  let mapIndex = 0;
  let mapAnimation = new Animated.Value(0);
  useEffect(() => {
    mapAnimation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (index >= state.markers.length) {
        index = state.markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(regionTimeout);

      const regionTimeout = setTimeout(() => {
        if (mapIndex !== index) {
          mapIndex = index;
          const { coordinate } = state.markers[index];
          _map.current.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: state.region.latitudeDelta,
              longitudeDelta: state.region.longitudeDelta,
            },
            350
          );
        }
      }, 10);
    });
  });
  const _scrollView = React.useRef(null);
  var _map = React.useRef(null);
  return (
    <Container>
      <SearchBox>
        <TextInput
          placeholder="Search here"
          placeholderTextColor="#000"
          autoCapitalize="none"
        />
        <Ionicons name="ios-search" size={20} />
      </SearchBox>
      <ScrollView
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        height={50}
        contentInset={{
          // iOS only
          top: 0,
          left: 0,
          bottom: 0,
          right: 20,
        }}
        contentContainerStyle={{
          paddingRight: Platform.OS === "android" ? 20 : 0,
        }}
      >
        {state.categories.map((category, index) => (
          <Category key={index}>
            {category.icon}
            <Title>{category.name}</Title>
          </Category>
        ))}
      </ScrollView>

      <Animated.ScrollView
        ref={_scrollView}
        horizontal
        pagingEnabled
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + 20}
        snapToAlignment="center"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          paddingVertical: 10,
        }}
        contentInset={{
          top: 0,
          left: SPACING_FOR_CARD_INSET,
          bottom: 0,
          right: SPACING_FOR_CARD_INSET,
        }}
        contentContainerStyle={{
          paddingHorizontal:
            Platform.OS === "android" ? SPACING_FOR_CARD_INSET : 0,
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: mapAnimation,
                },
              },
            },
          ],
          { useNativeDriver: true }
        )}
      >
        {state.markers.map((marker, index) => (
          <Card key={index}>
            <Image source={marker.image} resizeMode="cover" />
            <Box>
              <CardTitle numberOfLines={1}>{marker.title}</CardTitle>
              <StarRating ratings={marker.rating} reviews={marker.reviews} />
              <Description numberOfLines={1}>{marker.description}</Description>
              <Content>
                <Button onPress={() => {}}>
                  <ButtonTitle>Order Now</ButtonTitle>
                </Button>
              </Content>
            </Box>
          </Card>
        ))}
      </Animated.ScrollView>
    </Container>
  );
}
