import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Todo from "../Components/Todo";
import { useTodoUpdated } from "../utils/useTodoUpdated";

const MonitorScreen = () => {
  const [number, setNumber] = useState<number>(1);
  const todo = useTodoUpdated(number);

  // console.log("updatedTodo", todo);

  const handleDecreaseNumber = () => {
    setNumber(number > 1 ? number - 1 : number);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button title="+" onPress={() => setNumber(number + 1)} />
        <Text style={styles.todoText}>Todo Id: {number}</Text>
        <Button title="-" onPress={handleDecreaseNumber} />
      </View>
      <Todo todo={todo} />
    </View>
  );
};

export default MonitorScreen;

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    marginBottom: 10,
  },
  todoText: {
    fontSize: 15,
  },
});
