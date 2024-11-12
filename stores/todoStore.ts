import { create } from "zustand"
import { Todo } from "../lib/types"

type StatusType = 'all' | 'completed' | 'incompleted'

type Store = {
  todos: Array<Todo>
  status: StatusType
  setStatus: (status: StatusType) => void
  setTodos: (fn: (todos: Array<Todo>) => Array<Todo>) => void
}

export const useTodoStore = create<Store>((set) => ({
  status: 'all',
  todos: [],
  setStatus(status: StatusType) {
    set({ status })
  },
  setTodos(fn: (todos: Array<Todo>) => Array<Todo>) {
    set((prev) => ({ todos: fn(prev.todos) }))
  },
}));
