export const getTodo = async (id: number = 1) => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const res = await data.json();
  return res;
};


export const useTodo = async (id: number = 1) => {
  const [todo, setTodo] =  useState<Todo | null>(null)

  useEffect(()=>{
      async function updateTodo(){
        setTodo()
      }



  })

  return todo
};




const [counter, setCouter] = useState(1)
const todo = useTodo(counter)


<p>
  {todo.title}
</p>