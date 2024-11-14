import { Todo } from "../../Domain/Model/Todo";

export default interface TodoDataSource {
  getTodos(): Promise<Todo[]>;
  createTodo(value: string): Promise<Todo>;
  toggleTodoCheck(id: number): Promise<boolean>;
  removeTodo(id: number): Promise<boolean>;
}