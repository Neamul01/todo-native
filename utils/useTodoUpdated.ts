import { useEffect, useState } from "react";
import { Todo } from "../store/useTodoStore";

export const useTodoUpdated = (id: number = 1) => {
  const [todo, setTodo] = useState<Todo | null>(null);

  useEffect(() => {
    const fetchTodo = () => {
      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((res) => res.json())
        .then((data) => setTodo(data));
    };
    fetchTodo();
  }, [id]);

  return todo;
};
