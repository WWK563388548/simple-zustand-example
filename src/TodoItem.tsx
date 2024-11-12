import { X } from 'lucide-react';
import { Todo } from "../lib/types"
import { useTodoStore } from "../stores/todoStore"

const TodoItem = ({ item }: { item: Todo }) => {
  const { setTodos } = useTodoStore()
  const { title, completed, id } = item

  const toggleCompleted = () =>
    setTodos((prevTodos) =>
      prevTodos.map((prevItem) =>
        prevItem.id === id ? { ...prevItem, completed: !completed } : prevItem,
      ),
    )

  const remove = () => {
    console.log('Removing item with id:', id)
    setTodos((prevTodos) => {
      console.log('Current todos:', prevTodos)
      return prevTodos.filter((prevItem) => {
        console.log('Comparing:', prevItem.id, '!==', id)
        return prevItem.id !== id
      })
    })
  }

  return (
    <>
      <input type="checkbox" checked={completed} onChange={toggleCompleted} />
      <span style={{ textDecoration: completed ? 'line-through' : '' }}>
        {title}
      </span>
      <X onClick={remove} />
    </>
  )
}

export default TodoItem;
