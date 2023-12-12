import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Todo = ({ todo }) => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.todo}>
      <Text
        style={{ color: "white", textTransform: "capitalize", width: "80%" }}
      >
        {todo?.title}
      </Text>
      <Button title="Details" onPress={() => navigation.navigate("Details")} />
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  todo: {
    backgroundColor: "gray",
    color: "white",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
});
