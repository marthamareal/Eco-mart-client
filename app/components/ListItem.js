import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function ListItem({ item }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={item.image} />
      <Text>{item.id}</Text>
      <Text>{item.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  image: {
    width: 200,
    height: 100,
  },
});

export default ListItem;
