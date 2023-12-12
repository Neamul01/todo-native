import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useTodoStore } from "../store/useTodoStore";
import { useTodo } from "../utils/useTodos";
import { useNavigation } from "@react-navigation/native";
import Todo from "../Components/Todo";

const TodoScreen = () => {
  const { todo, setTodo } = useTodoStore((state) => ({
    todo: state.todo,
    setTodo: state.setTodo,
  }));
  const navigation = useNavigation<any>();

  useEffect(() => {
    const fetchTodo = async () => {
      const todoData = await useTodo(1);
      setTodo(todoData);
    };

    fetchTodo();
  }, []);
  // console.log("state todo", todo);

  return (
    <View style={styles.container}>
      <Todo todo={todo} />
      <Button
        title="Get Specific todo"
        onPress={() => navigation.navigate("Monitor")}
      />
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
});
