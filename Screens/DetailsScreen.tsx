import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTodoStore } from "../store/useTodoStore";

const DetailsScreen = () => {
  const todo = useTodoStore((state) => state.todo);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{todo?.title}</Text>
      <Text
        style={[
          styles.status,
          {
            color: todo?.completed ? "green" : "red",
          },
        ]}
      >
        {todo?.completed ? "completed" : "InCompleted"}
      </Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: "gray",
    margin: 9,
    borderRadius: 6,
  },
  title: {
    fontSize: 20,
    textTransform: "capitalize",
    color: "white",
  },
  status: {
    fontSize: 15,
    textTransform: "capitalize",
    color: "white",
  },
});
