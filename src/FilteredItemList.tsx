import { a, useTransition } from "@react-spring/web"
import { useTodoStore } from "../stores/todoStore"
import TodoItem from "./TodoItem"

const FilteredItemList = () => {
  const { todos, status } = useTodoStore()
  const filterTodo = todos.filter((todo) => {
    if (status === 'all') return true
    if (status === 'completed') return todo.completed
    return !todo.completed
  })
  const transitions = useTransition(filterTodo, {
    keys: (todo) => todo.id,
    from: { opacity: 0, height: 0 },
    enter: { opacity: 1, height: 40 },
    leave: { opacity: 0, height: 0 },
  })
  return transitions((style, item) => (
    <a.div className="item" style={style}>
      <TodoItem item={item} />
    </a.div>
  ))
}

export default FilteredItemList;
