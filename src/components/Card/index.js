import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import StarRating from "../StarRating";
import styles from "./styles";

export default function Card({ itemData, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.cardImgWrapper}>
          <Image
            source={itemData.image}
            resizeMode="cover"
            style={styles.cardImg}
          />
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>{itemData.title}</Text>
          <StarRating ratings={itemData.ratings} reviews={itemData.reviews} />
          <Text numberOfLines={2} style={styles.cardDetails}>
            {itemData.description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
