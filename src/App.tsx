import { FormEvent } from "react"
import { v4 as uuid } from "uuid";
import { useTodoStore } from "../stores/todoStore"
import StatusGroup from "./StatusGroup"
import FilteredItemList from "./FilteredItemList";

const App = () => {
  const { setTodos } = useTodoStore()
  const add = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const title = e.currentTarget.inputTitle.value
    e.currentTarget.inputTitle.value = ''
    setTodos((prevTodos) => [
      ...prevTodos,
      { title, completed: false, id: uuid() },
    ])
  }

  return (
    <form onSubmit={add}>
      <StatusGroup />
      <input name="inputTitle" placeholder="Type ..." />
      <FilteredItemList />
    </form>
  )
}

export default App
