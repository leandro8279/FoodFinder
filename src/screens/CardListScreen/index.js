import React from "react";
import { View, Text, FlatList } from "react-native";
import { Card } from "../../components";
import { data } from "../../global";
import styles from "./styles";

export default function CardListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            itemData={item}
            onPress={() =>
              navigation.navigate("CardItemDetails", {
                itemData: item,
                title: item.title,
              })
            }
          />
        )}
      />
    </View>
  );
}
