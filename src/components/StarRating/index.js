import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

export default function StarRating(props) {
  let stars = [];
  // Loop 5 times
  for (var i = 1; i <= 5; i++) {
    // set the path to filled stars
    let name = "ios-star";
    // If ratings is lower, set the path to unfilled stars
    if (i > props.ratings) {
      name = "ios-star-outline";
    }

    stars.push(<Ionicons name={name} size={15} style={styles.star} key={i} />);
  }
  return (
    <View style={styles.container}>
      {stars}
      <Text style={styles.text}>({props.reviews})</Text>
    </View>
  );
}
