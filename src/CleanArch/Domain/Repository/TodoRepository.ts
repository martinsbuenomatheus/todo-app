import { Todo } from "../Model/Todo";

export interface TodoRepository {
  getTodos(): Promise<Todo[]>;
  createTodo(value: string): Promise<Todo>;
  markAsRead(id: number): Promise<boolean>;
  removeTodo(id: number): Promise<boolean>;
}