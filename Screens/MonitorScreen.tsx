import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Todo from "../Components/Todo";
import { useTodoStore } from "../store/useTodoStore";
import { useTodo } from "../utils/useTodos";

const MonitorScreen = () => {
  const { todo, id, increase, decrease, setTodo } = useTodoStore((state) => ({
    todo: state.todo,
    id: state.id,
    increase: state.increaseId,
    decrease: state.decreaseId,
    setTodo: state.setTodo,
  }));

  useEffect(() => {
    const fetchTodo = async () => {
      const todoData = await useTodo(id);
      setTodo(todoData);
      console.log(todoData);
    };

    fetchTodo();
  }, [id]);

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button title="+" onPress={() => increase()} />
        <Text style={styles.todoText}>Todo Id: {id}</Text>
        <Button title="-" onPress={() => decrease()} />
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
