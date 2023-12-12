export const useTodo = async (id: number = 1) => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const res = await data.json();
  return res;
};
