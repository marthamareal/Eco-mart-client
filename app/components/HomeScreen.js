import React from "react";
import { FlatList, Image, StyleSheet, Text, View, Dimensions } from "react-native";
import ListItem from "./ListItem";

function HomeScreen(props) {
  const data = [
    {
      image: require("../assets/favicon.png"),
      name: "Dexe trying to see how fart this text will occupy this in  the scroll formart so please bare with me",
      id: 1,
    },
    {
      image: require("../assets/favicon.png"),
      name: "Dexe",
      id: 2,
    },
    {
      image: require("../assets/favicon.png"),
      name: "Dexe",
      id: 3,
    },
    {
      image: require("../assets/favicon.png"),
      name: "Dexe",
      id: 4,
    },
    {
      image: require("../assets/favicon.png"),
      name: "Dexe",
      id: 5,
    },
    {
      image: require("../assets/favicon.png"),
      name: "Dexe",
      id: 6,
    },
    {
      image: require("../assets/favicon.png"),
      name: "Dexe",
      id: 7,
    },
    {
      image: require("../assets/favicon.png"),
      name: "Dexe",
      id: 8,
    },
    {
      image: require("../assets/favicon.png"),
      name: "Dexe",
      id: 9,
    },
    {
      image: require("../assets/favicon.png"),
      name: "Dexe",
      id: 13,
    },
    {
      image: require("../assets/favicon.png"),
      name: "Dexe",
      id: 10,
    },

    {
      image: require("../assets/favicon.png"),
      name: "Dexe",
      id: 11,
    },
    {
      image: require("../assets/favicon.png"),
      name: "Dexe",
      id: 12,
    },
  ];
  const { width } = Dimensions.get("window");
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ListItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40
  }
});

export default HomeScreen;
