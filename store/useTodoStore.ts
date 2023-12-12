import { create } from "zustand";

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

interface TodoState {
  todo: Todo | null;
  id: number;
  increaseId: () => void;
  decreaseId: () => void;
  setTodo: (newTodo: Todo | null) => void; // Adjusted the type of newTodo
}

export const useTodoStore = create<TodoState>((set) => ({
  todo: null,
  id: 1,
  setTodo: (newTodo) =>
    set((state) => ({
      todo: newTodo,
    })),
  increaseId: () =>
    set((state) => ({
      id: state.id + 1,
    })),
  decreaseId: () =>
    set((state) => ({
      ...state,
      id: state.id > 0 ? state.id - 1 : state.id,
    })),
}));
